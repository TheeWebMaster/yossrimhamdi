import scroller from './Scroller';

class ScrollToOnNavigationLinkClick {
  constructor(animateNavOnWaypoints) {
    this.milestones = document.querySelectorAll('.milestone--target');
    this.nav = document.querySelector('.header__nav');
    this.boundaries = this.getBoundaries();
    this.animateNavOnWaypoints = animateNavOnWaypoints;

    this.setClickEvent();
  }
  getBoundaries() {
    const boundaries = new Map();
    this.milestones.forEach(milestone => {
      boundaries.set(milestone.id, milestone.getBoundingClientRect().top);
    });

    return boundaries;
  }
  setClickEvent() {
    this.nav.addEventListener('click', this.handleClickEvent.bind(this));
  }
  handleClickEvent(e) {
    this.animateNavOnWaypoints.isEnabled = false;
    this.animateNavOnWaypoints.highlightCurrentSectionLink(e.target.textContent);
    scroller.scrollTo(0, this.boundaries.get(e.target.textContent), 600);
    setTimeout(() => {
      this.animateNavOnWaypoints.isEnabled = true;
    }, 600);
  }
}

export default ScrollToOnNavigationLinkClick;
