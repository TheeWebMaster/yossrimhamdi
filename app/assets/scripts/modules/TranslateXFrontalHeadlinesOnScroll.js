import Parallax from './Parallax';

class TranslateXFrontalHeadlinesOnScroll {
  constructor() {
    this.headlines = document.querySelectorAll('.frontal-headline--to-translate');
    this.transLimits = [
      { start: 0, end: -200 },
      { start: 0, end: 200 },
    ];

    this.setupParallaxObject();
  }

  setupParallaxObject() {
    this.headlines.forEach((headline, i) => new Parallax(headline, this.transLimits[i]));
  }
}

export default TranslateXFrontalHeadlinesOnScroll;
