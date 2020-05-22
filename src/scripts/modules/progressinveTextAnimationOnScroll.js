import scroller from './Scroller';

class progressinveTextAnimationOnScroll {
  constructor(selector, offset) {
    this.DOM = {
      paragraph: document.querySelector(selector),
      innerSpans: null,
    };
    this.offset = offset;
    this.topBounding = this.getTopBounding();

    this.addAnimationClass();
    this.divideParagraph();
    this.selectInnerSpans();

    scroller.addListener(this.animate);
  }

  divideParagraph() {
    const words = this.DOM.paragraph.innerHTML.split(' ');

    this.DOM.paragraph.innerHTML = words.map(word => `<span><span>${word}</span></span>`).join(' ');
  }

  selectInnerSpans() {
    this.DOM.innerSpans = this.DOM.paragraph.querySelectorAll('.text-animation-on-scroll > span > span');
  }

  getTopBounding() {
    return this.DOM.paragraph.getBoundingClientRect().top - window.innerHeight + this.offset;
  }

  addAnimationClass() {
    this.DOM.paragraph.classList.add('text-animation-on-scroll');
  }

  getNewTranslateYFunction(y) {
    return y > this.topBounding ? 'translateY(0px)' : 'translateY(100%)';
  }

  animate = ({ offset: { y } }) => {
    const newTranslateYFunction = this.getNewTranslateYFunction(y);

    if (newTranslateYFunction !== this.DOM.innerSpans[0].style.transform) {
      this.DOM.innerSpans.forEach((span, i) => {
        setTimeout(() => {
          span.style.transform = newTranslateYFunction;
        }, 30 * i);
      });
    }
  };
}

export default progressinveTextAnimationOnScroll;
