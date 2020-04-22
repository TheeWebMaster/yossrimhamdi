import ScrollInput from './ScrollInput';
import Transform from './Transform';

class SetupParallaxEnviroment {
  constructor(className, offset = { start: 0, end: 0 }) {
    this.elements = document.querySelectorAll(className);
    this.topBoundings = this.getTopElementsBounding(offset);
    this.relativeScrollInputs = this.getRelativeScrollInputs();
  }
  getTopElementsBounding(offset) {
    const topBoundings = [];

    this.elements.forEach(element => {
      const topBounding = element.getBoundingClientRect().top - window.innerHeight;
      topBoundings.push({
        start: topBounding + offset.start,
        end: topBounding + element.clientHeight + offset.end,
      });
    });

    return topBoundings;
  }
  getRelativeScrollInputs() {
    const relativeScrollInputs = [];

    this.elements.forEach((element, i) => {
      relativeScrollInputs.push(new ScrollInput(this.topBoundings[i]));
    });

    return relativeScrollInputs;
  }
  setTransformObjects() {
    this.elements.forEach((element, i) => {
      new Transform(element, this.relativeScrollInputs[i], this.limits, this.transformFunction);
    });
  }
}

export default SetupParallaxEnviroment;
