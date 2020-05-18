import TextLineAnimation from './TextLineAnimation';
import Parallax from './Parallax';
import scroller from './Scroller';

class AnimateMileStonesOnScroll {
  constructor() {
    this.topBorders = document.querySelectorAll('.milestone__top-border');

    this.setupParallaxObject();
    scroller.addListener(this.animateDescription);
  }

  setupParallaxObject() {
    this.topBorders.forEach(topBorder => {
      new Parallax(topBorder, { start: -50, end: 0 }, { top: 0, bottom: -window.innerHeight + 250 }, this.transformFunction);
    });
  }

  animateDescription = () => {
    this.topBorders.forEach(topBorder => {
      if (this.isBorderHalfWayVisible(topBorder.style.transform) && this.isNotAnimated(topBorder)) {
        new TextLineAnimation(topBorder.nextElementSibling, 'from-right', true);
      }
    });
  };

  transformFunction() {
    this.element.style.transform = `translateX(${this.getCurrentValue()}%)`;
  }

  isNotAnimated(topBorder) {
    return !topBorder.nextElementSibling.classList.contains('line-animation--animated');
  }

  isBorderHalfWayVisible(translateX) {
    return parseFloat(translateX.slice(11, -2)) > -20;
  }
}

export default AnimateMileStonesOnScroll;
