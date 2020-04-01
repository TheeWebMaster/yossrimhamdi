import Transform from './Transform';
import ScrollInput from './ScrollInput';

class TranslateXFrontalHeadlinesOnScroll {
  constructor(scroller) {
    this.scroller = scroller;
    this.headlines = document.querySelectorAll('.frontal-headline--to-translate');
    this.scrollInput = this.getCostumScrollInput();
    this.transitionXLimits = [
      { start: 0, end: -200 },
      { start: 0, end: 200 }
    ];
    this.setTransformObject();
  }
  getCostumScrollInput() {
    return new ScrollInput(this.scroller, { start: 0, end: window.innerHeight }, function() {});
  }
  setTransformObject() {
    this.headlines.forEach((headline, i) => {
      new Transform(this.scroller, this.scrollInput, headline, this.transitionXLimits[i]);
    });
  }
}

export default TranslateXFrontalHeadlinesOnScroll;
