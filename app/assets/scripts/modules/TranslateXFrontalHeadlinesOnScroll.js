import Transform from './Transform';
import ScrollInput from './ScrollInput';

class TranslateXFrontalHeadlinesOnScroll {
  constructor() {
    this.headlines = document.querySelectorAll('.frontal-headline--to-translate');
    this.scrollInput = this.getCostumScrollInput();
    this.transitionXLimits = [
      { start: 0, end: -200 },
      { start: 0, end: 200 },
    ];
    this.setTransformObject();
  }
  getCostumScrollInput() {
    return new ScrollInput({ start: 0, end: window.innerHeight });
  }
  setTransformObject() {
    this.headlines.forEach((headline, i) => {
      new Transform(headline, this.scrollInput, this.transitionXLimits[i], this.transformFunction);
    });
  }
  transformFunction() {
    this.element.style.transform = `translateX(${this.getCurrentValue()}px)`;
  }
}

export default TranslateXFrontalHeadlinesOnScroll;
