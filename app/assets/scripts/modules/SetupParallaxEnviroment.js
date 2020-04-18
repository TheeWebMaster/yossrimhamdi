import ScrollInput from './ScrollInput';
import Transform from './Transform';

class SetupParallaxEnviroment {
  constructor(className, offset = { start: 0, end: 0 }) {
    this.elements = document.querySelectorAll(className);
    this.topBoundings = this.getTopElementsBounding(offset);
    this.relativeScrollInputs = this.getRelativeScrollInputs();
  }
  getTopElementsBounding(offset) {
    return Array.from(this.elements).map((element) => {
      return {
        start: element.getBoundingClientRect().top - window.innerHeight + offset.start,
        end: element.getBoundingClientRect().top + element.clientHeight + offset.end,
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
