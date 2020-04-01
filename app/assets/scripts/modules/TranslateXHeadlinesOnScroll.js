import TranslateX from './TranslateX';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXHeadlinesOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.headline', window.innerHeight);
    this.xLimits = [
      { start: 100, end: 400 },
      { start: 0, end: -400 }
    ];
    this.setTranslateXObject();
  }
  setTranslateXObject() {
    this.elements.forEach((element, i) => {
      const xLimits = i % 2 === 0 ? this.xLimits[0] : this.xLimits[1];
      new TranslateX(this.scroller, this.relativeScrollInputs[i], element, xLimits);
    });
  }
}

export default TranslateXHeadlinesOnScroll;
