import scroller from './scroller';

class ScrollToOnNavigationLinkClick {
  constructor() {
    this.milestones = document.querySelectorAll('.milestone--target');
    this.nav = document.querySelector('.header__nav');
    this.boundaries = this.getBoundaries();
    this.setClickEvent();
  }
  getBoundaries() {
    const boundaries = new Map();
    this.milestones.forEach((milestone) => {
      boundaries.set(milestone.id, milestone.getBoundingClientRect().top);
    });

    return boundaries;
  }
  setClickEvent() {
    this.nav.addEventListener('click', this.handleClickEvent.bind(this));
  }
  handleClickEvent(e) {
    scroller.scrollTo(0, this.boundaries.get(e.target.textContent), 600);
  }
}

export default ScrollToOnNavigationLinkClick;
