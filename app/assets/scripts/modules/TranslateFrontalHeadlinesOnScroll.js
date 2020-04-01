import TranslateX from './TranslateX';
import ScrollInput from './ScrollInput';

class TranslateFrontalHeadlinesOnScroll {
  constructor(scroller) {
    this.scroller = scroller;
    this.headlines = document.querySelectorAll('.frontal-headline--to-translate');
    this.scrollInput = this.getCostumScrollInput();
    this.transitionXLimits = [
      { start: 0, end: -200 },
      { start: 0, end: 200 }
    ];
    this.setTranslateXObject();
  }
  getCostumScrollInput() {
    return new ScrollInput(this.scroller, { start: 0, end: window.innerHeight }, function() {});
  }
  setTranslateXObject() {
    this.headlines.forEach((headline, i) => {
      new TranslateX(this.scroller, this.scrollInput, headline, this.transitionXLimits[i]);
    });
  }
}

export default TranslateFrontalHeadlinesOnScroll;
