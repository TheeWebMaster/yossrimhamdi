import Parallax from './Parallax';

class TranslateXFrontalHeadlinesOnScroll {
  constructor() {
    this.headlines = document.querySelectorAll('.frontal-headline--to-translate');
    this.limits = {
      transform: [
        { start: 0, end: -200 },
        { start: 0, end: 200 },
      ],
      bounding: [
        { top: window.innerHeight - this.headlines[0].getBoundingClientRect().top, bottom: 0 },
        { top: window.innerHeight - this.headlines[1].getBoundingClientRect().top, bottom: 0 },
      ],
    };

    this.setupParallaxObject();
  }

  setupParallaxObject() {
    this.headlines.forEach((headline, i) => {
      new Parallax(headline, this.limits.transform[i], this.limits.bounding[i]);
    });
  }
}

export default TranslateXFrontalHeadlinesOnScroll;
