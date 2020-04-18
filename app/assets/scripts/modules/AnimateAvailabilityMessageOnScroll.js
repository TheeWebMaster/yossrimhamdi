import scroller from './scroller';

class AnimateAvailabilityMessageOnScroll {
  constructor() {
    this.message = {
      container: document.querySelector('.header__availability-message ul'),
      items: document.querySelectorAll('.header__availability-message li'),
    };
    this.range = this.getRange();
    this.moveUpOffset = this.getMoveUpOffset();
    scroller.addListener(this.animateMessage.bind(this));
  }
  getMoveUpOffset() {
    return window.innerWidth >= 1024 ? 1.5 : 1.2;
  }
  getRange() {
    return window.innerWidth >= 1024 ? [0.4, 0.3, 0.2, 0.1] : [0.8, 0.6, 0.4, 0.2];
  }
  animateMessage({ offset: { y } }) {
    this.moveMessageListUp(y);
    this.addSpaceBetweenMessageLIs(y);
  }
  moveMessageListUp(yPosition) {
    this.message.container.style.transform = `translateY(-${yPosition * this.moveUpOffset}px)`;
  }
  addSpaceBetweenMessageLIs(yPosition) {
    this.message.items.forEach((item, i) => {
      item.style.transform = `translateY(-${yPosition * this.range[i]}px)`;
    });
  }
}

export default AnimateAvailabilityMessageOnScroll;
