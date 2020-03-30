import TranslateX from './TranslateX';
import ScrollInput from './ScrollInput';

class TranslateFrontalHeadlinesOnScroll {
  constructor(scroller) {
    this.headlines = document.querySelectorAll('.frontal-headline--to-translate');
    this.scroller = scroller;
    this.scrollerInput = new ScrollInput(this.scroller, {
      start: 0,
      end: window.innerHeight
    });
    this.transitionXLimits = [
      { start: 0, end: -200 },
      { start: 0, end: 200 }
    ];
    this.setTranslateXObject();
  }
  setTranslateXObject() {
    this.headlines.forEach((headline, i) => {
      new TranslateX(this.scroller, this.scrollerInput, headline, this.transitionXLimits[i], 'px');
    });
  }
}

export default TranslateFrontalHeadlinesOnScroll;
