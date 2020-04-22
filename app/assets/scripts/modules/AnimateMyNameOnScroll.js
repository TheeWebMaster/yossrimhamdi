import scroller from './Scroller';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class AnimateMyNameOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.greeting__my-name', { top: document.querySelector('.greeting__my-name').clientHeight, bottom: -240 });
    this.limits = { start: -300, end: 0 };
    this.waypoints = [300, 250, 180, 110, 40, 0];
    this.texts = ['yossri', 'here we go!', 'keep scrolling', 'almost', 'yossri'];

    this.setTransformObjects();
    this.fixedContainerWidth();

    scroller.addListener(this.changeText.bind(this));
  }

  transformFunction() {
    this.element.style.transform = `translateY(${this.getCurrentValue()}px)`;
  }

  changeText() {
    this.texts.forEach((text, i) => {
      if (this.getYValue() <= this.waypoints[i]) {
        this.elements[0].innerText = text;
      }
    });
  }

  getYValue() {
    return Math.abs(parseInt(this.elements[0].style.transform.slice(11, -3)));
  }

  fixedContainerWidth() {
    const container = document.querySelector('.greeting');

    container.style.width = `${container.clientWidth}px`;
  }
}

export default AnimateMyNameOnScroll;
