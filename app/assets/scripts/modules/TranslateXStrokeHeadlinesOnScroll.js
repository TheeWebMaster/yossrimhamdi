import TranslateX from './TranslateX';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXStrokeHeadlinesOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.stroke-headline--award, .stroke-headline--contact');
    this.scroller = scroller;
    this.xLimits = { start: -60, end: 10 };
    this.setTranslateXObjects();
  }
  setTranslateXObjects() {
    this.elements.forEach((element, i) => {
      new TranslateX(
        this.scroller,
        this.relativeScrollInputs[i],
        element,
        this.xLimits,
        'px',
        this.transform
      );
    });
  }
  transform() {
    this.element.style.transform = `translate(${this.calcCurrentValue()}${this.unit}, -60%)`;
  }
}

export default TranslateXStrokeHeadlinesOnScroll;
