import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import Gyro from "./Gyro";
import RealTimeLineGraph from "./RealTimeLineGraph";

function Reel(props) {
  const [frames, setFrames] = useState([]);
  const [data, setData] = useState([]);
  const tolerance = 2;
  const letters = ["S", "A", "B", "C", "D", "F"];
  const graphWidth = 300;
  const graphHeight = 200;
  const minScore = 0;
  const maxScore = 100;
  const checkSensitivity = 0.5;
  const gyro = new Gyro();
  const gracePeriod = 3;
  const fps = 10;

  useEffect(() => {
    update();
  }, [props.currentFrame, props.appMode]);

  const update = () => {
    switch (props.appMode) {
      case "noRecording":
        break;
      case "idle":
        break;
      case "recording":
        recording();
        break;
      case "comparing":
        comparing();
        break;
      default:
        break;
    }
  };
  function recording() {
    if (addFrame(gyro.getFrame())) {
      console.log("Repeat detected");
      props.setAppMode("comparing");
      props.setCurrentFrame(0);
    }
  }
  function comparing() {
    compareGyroFrame(props.currentFrame);
    if (props.currentFrame >= frames.length - 1) {
      console.log("Comparison complete");
      props.setCurrentFrame(0);
    }
  }

  const addFrame = (frame) => {
    setFrames([...frames, frame]);
    const repeat = checkForRepeat(frame);
    if (props.currentFrame < gracePeriod * fps && repeat) {
      repeat = false;
    }
    return repeat;
  };

  const checkForRepeat = (gyroFrame) => {
    let isRepeat = false;
    let firstFrame = frames[0];
    let diff = 0;

    for (let i = 0; i < 3; i++) {
      diff += Math.abs(gyroFrame[i] - firstFrame[i]);
    }

    if (diff <= checkSensitivity) {
      isRepeat = true;
    }

    return isRepeat;
  };

  const compareGyroFrame = (frameIdx) => {
    console.log("Score: " + props.score);
    let adjustedDifference = -calculateDifference(frameIdx) + tolerance;
    props.setScore(
      Math.max(minScore, Math.min(maxScore, props.score + adjustedDifference))
    );
  };

  const calculateDifference = (index) => {
    let gyroFrame = gyro.getFrame();
    let frame = frames[index];
    let magnitude =
      (frame[0] - gyroFrame[0]) ** 2 +
      (frame[1] - gyroFrame[1]) ** 2 +
      (frame[2] - gyroFrame[2]) ** 2;
    return Math.sqrt(magnitude);
  };
  function getFrame() {
    try {
      return frames[props.currentFrame];
    } catch (e) {
      return [0, 0, 0];
    }
  }

  const getLetter = () => {
    let i;
    if (score >= 90) {
      i = 0;
    } else if (score >= 70) {
      i = 1;
    } else if (score >= 50) {
      i = 2;
    } else if (score >= 30) {
      i = 3;
    } else if (score >= 20) {
      i = 4;
    } else if (score >= 0) {
      i = 5;
    }
    return letters[i];
  };
  function calcGraphData() {
    let diffs = [];
    const firstFrame = frames[0];
    for (let i = 0; i < frames.length; i++) {
      const frame = frames[i];
      let diff = 0;
      for (let i = 0; i < 3; i++) {
        diff += Math.abs(frame[i] - firstFrame[i]);
      }
      diffs.push(diff);
    }
    setData(diffs);
  }

  return (
    <>
      <RealTimeLineGraph data={data} width={graphWidth} height={graphHeight} />
      <Text style={{ top: 400, left: 450, fontSize: 32, position: "absolute" }}>
        {props.currentFrame}
        {" /"} {frames.length}
        {"\n"}
        {getFrame()}
      </Text>
      <Text style={{ top: 400, left: 125, fontSize: 32, position: "absolute" }}>
        {props.currentFrame}
        {"\n"} {gyro.getFrame()}
      </Text>
    </>
  );
}

export default Reel;
