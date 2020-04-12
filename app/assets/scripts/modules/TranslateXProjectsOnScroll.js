import Transform from './Transform';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXProjectsOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.project', window.innerHeight);
    this.xLimits = [
      { start: 100, end: 400 },
      { start: 100, end: -400 },
    ];
    this.setTransformObject();
  }
  setTransformObject() {
    this.elements.forEach((element, i) => {
      const xLimits = i % 2 === 0 ? this.xLimits[0] : this.xLimits[1];
      new Transform(this.scroller, this.relativeScrollInputs[i], element, xLimits);
    });
  }
}

export default TranslateXProjectsOnScroll;
