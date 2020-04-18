import ScrollInput from './ScrollInput';
import Transform from './Transform';

class SetupParallaxEnviroment {
  constructor(className, endBoundingOffset = 0) {
    this.elements = document.querySelectorAll(className);
    this.endBoundingOffset = endBoundingOffset;
    this.topBoundings = this.getTopElementsBounding();
    this.relativeScrollInputs = this.getRelativeScrollInputs();
  }
  getTopElementsBounding() {
    return Array.from(this.elements).map((element) => {
      return {
        start: element.getBoundingClientRect().top - window.innerHeight,
        end: element.getBoundingClientRect().top + element.clientHeight + this.endBoundingOffset,
      };
    });
  }
  getRelativeScrollInputs() {
    return Array.from(this.elements).map((element, i) => new ScrollInput(this.topBoundings[i]));
  }
  setTransformObjects() {
    this.elements.forEach((element, i) => {
      new Transform(element, this.relativeScrollInputs[i], this.limits, this.transformFunction);
    });
  }
}

export default SetupParallaxEnviroment;
