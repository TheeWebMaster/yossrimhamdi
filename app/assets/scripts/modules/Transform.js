import scroller from './Scroller';

class Transform {
  constructor(element, scrollInput, limits, transformFunction) {
    this.scrollInput = scrollInput;
    this.limits = limits;
    this.element = element;

    scroller.addListener(transformFunction.bind(this));
  }

  calcCurrentValue() {
    const { start, end } = this.limits;
    const { fraction } = this.scrollInput.scrollY;
    return start + fraction * (end - start);
  }
}

export default Transform;
