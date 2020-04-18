import Transform from './Transform';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXProjectsOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.project', { start: 0, end: window.innerHeight });
    this.limits = [
      { start: 100, end: 400 },
      { start: 100, end: -400 },
    ];
    this.setTransformObjects();
  }
  setTransformObjects() {
    this.elements.forEach((element, i) => {
      const relativeLimits = i % 2 === 0 ? this.limits[0] : this.limits[1];
      new Transform(element, this.relativeScrollInputs[i], relativeLimits, this.transformFunction);
    });
  }
  transformFunction() {
    this.element.style.transform = `translateX(${this.getCurrentValue()}px)`;
  }
}

export default TranslateXProjectsOnScroll;
