class ScrollerBar {
  constructor(scroller) {
    this.scrollerDOM = document.querySelector('.scroller');
    this.htmlContentVisibleHeight =
      document.querySelector('.smoovy-wrapper').clientHeight - window.innerHeight;
    scroller.onScroll(this.updateScrollBarHeight.bind(this));
  }
  updateScrollBarHeight({ y: yPosition }) {
    this.scrollerDOM.style.height = `${(yPosition / this.htmlContentVisibleHeight) * 100}vh`;
  }
}

export default ScrollerBar;
