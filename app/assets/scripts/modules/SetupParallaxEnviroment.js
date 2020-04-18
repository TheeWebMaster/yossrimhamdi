import ScrollInput from './ScrollInput';

class SetupParallaxEnviroment {
  constructor(className, endBoundingOffset = 0) {
    this.elements = document.querySelectorAll(className);
    this.endBoundingOffset = endBoundingOffset;
    this.topBoundings = this.getTopElementsBounding();
    this.relativeScrollInputs = this.getRelativeScrollInputs();
  }
  getTopElementsBounding() {
    return this.elements.map((element) => {
      const topBounding = element.getBoundingClientRect().top;

      return {
        start: topBounding - window.innerHeight,
        end: topBounding + element.clientHeight + this.endBoundingOffset,
      };
    });
  }
  getRelativeScrollInputs() {
    return this.elements.map((element, i) => new ScrollInput(this.topBoundings[i]));
  }
}

export default SetupParallaxEnviroment;
