import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class AnimateMyNameOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.greeting__my-name', { top: document.querySelector('.greeting__my-name').clientHeight, bottom: -240 });
    this.limits = { start: -300, end: 0 };
    this.setTransformObjects();
  }
  transformFunction() {
    this.element.style.transform = `translateY(${this.getCurrentValue()}px)`;
  }
}

export default AnimateMyNameOnScroll;
