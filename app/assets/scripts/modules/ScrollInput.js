import scroller from './Scroller';

class ScrollInput {
  constructor(topBounding) {
    this.scrollY = {
      start: topBounding.start,
      end: topBounding.end,
      range: topBounding.end - topBounding.start,
    };

    scroller.addListener(this.calcFraction.bind(this));
  }
  calcFraction({ offset: { y } }) {
    this.fraction = (y - this.scrollY.start) / this.scrollY.range;
    this.fraction = this.fraction < 0 ? 0 : this.fraction > 1 ? 1 : this.fraction;
  }
}

export default ScrollInput;
