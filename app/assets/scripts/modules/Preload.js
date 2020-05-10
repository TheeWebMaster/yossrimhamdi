import scroller from './Scroller';
import CursorInteractions from './CursorInteractions';

class Preload {
  constructor(cursor) {
    this.DOM = {
      preloadOverlay: document.querySelector('.preload-overlay'),
      preloadState: document.querySelector('.preload-overlay__state'),
      cursor: document.querySelector('.cursor'),
    };
    this.cursor = cursor;
    this.timerStart = 0;
    this.isDisabled = true;

    this.setEvents();
    scroller.addListener(this.disableScrolling.bind(this));
  }

  setEvents() {
    document.addEventListener('readystatechange', this.setupCanvas.bind(this));
  }

  setMousePressEvents() {
    document.body.addEventListener('mousedown', this.setTimer.bind(this));
    document.body.addEventListener('mouseup', this.calcElapsedTime.bind(this));
  }

  setupCanvas(e) {
    if (e.target.readyState === 'complete') {
      this.informUserToInteract();
      this.setMousePressEvents();
    }
  }

  disableScrolling() {
    if (this.isDisabled) {
      scroller.scrollTo(0, 0, 0);
    }
  }

  enableScrolling() {
    this.isDisabled = false;
  }

  informUserToInteract() {
    this.DOM.preloadState.innerHTML = 'click &amp; hold';
  }

  setTimer() {
    this.timerStart = Date.now();
  }

  calcElapsedTime() {
    if ((Date.now() - this.timerStart) / 1000 >= 0.7) {
      this.letUserInteract();
    }
  }

  letUserInteract() {
    this.DOM.preloadOverlay.classList.add('preload-overlay--loaded');
    this.DOM.cursor.classList.add('cursor--hide-default-cursor');
    document.body.style.cursor = 'none';

    this.enableScrolling();
    this.cursor.setMouseEvent();
    new CursorInteractions();
  }
}

export default Preload;
