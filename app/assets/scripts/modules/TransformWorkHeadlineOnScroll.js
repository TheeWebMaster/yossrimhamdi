import ScrollInput from './ScrollInput';
import TransformWorkHeadline from './TransformWorkHeadline';

class TranslateYWorkHeadlineOnScroll {
  constructor(scroller) {
    this.scroller = scroller;
    this.workHeadline = document.querySelector('.stroke-headline--work');
    this.topBoundings = this.getTopBoundings();
    this.translateYLimits = { start: 0, end: -200 };
    this.relativeScrollInput = new ScrollInput(scroller, this.topBoundings, function() {});
    this.setTransformObject();
  }
  getTopBoundings() {
    const topBounding = this.workHeadline.getBoundingClientRect().top;
    return {
      start: topBounding - window.innerHeight,
      end: topBounding + this.workHeadline.clientWidth
    };
  }
  setTransformObject() {
    new TransformWorkHeadline(
      this.scroller,
      this.relativeScrollInput,
      this.workHeadline,
      this.translateYLimits
    );
  }
}

export default TranslateYWorkHeadlineOnScroll;
