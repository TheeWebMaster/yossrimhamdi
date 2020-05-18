import ScrollInput from './ScrollInput';
import Transform from './Transform';

class Parallax {
  constructor(element, transLimits, topBoundingOffsets = { top: 0, bottom: 0 }, transformFunction) {
    this.element = element;
    this.topBoundingOffsets = topBoundingOffsets;
    this.transLimits = transLimits;
    this.transformFunction = transformFunction;
    this.topBounding = this.getTopBoundings();
    this.relativeScrollInput = this.getRelativeScrollInput();

    this.animate();
  }

  getTopBoundings() {
    const topBounding = this.element.getBoundingClientRect().top;

    return {
      start: topBounding - window.innerHeight + this.topBoundingOffsets.top,
      end: topBounding + this.element.clientHeight + this.topBoundingOffsets.bottom,
    };
  }

  getRelativeScrollInput() {
    return new ScrollInput(this.topBounding);
  }

  animate() {
    new Transform(this.element, this.relativeScrollInput, this.transLimits, this.transformFunction);
  }
}

export default Parallax;
