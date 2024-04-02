import { Gyroscope } from "expo-sensors";
class Gyro {
  constructor() {
    if (!Gyro.instance) {
      this.currentFrame = [0, 0, 0];
      this.setInterval = (interval) => {
        Gyroscope.setUpdateInterval(interval);
      };
      Gyroscope.addListener((gyroscopeData) => {
        this.currentFrame = [gyroscopeData.x, gyroscopeData.y, gyroscopeData.z];
      });
      this.getFrame = () => {
        return this.currentFrame;
      };
      Gyro.instance = this;
    }

    return Gyro.instance;
  }
}

export { Gyro };
