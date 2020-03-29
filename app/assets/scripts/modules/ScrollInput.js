class ScrollInput {
  constructor(scroller, offset) {
    this.scrollY = {
      start: offset.top,
      end: offset.end,
      get range() {
        return this.end - this.start;
      },
      fraction: 0
    };
    scroller.onScroll(this.calcFraction.bind(this));
  }
  calcFraction({ y: yPosition }) {
    this.scrollY.fraction = (yPosition - this.scrollY.start) / this.scrollY.range;
    this.adjustFraction(this.scrollY.fraction);
  }
  adjustFraction(fraction) {
    if (fraction < 0) {
      this.scrollY.fraction = 0;
    } else if (fraction > 1) {
      this.scrollY.fraction = 1;
    }
  }
}

export default ScrollInput;
