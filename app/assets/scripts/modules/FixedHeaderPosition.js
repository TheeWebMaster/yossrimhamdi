class FixedHeaderPosition {
  constructor(scroller) {
    this.header = document.querySelector('.header');
    scroller.addListener(this.modifyHeaderPosition.bind(this));
  }
  modifyHeaderPosition({ offset: { y } }) {
    this.header.style.transform = `translateY(${y}px)`;
  }
}

export default FixedHeaderPosition;
