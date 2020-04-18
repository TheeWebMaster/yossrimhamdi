import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateMyNameOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.greeting__my-name', { start: 200, end: 0 });
    this.limits = { start: -300, end: 0 };
    this.setTransformObjects();
  }
  transformFunction() {
    this.element.style.transform = `translateY(${this.getCurrentValue()}px)`;
  }
}

export default TranslateMyNameOnScroll;
