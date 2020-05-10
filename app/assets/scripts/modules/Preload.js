import scroller from './Scroller';
import CursorInteractions from './CursorInteractions';

class Preload {
  constructor() {
    this.DOM = {
      preloadOverlay: document.querySelector('.preload-overlay'),
      preloadState: document.querySelector('.preload-overlay__state'),
    };
    this.timerStart = 0;
    this.isDisabled = true;

    this.setMainEvent();
    scroller.addListener(this.disableScrolling.bind(this));
  }

  setMainEvent() {
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
    if (Date.now() - this.timerStart >= 700) {
      this.letUserInteract();
    }
  }

  letUserInteract() {
    this.DOM.preloadOverlay.classList.add('preload-overlay--loaded');
    document.body.style.cursor = 'none';

    this.enableScrolling();
    new CursorInteractions();
  }
}

export default Preload;
