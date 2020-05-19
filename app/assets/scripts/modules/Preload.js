import TextLineAnimation from './TextLineAnimation';
import scroller from './Scroller';
import CursorInteractions from './CursorInteractions';
import Cursor from './Cursor';

class Preload {
  constructor() {
    this.DOM = {
      preload: {
        wrapper: document.querySelector('.preload-overlay'),
        state: document.querySelector('.preload-overlay__state'),
      },
      loader: {
        wrapper: document.querySelector('.loader'),
        circle: document.querySelector('.loader__circle'),
      },
      header: {
        myName: document.querySelector('.header__my-name'),
        navListWrapper: document.querySelector('.header__nav-list-wrapper'),
        adList: document.querySelectorAll('.header__ad-list li'),
        messageList: document.querySelectorAll('.header__availability-message li'),
      },
      cursor: document.querySelector('.cursor'),
      frontal: document.querySelector('.frontal'),
    };
    this.cursor = new Cursor();
    this.timer = {
      start: 0,
      interval: null,
      limit: 700,
    };

    this.setReadyStateEvent();
    this.animateMyNameAndAdListIntoView();

    scroller.addListener(this.disableScrolling);
  }

  setReadyStateEvent() {
    document.addEventListener('readystatechange', this.handleReadyState);
  }

  setMousePressEvents() {
    this.DOM.loader.wrapper.addEventListener('mousedown', this.showPageContentIfReachedTimeLimit);
    document.body.addEventListener('mouseup', this.enableMouseInteractions);
  }

  handleReadyState = e => {
    const { circle, wrapper } = this.DOM.loader;

    if (e.target.readyState === 'complete') {
      circle.style.animation = 'loaded 2000ms forwards';

      setTimeout(() => {
        this.howClickAndHoldMessage();
        this.setMousePressEvents();
        wrapper.classList.add('loader--interactive');
      }, 1900);
    }
  };

  showPageContentIfReachedTimeLimit = () => {
    this.timer.start = Date.now();
    this.timer.interval = setInterval(this.showPageContent, 100);
  };

  showPageContent = () => {
    const { preload, cursor, frontal } = this.DOM;

    if (this.reachedTimeLimit()) {
      preload.wrapper.classList.add('preload-overlay--loaded');
      cursor.classList.add('cursor--is-visible');
      frontal.classList.add('frontal--animated');

      this.animateNavAndAvailabilityMessage();
      this.clearInterval();
    }
  };

  enableMouseInteractions = () => {
    this.clearInterval();

    if (this.reachedTimeLimit()) {
      this.enableScrolling();
      this.cursor.setMouseEvent();
      new CursorInteractions();
    }
  };

  clearInterval() {
    clearInterval(this.timer.interval);
  }

  disableScrolling() {
    scroller.scrollTo(0, 0, 0);
  }

  enableScrolling() {
    scroller.removeListener(this.disableScrolling);
  }

  reachedTimeLimit() {
    return Date.now() - this.timer.start >= this.timer.limit;
  }

  howClickAndHoldMessage() {
    new TextLineAnimation(this.DOM.preload.state, 'from-bottom', true);
  }

  animateMyNameAndAdListIntoView() {
    const { myName, adList } = this.DOM.header;
    const adAnimations = this.getAnimations(adList, 'from-top');

    setTimeout(() => new TextLineAnimation(myName, 'from-top', 500));
    this.runAnimations(adAnimations, 1500);
  }

  getAnimations(elements, position) {
    return Array.from(elements).map(element => new TextLineAnimation(element, position));
  }

  runAnimations(animations, animationDelay = 0, timeBetween = 0) {
    setTimeout(() => {
      animations.forEach((animation, i) => {
        setTimeout(() => {
          animation.triggerAnimation();
        }, i * timeBetween);
      });
    }, animationDelay);
  }

  animateNavAndAvailabilityMessage() {
    const { navListWrapper, messageList } = this.DOM.header;

    setTimeout(() => {
      const messageAnimations = this.getAnimations(messageList, 'from-bottom');
      this.runAnimations(messageAnimations, 0, 120);
    }, 500);
    setTimeout(() => {
      navListWrapper.classList.add('header__nav-list-wrapper--visible');
    }, 1100);
  }
}

export default Preload;
