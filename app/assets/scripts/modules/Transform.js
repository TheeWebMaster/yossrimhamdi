class Transform {
  constructor(scroller, scrollInput, element, xLimits, unit = 'px', costumTransformFunction) {
    this.scrollInput = scrollInput;
    this.xLimits = xLimits;
    this.element = element;
    this.unit = unit;
    scroller.onScroll(
      costumTransformFunction ? costumTransformFunction.bind(this) : this.translateX.bind(this)
    );
  }
  translateX() {
    this.element.style.transform = `translateX(${this.calcCurrentValue()}${this.unit})`;
  }
  calcCurrentValue() {
    const { start, end } = this.xLimits;
    const { fraction } = this.scrollInput.scrollY;
    return start + fraction * (end - start);
  }
}

export default Transform;
