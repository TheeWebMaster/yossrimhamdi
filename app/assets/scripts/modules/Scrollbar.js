class ScrollerBar {
  constructor(scroller) {
    this.scrollerBar = document.querySelector('.scrollbar');
    this.htmlContentVisibleHeight =
      document.querySelector('.website-content').clientHeight - window.innerHeight;
    scroller.addListener(this.updateScrollBarHeight.bind(this));
  }
  updateScrollBarHeight({ offset: { y } }) {
    this.scrollerBar.style.height = `${(y / this.htmlContentVisibleHeight) * 100}vh`;
  }
}

export default ScrollerBar;
