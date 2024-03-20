import React, { useState, useEffect } from "react";

function Reel(appMode, setAppMode) {
  const frames = [];
  const tolerance = 1;
  const comulative_score = score;
  const score = 100;
  const error = 1;
  const letters = ["S", "A", "B", "C", "D", "F"];
  const minScore = 0;
  const maxScore = 100;
  const checkSensitivity = 0.5;
  const offset = [0.0, 0.0, 0.0];

  function addFrame(frame) {
    frames.push(frame);
    return checkForRepeat(frame);
  }

  function getFrame(index) {
    return frames[index];
  }
  function reset() {
    frames = [];
    score = 100;
  }
  function calculateDifference(index, gyroFrame) {
    let frame = frames[index];
    let magnitude =
      (frame[0] - gyroFrame[0]) ** 2 +
      (frame[1] - gyroFrame[1]) ** 2 +
      (frame[2] - gyroFrame[2]) ** 2;
    return Math.sqrt(magnitude);
  }

  function compareGyroFrame(frameIdx, gyroFrame) {
    let difference = calculateDifference(frameIdx, gyroFrame);
    let adjustedDifference = difference * tolerance;
    const score = Math.max(
      minScore,
      Math.min(maxScore, score + adjustedDifference * 100)
    );
  }

  function getScore() {
    return score;
  }

  function getLetter() {
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
  }

  function checkForRepeat(currentFrame) {
    if (frames.length < 100) {
      return false;
    }

    let isRepeat = false;
    let firstFrame = frames[0];
    let diff = 0;

    for (let i = 0; i < 3; i++) {
      diff += Math.abs(currentFrame[i] - firstFrame[i]);
    }
    console.log(diff);

    if (diff <= checkSensitivity) {
      isRepeat = true;
    }

    return isRepeat;
  }
}

export default Reel;
