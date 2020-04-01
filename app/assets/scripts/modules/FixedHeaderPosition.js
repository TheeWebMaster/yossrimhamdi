class FixedHeaderPosition {
  constructor(scroller) {
    this.header = document.querySelector('.header');
    scroller.onScroll(this.modifyHeaderPosition.bind(this));
  }
  modifyHeaderPosition({ y: currentYposition }) {
    this.header.style.transform = `translateY(${currentYposition}px)`;
  }
}

export default FixedHeaderPosition;
