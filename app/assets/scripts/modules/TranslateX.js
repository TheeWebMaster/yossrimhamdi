class TranslateX {
  constructor(scroller, scrollInput, element, transitionXLimits, translateUnit) {
    this.transitionXLimits = transitionXLimits;
    this.scrollInput = scrollInput;
    this.element = element;
    this.translateUnit = translateUnit;
    this.calcRange();
    scroller.onScroll(this.translateX.bind(this));
  }
  translateX() {
    const { start, range } = this.transitionXLimits;
    const { fraction } = this.scrollInput.scrollY;
    const transitionValue = start + fraction * range;
    this.element.style.transform = `translateX(${transitionValue}${this.translateUnit})`;
  }
  calcRange() {
    this.transitionXLimits.range = this.transitionXLimits.end - this.transitionXLimits.start;
  }
}

export default TranslateX;
