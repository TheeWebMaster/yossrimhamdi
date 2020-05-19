class MouseInput {
  constructor() {
    document.body.addEventListener('mousemove', this.calcFractions);
  }
  calcFractions = e => {
    this.xFraction = e.clientX / window.innerWidth;
    this.yFraction = e.clientY / window.innerHeight;
  };
}

export default MouseInput;
