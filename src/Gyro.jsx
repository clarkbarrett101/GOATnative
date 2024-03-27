class Gyro {
  constructor() {
    if (!Gyro.instance) {
      console.log("Gyro class");
      this.testMod = 0;
      this.getFrame = () => {
        this.testMod += 0.05;
        return [
          Math.random() / 10 -
            0.05 +
            Math.round(Math.sin(this.testMod) * 10) / 10,
          Math.random() / 10 -
            0.05 +
            Math.round(Math.sin(this.testMod) * 10) / 10,
          Math.random() / 10 -
            0.05 +
            Math.round(Math.sin(this.testMod) * 10) / 10,
        ];
      };
      Gyro.instance = this;
    }

    return Gyro.instance;
  }
}

export { Gyro };
