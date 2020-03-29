import TranslateX from './TranslateX';
import ScrollInput from './ScrollInput';

class AnimateMileStonesOnScroll {
  constructor(scroller) {
    this.mileStones = document.querySelectorAll('.milestone');
    this.scroller = scroller;
    this.limits = this.getLimits();
    this.setTranslateXObjects();
  }
  getLimits() {
    const limits = [];
    this.mileStones.forEach(mileStone => {
      limits.push({
        start: mileStone.getBoundingClientRect().top - window.innerHeight,
        end:
          mileStone.getBoundingClientRect().top + mileStone.clientHeight - window.innerHeight + 400
      });
    });
    return limits;
  }
  setTranslateXObjects() {
    this.mileStones.forEach((mileStone, i) => {
      new TranslateX(
        this.scroller,
        new ScrollInput(this.scroller, this.limits[i]),
        mileStone.querySelector('.milestone__top-border'),
        { min: -50, max: 0, range: 50 },
        true,
        '%'
      );
    });
  }
}

export default AnimateMileStonesOnScroll;
