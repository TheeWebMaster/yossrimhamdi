class AnimateAvailabilityMessageOnScroll {
  constructor(scroller) {
    this.scroller = scroller;
    this.message = {
      container: document.querySelector('.header__availability-message ul'),
      items: document.querySelectorAll('.header__availability-message li'),
    };
    this.range = [0.4, 0.3, 0.2, 0.1];
    scroller.onScroll(this.animateMessage.bind(this));
  }
  animateMessage({ y: yPosition }) {
    this.moveMessageListUp(yPosition);
    this.addSpaceBetweenMessageLIs(yPosition);
  }
  moveMessageListUp(yPosition) {
    this.message.container.style.transform = `translateY(-${yPosition * 1.5}px)`;
  }
  addSpaceBetweenMessageLIs(yPosition) {
    this.message.items.forEach((item, i) => {
      item.style.transform = `translateY(-${yPosition * this.range[i]}px)`;
    });
  }
}

export default AnimateAvailabilityMessageOnScroll;
