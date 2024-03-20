import Reel from "./Reel";
import Gyro from "./Gyro";
import { useState } from "react";

class Driver {
  constructor() {
    let modes = [
      "noRecording",
      "idle",
      "recording",
      "comparing",
      "calibrating",
    ];
    const [appMode, setAppMode] = useState(modes[0]);
    this.reel = new Reel(appMode, setAppMode);
    this.gyro = new Gyro();
    this.toleranceLevel = 0.5;
    this.score = 1;
    this.grade = "S";
    this.currentFrame = 0;
  }
}
export default Driver;
