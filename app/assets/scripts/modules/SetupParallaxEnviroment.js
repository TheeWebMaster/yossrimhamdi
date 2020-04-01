import ScrollInput from './ScrollInput';

class SetupParallaxEnviroment {
  constructor(scroller, className, endBoundingOffset = 0, callback = function() {}) {
    this.callback = callback;
    this.scroller = scroller;
    this.elements = document.querySelectorAll(className);
    this.endBoundingOffset = endBoundingOffset;
    this.topBoundings = this.getTopElementsBounding();
    this.relativeScrollInputs = this.getRelativeScrollInputs();
  }
  getTopElementsBounding() {
    const topBoundings = [];

    this.elements.forEach(element => {
      const topBounding = element.getBoundingClientRect().top;

      topBoundings.push({
        start: topBounding - window.innerHeight,
        end: topBounding + element.clientHeight + this.endBoundingOffset
      });
    });

    return topBoundings;
  }
  getRelativeScrollInputs() {
    const relativeScrollInputs = [];

    this.elements.forEach((element, i) => {
      relativeScrollInputs.push(
        new ScrollInput(this.scroller, this.topBoundings[i], this.callback.bind(this, element))
      );
    });

    return relativeScrollInputs;
  }
}

export default SetupParallaxEnviroment;
