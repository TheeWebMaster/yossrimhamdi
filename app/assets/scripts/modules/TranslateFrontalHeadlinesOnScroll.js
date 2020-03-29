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
    this.limits = [
      { min: -200, max: 0, range: 200 },
      { min: 0, max: 200, range: 200 }
    ];
    this.setTranslateXObject();
  }
  setTranslateXObject() {
    this.headlines.forEach((headline, index) => {
      new TranslateX(
        this.scroller,
        this.scrollerInput,
        headline,
        this.limits[index],
        index == 1,
        'px'
      );
    });
  }
}

export default TranslateFrontalHeadlinesOnScroll;
