import Parallax from './Parallax';

class TranslateYWorkHeadlineOnScroll {
  constructor() {
    this.workHeadline = document.querySelector('.headline--work');
    this.limit = {
      transform: { start: 0, end: -200 },
      bounding: { top: 0, bottom: 400 },
    };

    this.setupParallax();
  }

  setupParallax() {
    new Parallax(this.workHeadline, this.limit.transform, this.limit.bounding, this.transformFunction);
  }

  transformFunction() {
    this.element.style.transform = `translate(39%, ${this.getCurrentValue()}px) rotate(-90deg)`;
  }
}

export default TranslateYWorkHeadlineOnScroll;
