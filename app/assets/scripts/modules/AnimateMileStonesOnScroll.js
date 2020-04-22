import SetupParallaxEnviroment from './SetupParallaxEnviroment';
import scroller from './Scroller';

class AnimateMileStonesOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.milestone__top-border', { start: 0, end: 200 });
    this.limits = { start: -50, end: 0 };
    this.setTransformObjects();
    scroller.addListener(this.revealMileStoneText.bind(this));
  }
  transformFunction() {
    this.element.style.transform = `translateX(${this.getCurrentValue()}%)`;
  }
  revealMileStoneText({ offset: { y } }) {
    this.elements.forEach(element => {
      if (element.style.transform === 'translateX(0%)') {
        element.nextElementSibling.classList.add = 'milestone__description--is-visible';
      }
    });
  }
}

export default AnimateMileStonesOnScroll;
