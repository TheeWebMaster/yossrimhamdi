import scroller from './Scroller';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class AnimateMyNameOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.me__my-name', {
      top: document.querySelector('.me__my-name').clientHeight / 2,
      bottom: -240,
    });

    this.limits = { start: -300, end: 0 };
    this.DOM = {
      myName: this.elements[0],
      myImage: document.querySelector('.me__my-image'),
      container: document.querySelector('.me'),
      wrapper: document.querySelector('.me__wrapper'),
    };
    this.waypoints = [300, 250, 160, 65];
    this.texts = ['hello!', "keep scrolling, don't stop", 'almost', 'yossri'];

    this.animate();
    this.fixedContainersWidth();

    scroller.addListener(this.changeText.bind(this));
  }

  transformFunction() {
    this.element.style.transform = `translateY(${this.getCurrentValue()}px)`;
  }

  changeText() {
    const yValue = this.getYValue();

    this.texts.forEach((text, i) => {
      if (yValue <= this.waypoints[i]) {
        this.DOM.myName.innerText = text;
        this.toggleStrokeClass(i, yValue);
      }
    });

    this.showImage(yValue);
  }

  toggleStrokeClass(i, yValue) {
    if (i === 1 || yValue === 0) {
      this.DOM.myName.classList.add('me__my-name--stroke');
    } else {
      this.DOM.myName.classList.remove('me__my-name--stroke');
    }
  }

  showImage(yValue) {
    if (yValue === 0) {
      this.DOM.myImage.classList.add('me__my-image--is-visible');
    } else {
      this.DOM.myImage.classList.remove('me__my-image--is-visible');
    }
  }

  getYValue() {
    return Math.abs(parseInt(this.DOM.myName.style.transform.slice(11, -3)));
  }

  fixedContainersWidth() {
    this.DOM.container.style.width = `${this.DOM.container.clientWidth}px`;
    this.DOM.wrapper.style.width = `${this.DOM.wrapper.clientWidth}px`;
  }
}

export default AnimateMyNameOnScroll;
