import Transform from './Transform';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class AnimateMileStonesOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.milestone', { start: 0, end: 80 - window.innerHeight });
    this.limits = { start: -50, end: 0 };
    this.setTransformObjects();
  }
  setTransformObjects() {
    this.elements.forEach((element, i) => {
      const topBorder = element.querySelector('.milestone__top-border');
      new Transform(topBorder, this.relativeScrollInputs[i], this.limits, this.transformFunction);
    });
  }
  transformFunction() {
    this.element.style.transform = `translateX(${this.getCurrentValue()}%)`;
  }
  /*  callback() {
    this.querySelector('.milestone__description').classList.add('milestone__description--is-visible');
  } */
}

export default AnimateMileStonesOnScroll;
