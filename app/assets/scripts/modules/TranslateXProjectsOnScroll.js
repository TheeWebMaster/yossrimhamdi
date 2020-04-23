import Transform from './Transform';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXProjectsOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.project', undefined, [
      { start: 100, end: 400 },
      { start: 100, end: -400 },
    ]);
  }
  setTransformObjects() {
    this.elements.forEach((element, i) => {
      new Transform(
        element,
        this.relativeScrollInputs[i],
        i % 2 === 0 ? this.limits[0] : this.limits[1]
      );
    });
  }
}

export default TranslateXProjectsOnScroll;
