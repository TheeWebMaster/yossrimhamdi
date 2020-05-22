import Parallax from './Parallax';

class TranslateXProjectsOnScroll {
  constructor() {
    this.projects = document.querySelectorAll('.project');
    this.limits = this.getLimits();

    this.setupParallax();
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

  setupParallax() {
    this.projects.forEach((project, i) => new Parallax(project, i % 2 === 0 ? this.limits[0] : this.limits[1]));
  }
}

export default TranslateXProjectsOnScroll;
