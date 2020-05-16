import TextLineAnimation from './TextLineAnimation';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';
import scroller from './Scroller';

class AnimateMileStonesOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.milestone__top-border', { top: 0, bottom: -window.innerHeight + 250 });
    this.limits = { start: -50, end: 0 };

    this.animate();
    scroller.addListener(this.animatinoDescription.bind(this));
  }

  transformFunction() {
    this.element.style.transform = `translateX(${this.getCurrentValue()}%)`;
  }

  animatinoDescription() {
    this.elements.forEach(element => {
      if (
        this.isBorderHalfWayVisible(element.style.transform) &&
        !element.nextElementSibling.classList.contains('line-animation--animated')
      ) {
        new TextLineAnimation(element.nextElementSibling, 'from-right', true);
      }
    });
  }

  isBorderHalfWayVisible(translateX) {
    return parseFloat(translateX.slice(11, -2)) > -20;
  }
}

export default AnimateMileStonesOnScroll;
