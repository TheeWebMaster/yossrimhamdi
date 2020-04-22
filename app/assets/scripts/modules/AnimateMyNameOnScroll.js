import scroller from './Scroller';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class AnimateMyNameOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.me__my-name', { top: document.querySelector('.me__my-name').clientHeight, bottom: -240 });
    this.myImage = document.querySelector('.me__my-image');
    this.limits = { start: -300, end: 0 };
    this.waypoints = [300, 250, 160, 50];
    this.texts = ['hello!', "keep scrolling, don't stop", 'almost', 'yossri'];

    this.setTransformObjects();
    this.fixedContainerWidth();

    scroller.addListener(this.changeText.bind(this));
  }

  transformFunction() {
    this.element.style.transform = `translateY(${this.getCurrentValue()}px)`;
  }

  changeText() {
    const yValue = this.getYValue();
    this.texts.forEach((text, i) => {
      if (yValue <= this.waypoints[i]) {
        this.elements[0].innerText = text;

        if (i === 1 || i === 3) {
          this.elements[0].classList.add('me__my-name--stroke');
        } else {
          this.elements[0].classList.remove('me__my-name--stroke');
        }
      }
    });

    if (yValue === 0) {
      this.myImage.style.opacity = 1;
    } else {
      this.myImage.style.opacity = 0;
    }
  }

  getYValue() {
    return Math.abs(parseInt(this.elements[0].style.transform.slice(11, -3)));
  }

  fixedContainerWidth() {
    const container = document.querySelector('.me');
    const wrapper = document.querySelector('.me__wrapper');
    container.style.width = `${container.clientWidth}px`;
    wrapper.style.width = `${wrapper.clientWidth}px`;
  }
}

export default AnimateMyNameOnScroll;
