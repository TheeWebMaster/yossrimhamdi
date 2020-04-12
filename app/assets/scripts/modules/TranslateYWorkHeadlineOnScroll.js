import Transform from './Transform';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateYWorkHeadlineOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.headline--work', document.querySelector('.headline--work').clientWidth);
    this.scroller = scroller;
    this.transYLimits = { start: 0, end: -200 };
    this.setTransformObject();
  }
  setTransformObject() {
    new Transform(
      this.scroller,
      this.relativeScrollInputs[0],
      this.elements[0],
      this.transYLimits,
      'px',
      this.TransformFunction
    );
  }
  TransformFunction() {
    this.element.style.transform = `translate(39%, ${this.calcCurrentValue()}px) rotate(-90deg)`;
  }
}

export default TranslateYWorkHeadlineOnScroll;
