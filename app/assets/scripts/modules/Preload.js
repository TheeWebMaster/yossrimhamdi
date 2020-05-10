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
    };
    this.timer = {
      start: 0,
      interval: null,
    };

    this.setReadyStateEvent();
    scroller.addListener(this.disableScrolling);
  }

  setReadyStateEvent() {
    document.addEventListener('readystatechange', this.handleReadyState.bind(this));
  }

  setMousePressEvents() {
    this.DOM.loader.addEventListener('mousedown', this.setTimer.bind(this));
    this.DOM.loader.addEventListener('mouseup', this.clearTimer.bind(this));
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

  disableScrolling() {
    scroller.scrollTo(0, 0, 0);
  }

  enableScrolling() {
    scroller.removeListener(this.disableScrolling);
  }

  informUserToInteract() {
    this.DOM.preloadState.innerHTML = 'click &amp; hold';
  }

  setTimer() {
    this.timer.start = Date.now();
    this.timer.interval = setInterval(() => {
      this.calcElapsedTime();
    }, 100);
  }

  clearTimer() {
    clearInterval(this.timer.interval);
  }

  calcElapsedTime() {
    if (Date.now() - this.timer.start >= 700) {
      this.letUserInteract();
      this.clearTimer();
    }
  }

  letUserInteract() {
    this.DOM.preloadOverlay.classList.add('preload-overlay--loaded');
    this.DOM.cursor.classList.add('cursor--is-visible');
    document.body.style.cursor = 'none';

    this.enableScrolling();
    new CursorInteractions();
  }
}

export default Preload;
