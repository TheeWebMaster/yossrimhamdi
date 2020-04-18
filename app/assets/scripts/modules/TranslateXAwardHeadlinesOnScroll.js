import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXAwardHeadlinesOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.headline--award');
    this.limits = { start: -60, end: 10 };
    this.setTransformObjects();
  }
  transformFunction() {
    this.element.style.transform = `translate(${this.getCurrentValue()}px, -60%)`;
  }
}

export default TranslateXAwardHeadlinesOnScroll;
