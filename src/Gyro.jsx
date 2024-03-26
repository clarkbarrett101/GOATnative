class Gyro {
  constructor() {
    if (!Gyro.instance) {
      console.log("Gyro class");
      this.testMod = 0;
      this.getFrame = () => {
        this.testMod += 0.1;
        return [
          Math.round(Math.sin(this.testMod) * 10) / 10,
          Math.round(Math.sin(this.testMod * 2) * 10) / 10,
          Math.round(Math.sin(this.testMod / 2) * 10) / 10,
        ];
      };
      Gyro.instance = this;
    }

    return Gyro.instance;
  }
}

export default Gyro;
