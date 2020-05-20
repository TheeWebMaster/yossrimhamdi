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
    this.element.style.transform = `translate(${this.getValue('x')}px, ${this.getValue('y')}px)`;
  };

  getValue(position) {
    const { fraction } = this.mouseInput[position];
    const { min, max } = this.transLimit[position];

    return min + (max - min) * fraction;
  }
}

export default TransformOnMouseMove;
