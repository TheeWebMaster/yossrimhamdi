import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXAwardHeadlinesOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.headline--award', { top: 0, bottom: 200 }, { start: -60, end: 10 });
  }
  transformFunction() {
    this.element.style.transform = `translate(${this.getCurrentValue()}px, -60%)`;
  }
}

export default TranslateXAwardHeadlinesOnScroll;
