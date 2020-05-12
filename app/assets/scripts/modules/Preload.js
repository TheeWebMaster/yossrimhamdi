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
        adList: Array.from(document.querySelectorAll('.header__ad-list li')),
        nav: document.querySelector('.header__nav'),
        messageList: Array.from(document.querySelectorAll('.header__availability-message li')),
      },
      cursor: document.querySelector('.cursor'),
      frontal: document.querySelector('.frontal'),
    };
    this.cursor = new Cursor();
    this.timer = {
      start: 0,
      interval: null,
    };

    this.setReadyStateEvent();
    this.animateHeaderTexts();
    scroller.addListener(this.disableScrolling);
  }

  setReadyStateEvent() {
    document.addEventListener('readystatechange', this.handleReadyState.bind(this));
  }

  setMousePressEvents() {
    this.DOM.loader.wrapper.addEventListener('mousedown', this.setTimer.bind(this));
    document.body.addEventListener('mouseup', this.enableMouseInteractions.bind(this));
  }

  setTimer() {
    this.timer.start = Date.now();
    this.timer.interval = setInterval(this.showPageContent.bind(this), 100);
  }

  clearInterval() {
    clearInterval(this.timer.interval);
  }

  disableScrolling() {
    scroller.scrollTo(0, 0, 0);
  }

  enableScrolling() {
    scroller.removeListener(this.disableScrolling);
  }

  checkTimer() {
    this.timer.done = Date.now() - this.timer.start >= 700;
  }

  informUserToInteract() {
    new TextLineAnimation(this.DOM.preload.state, 'from-bottom', true);
  }

  handleReadyState(e) {
    if (e.target.readyState === 'complete') {
      this.DOM.loader.circle.style.animation = 'loaded 2000ms forwards';

      setTimeout(() => {
        this.informUserToInteract();
        this.setMousePressEvents();
        this.DOM.loader.wrapper.classList.add('loader--interactive');
      }, 2000);
    }
  }

  showPageContent() {
    this.checkTimer();

    if (this.timer.done) {
      this.DOM.preload.wrapper.classList.add('preload-overlay--loaded');
      this.DOM.cursor.classList.add('cursor--is-visible');
      this.DOM.frontal.classList.add('frontal--animated');
      setTimeout(() => {
        this.DOM.header.nav.classList.add('header__nav--visible');
      }, 800);
      document.body.style.cursor = 'none';

      this.clearInterval();
    }
  }

  enableMouseInteractions() {
    this.clearInterval();

    if (this.timer.done) {
      this.enableScrolling();
      new CursorInteractions();
      this.cursor.setMouseEvent();
    }
  }

  animateHeaderTexts() {
    const myNameAnimatioObject = new TextLineAnimation(this.DOM.header.myName, 'from-top');
    const messageAnimationObjects = this.DOM.header.messageList.map(li => new TextLineAnimation(li, 'from-bottom'));
    const headerAdAnimationObjects = this.DOM.header.adList.map(li => new TextLineAnimation(li, 'from-top'));

    setTimeout(() => {
      myNameAnimatioObject.triggerAnimation();
    }, 500);
    setTimeout(() => {
      headerAdAnimationObjects.forEach(object => object.triggerAnimation());
    }, 1500);
    const interval = setInterval(() => {
      if (this.timer.done) {
        setTimeout(() => {
          messageAnimationObjects.forEach(object => object.triggerAnimation());
        }, 700);
        clearInterval(interval);
      }
    }, 40);
  }
}

export default Preload;
