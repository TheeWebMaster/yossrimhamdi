import Transform from './Transform';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXAwardHeadlinesOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.headline--award');
    this.scroller = scroller;
    this.xLimits = { start: -60, end: 10 };
    this.setTranslateXObjects();
  }
  setTranslateXObjects() {
    this.elements.forEach((element, i) => {
      new Transform(this.scroller, this.relativeScrollInputs[i], element, this.xLimits, 'px', this.transform);
    });
  }
  transform() {
    this.element.style.transform = `translate(${this.calcCurrentValue()}${this.unit}, -60%)`;
  }
}

export default TranslateXAwardHeadlinesOnScroll;
