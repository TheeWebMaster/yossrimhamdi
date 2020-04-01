import TranslateX from './TranslateX';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXHeadlinesOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.headline', window.innerHeight);
    this.translateXLimits = [
      { start: 100, end: 400 },
      { start: 0, end: -400 }
    ];
    this.setTranslateXObject();
  }
  setTranslateXObject() {
    this.elements.forEach((element, i) => {
      const xLimits = i === 0 ? this.translateXLimits[0] : this.translateXLimits[1];

      new TranslateX(this.scroller, this.relativeScrollInputs[i], element, xLimits, 'px');
    });
  }
}

export default TranslateXHeadlinesOnScroll;
