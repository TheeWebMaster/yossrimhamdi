import TranslateX from './TranslateX';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class AnimateMileStonesOnScroll extends SetupParallaxEnviroment {
  constructor(scroller) {
    super(scroller, '.milestone', 200 - window.innerHeight);
    this.scroller = scroller;
    this.transitionXLimits = { start: -50, end: 0 };
    this.setTranslateXObjects();
  }
  /*   getrelative() {
    const relative = [];
    this.elements.forEach((element, i) => {
      relative.push(
        new ScrollInput(
          this.scroller,
          this.topBoundings[i],
          this.displayMileStoneDiscription.bind(this, element)
        )
      );
    });
    return relative;
  } */
  setTranslateXObjects() {
    this.elements.forEach((element, i) => {
      const topBorderElement = element.querySelector('.milestone__top-border');

      new TranslateX(
        this.scroller,
        this.relativeScrollInputs[i],
        topBorderElement,
        this.transitionXLimits,
        '%'
      );
    });
  }
  displayMileStoneDiscription(element) {
    element.querySelector('.milestone__description').classList.add('milestone__description--is-visible');
  }
}

export default AnimateMileStonesOnScroll;
