class TransformWrokHeadline {
  constructor(scroller, scrollInput, element, transitionYLimits) {
    this.element = element;
    this.scrollInput = scrollInput;
    this.transitionYLimits = transitionYLimits;
    this.calcRange();
    scroller.onScroll(this.transform.bind(this));
  }
  transform() {
    const { start, range } = this.transitionYLimits;
    const { fraction } = this.scrollInput.scrollY;
    const transitionValue = start + fraction * range;
    this.element.style.transform = `translate(39%, ${transitionValue}px) rotate(-90deg)`;
  }
  calcRange() {
    this.transitionYLimits.range = this.transitionYLimits.end - this.transitionYLimits.start;
  }
}

export default TransformWrokHeadline;
