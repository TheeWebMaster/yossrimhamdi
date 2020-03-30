import TranslateX from './TranslateX';
import ScrollInput from './ScrollInput';

class AnimateMileStonesOnScroll {
  constructor(scroller) {
    this.mileStones = document.querySelectorAll('.milestone');
    this.scroller = scroller;
    this.offset = 300;
    this.transitionXLimits = { start: -50, end: 0 };
    this.topElementsOffset = this.getLimits();
    this.setTranslateXObjects();
  }
  getLimits() {
    const topElementsOffset = [];

    this.mileStones.forEach(mileStone => {
      const topRelativePosition = mileStone.getBoundingClientRect().top - window.innerHeight;

      topElementsOffset.push({
        start: topRelativePosition,
        end: topRelativePosition + mileStone.clientHeight + this.offset
      });
    });
    return topElementsOffset;
  }
  setTranslateXObjects() {
    this.mileStones.forEach((mileStone, i) => {
      const topBorderElement = mileStone.querySelector('.milestone__top-border');
      const relativeScrollInput = new ScrollInput(this.scroller, this.topElementsOffset[i]);

      new TranslateX(this.scroller, relativeScrollInput, topBorderElement, this.transitionXLimits, '%');
    });
  }
}

export default AnimateMileStonesOnScroll;
