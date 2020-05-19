class TransformOnMouseMove {
  constructor(element, transLimit, mouseInput) {
    this.element = element;
    this.transLimit = transLimit;
    this.mouseInput = mouseInput;

    this.setMouseEvent();
  }

  setMouseEvent() {
    document.body.addEventListener('mousemove', this.move);
  }

  move = () => {
    this.element.style.transform = `translate(${this.getXvalue()}px, ${this.getYvalue()}px)`;
  };

  getXvalue() {
    const { xFraction } = this.mouseInput;
    const { min, max } = this.transLimit.x;

    return min + (max - min) * xFraction;
  }

  getYvalue() {
    const { yFraction } = this.mouseInput;
    const { min, max } = this.transLimit.y;

    return min + (max - min) * yFraction;
  }
}

export default TransformOnMouseMove;
