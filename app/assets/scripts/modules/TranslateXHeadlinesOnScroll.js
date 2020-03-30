import ScrollInput from './ScrollInput';
import TranslateX from './TranslateX';

class TranslateXHeadlinesOnScroll {
  constructor(scroller) {
    this.scroller = scroller;
    this.offset = 500;
    this.headlines = document.querySelectorAll('.headline');
    this.topHeadlinesOffset = this.getTopHeadlinesOffset();
    this.headliesRelativeScrollInput = this.getHeadlinesRelativeScrollInput();
    this.translateXLimits = [
      { start: 100, end: 400 },
      { start: 0, end: -400 }
    ];
    this.setTranslateXObject();
  }
  getTopHeadlinesOffset() {
    const topHeadlinesOffset = [];

    this.headlines.forEach(headline => {
      const topElementOffset = headline.getBoundingClientRect().top;
      topHeadlinesOffset.push({
        start: topElementOffset - window.innerHeight,
        end: topElementOffset + headline.clientHeight + window.innerHeight
      });
    });

    return topHeadlinesOffset;
  }
  getHeadlinesRelativeScrollInput() {
    const headlinesRelativeScrollInput = [];

    this.headlines.forEach((headline, i) => {
      headlinesRelativeScrollInput.push(
        new ScrollInput(this.scroller, this.topHeadlinesOffset[i], () => -1)
      );
    });

    return headlinesRelativeScrollInput;
  }
  setTranslateXObject() {
    this.headlines.forEach((headline, i) => {
      const relativeTranslateXLimit =
        i % 2 === 0 ? this.translateXLimits[0] : this.translateXLimits[1];
      new TranslateX(
        this.scroller,
        this.headliesRelativeScrollInput[i],
        headline,
        relativeTranslateXLimit,
        'px'
      );
    });
  }
}

export default TranslateXHeadlinesOnScroll;
