import ScrollInput from './ScrollInput';
import Transform from './Transform';

class SetupParallaxEnviroment {
  constructor(className, offset = 0) {
    this.elements = document.querySelectorAll(className);
    console.log(offset, className);
    this.offset = offset;
    this.topBoundings = this.getTopElementsBounding();
    this.relativeScrollInputs = this.getRelativeScrollInputs();
  }
  getTopElementsBounding() {
    const topBoundings = [];

    this.elements.forEach(element => {
      const topBounding = element.getBoundingClientRect().top;

      topBoundings.push({
        start: topBounding - window.innerHeight,
        end: topBounding + element.clientHeight + this.offset,
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
