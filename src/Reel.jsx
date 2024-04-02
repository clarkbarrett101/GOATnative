import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Gyro } from "./Gyro";
import { Svg, Polyline, Circle, Line } from "react-native-svg";

function Reel(props) {
  const [frames, setFrames] = useState([]);
  const [data, setData] = useState("0,0 0,0");
  const [dotx, setDotx] = useState(0);
  const [doty, setDoty] = useState(0);
  const letters = ["S", "A", "B", "C", "D", "F"];
  const [status, setStatus] = useState(0);
  const graphWidth = 300;
  const graphHeight = 150;
  const minScore = 0;
  const maxScore = 100;
  const gyro = new Gyro();
  gyro.setInterval(1000 / props.fps);

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
    props.setRound(props.currentFrame);
    if (addFrame(gyro.getFrame())) {
      console.log("Repeat detected");
      props.setAppMode("comparing");
      calcGraphData();
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
    updateDot();
    return repeat;
  };

  const checkForRepeat = (gyroFrame) => {
    if (frames.length < props.gracePeriod * props.fps) {
      return false;
    }
    let isRepeat = false;
    let firstFrame = frames[0];
    let diff = 0;

    for (let i = 0; i < 3; i++) {
      diff += Math.abs(gyroFrame[i] - firstFrame[i]);
    }

    if (diff <= props.checkSensitivity) {
      isRepeat = true;
    }

    return isRepeat;
  };

  const compareGyroFrame = (frameIdx) => {
    updateDot();
    console.log("Score: " + props.score);
    let adjustedDifference = -calculateDifference(frameIdx) + props.tolerance;
    updateGraphDot();
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
    let graphString = "";
    const widthMod = graphWidth / frames.length;

    const firstFrame = frames[0];
    for (let i = 0; i < frames.length; i++) {
      const frame = frames[i];
      let diff = 0;
      for (let i = 0; i < 3; i++) {
        diff += Math.abs(frame[i] - firstFrame[i]);
      }
      graphString +=
        Math.round(widthMod * i) +
        "," +
        (graphHeight - Math.round((diff * graphHeight) / 6)) +
        " ";
    }
    setData(graphString);
  }
  function updateGraphDot() {
    let diff = 0;
    const frame = frames[props.currentFrame];
    const firstFrame = frames[0];
    for (let i = 0; i < 3; i++) {
      diff += Math.abs(frame[i] - firstFrame[i]);
    }
    setStatus(graphHeight - (diff * graphHeight) / 6);
  }
  function updateDot() {
    if (frames.length === 0) return;
    const frame = gyro.getFrame();
    const firstFrame = frames[0];
    let diff = 0;
    for (let i = 0; i < 3; i++) {
      diff += Math.abs(frame[i] - firstFrame[i]);
    }
    const widthMod = graphWidth / frames.length;
    setDotx(widthMod * props.currentFrame);
    setDoty(graphHeight - (diff * graphHeight) / 6);
  }

  return (
    <>
      <Svg
        height={graphHeight}
        width={graphWidth}
        style={{
          top: 250,
          alignContent: "center",
          zIndex: 3,
          position: "absolute",
        }}
      >
        <Polyline points={data} fill="none" stroke="black" strokeWidth="12" />
        <Line x1={dotx} y1={0} x2={dotx} y2={graphHeight} stroke="black" />
        <Circle cx={dotx} cy={status} r="12" fill="white" />
        <Line
          x1={dotx}
          y1={status}
          x2={dotx}
          y2={doty}
          stroke="red"
          strokeWidth={5}
        />
        <Circle
          cx={dotx}
          cy={doty}
          r="10"
          fill={status > 0.5 ? "red" : "green"}
        />
      </Svg>
    </>
  );
}

export { Reel };
/*

 */
