class TranslateX {
  constructor(scroller, scrollInput, element, limit, toRight) {
    this.limit = limit;
    this.scrollInput = scrollInput;
    this.element = element;
    this.toRight = toRight;
    scroller.onScroll(this.translateX.bind(this));
  }
  translateX() {
    const { min, max, range } = this.limit;
    const { fraction } = this.scrollInput.scrollY;

    if (this.toRight) {
      this.scrollInput.currentX = max - fraction * range;
    } else {
      this.scrollInput.currentX = min + fraction * range;
    }
    this.element.style.transform = `translateX(${this.scrollInput.currentX}px)`;
  }
}

export default TranslateX;
