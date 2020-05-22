class MouseInput {
  constructor() {
    this.x = {
      min: 0,
      max: window.innerWidth,
    };
    this.y = {
      min: 0,
      max: window.innerHeight,
    };

    this.setMouseEvent();
  }

  setMouseEvent() {
    document.body.addEventListener('mousemove', this.calcFractions);
  }

  calcXFraction(e) {
    this.x.fraction = e.clientX / (this.x.max - this.x.min);
  }

  calcYFraction(e) {
    this.y.fraction = e.clientY / (this.y.max - this.y.min);
  }

  calcFractions = e => {
    this.calcXFraction(e);
    this.calcYFraction(e);
  };
}

export default MouseInput;
