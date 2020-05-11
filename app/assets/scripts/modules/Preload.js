import TextLineAnimation from './TextLineAnimation';
import scroller from './Scroller';
import CursorInteractions from './CursorInteractions';

class Preload {
  constructor() {
    this.DOM = {
      preloadOverlay: document.querySelector('.preload-overlay'),
      preloadState: document.querySelector('.preload-overlay__state'),
      loader: document.querySelector('.loader'),
      loaderCircle: document.querySelector('.loader__circle'),
      cursor: document.querySelector('.cursor'),
      frontal: document.querySelector('.frontal'),
      headerMyName: document.querySelector('.header__my-name'),
      headerAdLIs: Array.from(document.querySelectorAll('.header__ad-list li')),
      nav: document.querySelector('.header__nav'),
      messageLIs: Array.from(document.querySelectorAll('.header__availability-message li')),
    };
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
    this.DOM.loader.addEventListener('mousedown', this.setTimer.bind(this));
    document.body.addEventListener('mouseup', this.enableMouseInteractions.bind(this));
  }

  handleReadyState(e) {
    if (e.target.readyState === 'complete') {
      this.DOM.loaderCircle.style.animation = 'loaded 2000ms forwards';

      setTimeout(() => {
        this.informUserToInteract();
        this.setMousePressEvents();
        this.DOM.loader.classList.add('loader--interactive');
      }, 2000);
    }
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

  informUserToInteract() {
    this.DOM.preloadState.innerHTML = 'click &amp; hold';
  }

  showPageContent() {
    if (Date.now() - this.timer.start >= 700) {
      this.DOM.preloadOverlay.classList.add('preload-overlay--loaded');
      this.DOM.cursor.classList.add('cursor--is-visible');
      this.DOM.frontal.classList.add('frontal--animated');
      this.DOM.nav.classList.add('header__nav--visible');
      document.body.style.cursor = 'none';

      this.clearInterval();
    }
  }

  enableMouseInteractions() {
    this.clearInterval();

    if (Date.now() - this.timer.start >= 700) {
      this.enableScrolling();
      new CursorInteractions();
    }
  }

  animateHeaderTexts() {
    const myNameAnimatioObject = new TextLineAnimation(this.DOM.headerMyName, 'top');
    const messageAnimationObjects = this.DOM.messageLIs.map(li => new TextLineAnimation(li, 'bottom'));
    const headerAdAnimationObjects = this.DOM.headerAdLIs.map(li => new TextLineAnimation(li, 'top'));

    setTimeout(() => {
      myNameAnimatioObject.triggerAnimation();
    }, 500);
    setTimeout(() => {
      headerAdAnimationObjects.forEach(object => object.triggerAnimation());
    }, 1500);
    setTimeout(() => {
      messageAnimationObjects.forEach(object => object.triggerAnimation());
    }, 2000);
  }
}

export default Preload;
