import Transform from './Transform';
import SetupParallaxEnviroment from './SetupParallaxEnviroment';

class TranslateXProjectsOnScroll extends SetupParallaxEnviroment {
  constructor() {
    super('.project');
    this.limits = this.getLimits();

    this.animate();
  }

  getLimits() {
    if (window.innerWidth > 1400) {
      return [
        { start: 100, end: 400 },
        { start: 100, end: -200 },
      ];
    } else {
      return [
        { start: 100, end: 280 },
        { start: 100, end: -80 },
      ];
    }
  }

  animate() {
    this.elements.forEach((element, i) => {
      const relativeLimit = i % 2 === 0 ? this.limits[0] : this.limits[1];
      new Transform(element, this.relativeScrollInputs[i], relativeLimit);
    });
  }
}

export default TranslateXProjectsOnScroll;
