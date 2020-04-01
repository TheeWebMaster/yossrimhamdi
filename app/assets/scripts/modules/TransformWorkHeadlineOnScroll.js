import Transform from './Transform';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateYWorkHeadlineOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.stroke-headline--work', 120); //topBounding + this.workHeadline.clientWidth
    this.scroller = scroller;
    this.workHeadline = document.querySelector('.stroke-headline--work');
    this.transYLimits = { start: 0, end: -50 };
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
