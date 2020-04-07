class ScrollInput {
  constructor(scroller, topBounding, callback) {
    this.callback = callback;
    this.scrollY = {
      start: topBounding.start,
      end: topBounding.end,
      get range() {
        return this.end - this.start;
      },
      fraction: 0,
    };
    scroller.addListener(this.calcFraction.bind(this));
  }
  calcFraction({ offset: { y } }) {
    this.scrollY.fraction = (y - this.scrollY.start) / this.scrollY.range;
    this.adjustFraction(this.scrollY.fraction);
  }
  adjustFraction(fraction) {
    if (fraction < 0) {
      this.scrollY.fraction = 0;
    } else if (fraction > 1) {
      this.scrollY.fraction = 1;
      this.callback();
    }
  }
}

export default ScrollInput;
