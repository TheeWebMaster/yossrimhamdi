import TranslateX from './TranslateX';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXStrokeHeadlinesOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.stroke-headline--award, .stroke-headline--contact');
    this.scroller = scroller;
    this.translateXLimits = { start: 0, end: 100 };
    this.setTranslateXObjects();
  }
  setTranslateXObjects() {
    this.elements.forEach((element, i) => {
      new TranslateX(this.scroller, this.relativeScrollInputs[i], element, this.translateXLimits, 'px');
    });
  }
}

export default TranslateXStrokeHeadlinesOnScroll;
