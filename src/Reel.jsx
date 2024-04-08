import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Gyro } from "./Gyro";
import { Svg, Polyline, Circle, Line } from "react-native-svg";

function Reel(props) {
  const [data, setData] = useState("0,0 0,0");
  const [dotx, setDotx] = useState(0);
  const [doty, setDoty] = useState(0);
  const letters = ["S", "A", "B", "C", "D", "F"];
  const [status, setStatus] = useState(0);
  const graphWidth = Dimensions.get("window").width - 100;
  const graphHeight = Dimensions.get("window").height / 5;
  const top = Dimensions.get("window").height / 4;
  const minScore = 0;
  const maxScore = 100;
  const gyro = new Gyro();
  gyro.setInterval(1000 / props.fps);

  useEffect(() => {
    update();
  }, [props.currentFrame, props.appMode]);

  const update = () => {
    switch (props.appMode) {
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
    if (props.currentFrame >= props.frames.length - 1) {
      console.log("Comparison complete");
      props.setRep(props.rep + 1);
      props.setCurrentFrame(0);
    }
  }

  const addFrame = (frame) => {
    props.setFrames([...props.frames, frame]);
    const repeat = checkForRepeat(frame);
    updateDot();
    return repeat;
  };

  const checkForRepeat = (gyroFrame) => {
    if (props.frames.length < props.gracePeriod * props.fps) {
      return false;
    }
    let isRepeat = false;
    let firstFrame = props.frames[0];
    let diff = 0;

    for (let i = 0; i < 3; i++) {
      diff += Math.abs(gyroFrame[i] - firstFrame[i]);
    }

    if (diff <= props.loopThreshold) {
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
    let frame = props.frames[index];
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
    const widthMod = graphWidth / props.frames.length;

    const firstFrame = props.frames[0];
    for (let i = 0; i < props.frames.length; i++) {
      const frame = props.frames[i];
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
    const frame = props.frames[props.currentFrame];
    const firstFrame = props.frames[0];
    for (let i = 0; i < 3; i++) {
      diff += Math.abs(frame[i] - firstFrame[i]);
    }
    setStatus(graphHeight - (diff * graphHeight) / 6);
  }
  function updateDot() {
    if (props.frames.length === 0) return;
    const frame = gyro.getFrame();
    const firstFrame = props.frames[0];
    let diff = 0;
    for (let i = 0; i < 3; i++) {
      diff += Math.abs(frame[i] - firstFrame[i]);
    }
    const widthMod = graphWidth / props.frames.length;
    setDotx(widthMod * props.currentFrame);
    setDoty(graphHeight - (diff * graphHeight) / 6);
  }
  function getLineColor() {
    return props.styleType === "fitCheck" ? "white" : "black";
  }
  useEffect(() => {
    getLineColor();
  }, [props.styleType]);

  return (
    <>
      <Svg
        height={graphHeight}
        width={graphWidth}
        style={{
          top: top,
          left: 50,
          zIndex: 3,
          position: "absolute",
        }}
      >
        <Polyline
          points={data}
          fill="none"
          stroke={getLineColor()}
          strokeWidth="4"
        />
        <Line
          x1={dotx}
          y1={0}
          x2={dotx}
          y2={graphHeight}
          stroke={getLineColor()}
        />
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
