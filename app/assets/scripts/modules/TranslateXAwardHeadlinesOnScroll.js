import Parallax from './Parallax';

class TranslateXAwardHeadlinesOnScroll {
  constructor() {
    this.awardHeadline = document.querySelector('.headline--award');
    this.limit = {
      transform: { start: -60, end: 10 },
      bounding: { top: 0, bottom: 200 },
    };

    this.setupParallax();
  }

  setupParallax() {
    new Parallax(this.awardHeadline, this.limit.transform, this.limit.bounding, this.transformFunction);
  }

  transformFunction() {
    this.element.style.transform = `translate(${this.getCurrentValue()}px, -60%)`;
  }
}

export default TranslateXAwardHeadlinesOnScroll;
