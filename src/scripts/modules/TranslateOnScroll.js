import scroller from './Scroller';

class TranslateOnScroll {
  constructor(element, scrollInput, limits, custumTransFunction) {
    this.scrollInput = scrollInput;
    this.limits = limits;
    this.element = element;
    this.transformFunction = custumTransFunction ? custumTransFunction : this.transformFunction;

    scroller.addListener(this.transformFunction.bind(this));
  }

  getCurrentValue() {
    const { start, end } = this.limits;
    return start + this.scrollInput.fraction * (end - start);
  }

  transformFunction() {
    this.element.style.transform = `translateX(${this.getCurrentValue()}px)`;
  }
}

export default TranslateOnScroll;
