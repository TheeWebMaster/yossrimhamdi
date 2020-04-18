import ScrollInput from './ScrollInput';
import Transform from './Transform';

class TranslateMyNameOnScroll {
  constructor(scroller) {
    this.name = document.querySelector('.greeting__my-name');
    this.limits = {
      start: -300,
      end: 0,
    };
    this.topBoundings = this.getTopBoundings();
    this.scrollInput = new ScrollInput(scroller, this.topBoundings);
    new Transform(scroller, this.scrollInput, this.name, this.limits, 'px', this.translateY);
  }
  getTopBoundings() {
    const topOffset = this.name.getBoundingClientRect().top;

    return {
      start: topOffset - window.innerHeight + 200,
      end: topOffset,
    };
  }
  translateY() {
    this.element.style.transform = `translateY(${this.calcCurrentValue()}px)`;
  }
}

export default TranslateMyNameOnScroll;
