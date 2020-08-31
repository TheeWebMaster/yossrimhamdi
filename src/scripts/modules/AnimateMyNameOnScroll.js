import scroller from './Scroller';
import Parallax from './Parallax';

class AnimateMyNameOnScroll {
  constructor() {
    this.DOM = {
      myName: document.querySelector('.me__my-name'),
      myImage: document.querySelector('.me__my-image'),
      container: document.querySelector('.me'),
      wrapper: document.querySelector('.me__wrapper'),
    };
    this.limits = {
      transform: { start: -300, end: 0 },
      bounding: {
        top: document.querySelector('.me__my-name').clientHeight / 2,
        bottom:
          document.querySelector('.me__my-name').clientHeight +
          300 -
          window.innerHeight,
      },
    };
    this.waypoints = [
      { offset: 300, text: 'hello!' },
      { offset: 150, text: 'who am I?' },
      { offset: 40, text: 'yosri' },
    ];

    this.setupParallax();
    this.fixedContainersWidth();

    scroller.addListener(this.changeText);
  }

  setupParallax() {
    new Parallax(
      this.DOM.myName,
      this.limits.transform,
      this.limits.bounding,
      this.transformFunction,
    );
  }

  transformFunction() {
    this.element.style.transform = `translateY(${this.getCurrentValue()}px)`;
  }

  changeText = () => {
    const yValue = this.getYValue();

    this.waypoints.forEach(({ offset, text }, i) => {
      if (yValue <= offset) {
        this.DOM.myName.innerText = text;
        this.toggleStrokeClass(i, yValue);
      }
    });

    this.showImage(yValue);
  };

  toggleStrokeClass(i, yValue) {
    if (i % 2 !== 0 || yValue === 0) {
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
