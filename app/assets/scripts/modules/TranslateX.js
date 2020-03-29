class TranslateX {
  constructor(scroller, scrollInput, element, limit, toRight, translateUnit) {
    this.limit = limit;
    this.scrollInput = scrollInput;
    this.element = element;
    this.toRight = toRight;
    this.translateUnit = translateUnit;
    scroller.onScroll(this.translateX.bind(this));
  }
  translateX() {
    const { min, max, range } = this.limit;
    const { fraction } = this.scrollInput.scrollY;

    if (this.toRight) {
      this.scrollInput.currentX = min + fraction * range;
    } else {
      this.scrollInput.currentX = max - fraction * range;
    }
    this.element.style.transform = `translateX(${this.scrollInput.currentX}${this.translateUnit})`;
  }
}

export default TranslateX;
