import ScrollInput from './ScrollInput';
import TranslateX from './TranslateX';

class TranslateXStrokeHeadlinesOnScroll {
  constructor(scroller) {
    this.scroller = scroller;
    this.headlines = document.querySelectorAll(
      '.stroke-headline--award, .stroke-headline--contact'
    );
    this.topBoundings = this.getTopElementsBounding();
    this.realativeScrollInputs = this.getRelativeScrollInput();
    this.translateXLimits = { start: 0, end: 100 };
    this.setTranslateXObjects();
  }
  getTopElementsBounding() {
    const topBoundings = [];

    this.headlines.forEach(headline => {
      const topBounding = headline.getBoundingClientRect().top;

      topBoundings.push({
        start: topBounding - window.innerHeight,
        end: topBounding + headline.clientHeight
      });
    });

    return topBoundings;
  }
  getRelativeScrollInput() {
    const realativeScrollInputs = [];

    this.headlines.forEach((headline, i) => {
      realativeScrollInputs.push(
        new ScrollInput(this.scroller, this.topBoundings[i], function() {})
      );
    });

    return realativeScrollInputs;
  }
  setTranslateXObjects() {
    this.headlines.forEach((headline, i) => {
      new TranslateX(
        this.scroller,
        this.realativeScrollInputs[i],
        headline,
        this.translateXLimits,
        'px'
      );
    });
  }
}

export default TranslateXStrokeHeadlinesOnScroll;
