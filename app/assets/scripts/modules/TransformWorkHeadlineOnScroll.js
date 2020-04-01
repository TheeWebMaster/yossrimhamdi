import ScrollInput from './ScrollInput';
import TransformWorkHeadline from './TransformWorkHeadline';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateYWorkHeadlineOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.stroke-headline--work', 120); //topBounding + this.workHeadline.clientWidth
    this.scroller = scroller;
    this.workHeadline = document.querySelector('.stroke-headline--work');
    this.translateYLimits = { start: 0, end: -200 };
    this.setTransformObject();
  }
  setTransformObject() {
    new TransformWorkHeadline(
      this.scroller,
      this.relativeScrollInputs[0],
      this.elements[0],
      this.translateYLimits
    );
  }
}

export default TranslateYWorkHeadlineOnScroll;
