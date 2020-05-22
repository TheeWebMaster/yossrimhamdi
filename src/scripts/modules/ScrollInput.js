import scroller from './Scroller';

class ScrollInput {
  constructor(topBoundings) {
    this.scrollY = {
      start: topBoundings.start,
      end: topBoundings.end,
      range: topBoundings.end - topBoundings.start,
    };

    scroller.addListener(this.calcFraction.bind(this));
  }
  calcFraction({ offset: { y } }) {
    this.fraction = (y - this.scrollY.start) / this.scrollY.range;
    this.fraction = this.fraction < 0 ? 0 : this.fraction > 1 ? 1 : this.fraction;
  }
}

export default ScrollInput;
