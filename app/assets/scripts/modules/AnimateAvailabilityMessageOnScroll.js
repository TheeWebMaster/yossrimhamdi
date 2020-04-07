class AnimateAvailabilityMessageOnScroll {
  constructor(scroller) {
    this.scroller = scroller;
    this.message = {
      container: document.querySelector('.header__availability-message ul'),
      items: document.querySelectorAll('.header__availability-message li'),
    };
    this.range = [0.4, 0.3, 0.2, 0.1];
    scroller.addListener(this.animateMessage.bind(this));
  }
  animateMessage({ offset: { y } }) {
    this.moveMessageListUp(y);
    this.addSpaceBetweenMessageLIs(y);
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
