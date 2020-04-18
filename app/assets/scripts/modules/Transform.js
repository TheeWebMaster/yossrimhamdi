import scroller from './Scroller';

class Transform {
  constructor(element, scrollInput, limits, transformFunction) {
    this.scrollInput = scrollInput;
    this.limits = limits;
    this.element = element;

    scroller.addListener(transformFunction.bind(this));
  }

  getCurrentValue() {
    const { start, end } = this.limits;
    return start + this.scrollInput.fraction * (end - start);
  }
}

export default Transform;
