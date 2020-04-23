import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXAwardHeadlinesOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.headline--award', { top: 0, bottom: 200 });
    this.limits = { start: -60, end: 10 };
    this.setTransformObjects();
  }
  transformFunction() {
    this.element.style.transform = `translate(${this.getCurrentValue()}px, -60%)`;
  }
}

export default TranslateXAwardHeadlinesOnScroll;
