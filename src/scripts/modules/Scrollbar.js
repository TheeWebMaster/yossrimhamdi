import scroller from './Scroller';

class ScrollerBar {
  constructor() {
    this.scrollerBar = document.querySelector('.scrollbar');
    this.htmlContentVisibleHeight = document.querySelector('.website-content').clientHeight - window.innerHeight;
    scroller.addListener(this.updateScrollBarHeight.bind(this));
    this.updateScrollBarOnInterval();
  }
  updateScrollBarHeight({ offset: { y } }) {
    this.scrollerBar.style.height = `${(y / this.htmlContentVisibleHeight) * 100}vh`;
  }
  updateScrollBarOnInterval() {
    setInterval(() => {
      this.htmlContentVisibleHeight = document.querySelector('.website-content').clientHeight - window.innerHeight;
    }, 200);
  }
}

export default ScrollerBar;
