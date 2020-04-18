import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateYWorkHeadlineOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.headline--work', { end: document.querySelector('.headline--work').clientWidth });
    this.limits = { start: 0, end: -200 };
    this.setTransformObjects();
  }
  transformFunction() {
    this.element.style.transform = `translate(39%, ${this.getCurrentValue()}px) rotate(-90deg)`;
  }
}

export default TranslateYWorkHeadlineOnScroll;
