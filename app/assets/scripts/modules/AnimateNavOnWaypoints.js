import scroller from './scroller';

class AnimateNavOnWaypoints {
  constructor() {
    this.DOM = {
      waypoints: document.querySelectorAll('.milestone--target'),
      nav: document.querySelector('.header__nav'),
      navListWrapper: document.querySelector('.header__nav-list-wrapper'),
      navList: document.querySelector('.header__nav ul'),
    };
    this.LIsHeight = this.getLIsHeight();
    this.setNavHeight();
    this.topBoundings = this.getTopBoundings();
    scroller.addListener(this.animate.bind(this));
  }
  getLIsHeight() {
    return document.querySelector('.header__nav li').clientHeight;
  }
  setNavHeight() {
    this.DOM.nav.style.height = `${this.LIsHeight * 4}px`;
  }
  getTopBoundings() {
    const topBoundings = [];
    let offset = 0;

    this.DOM.waypoints.forEach((element) => {
      topBoundings.push({
        sectionID: element.id,
        top: element.getBoundingClientRect().top - window.innerHeight + 200,
        transValue: offset,
      });
      offset += this.LIsHeight;
    });
    return topBoundings.reverse();
  }
  animate({ offset: { y } }) {
    this.highlightCurrentSectionLink(this.translateYNavLinksWrapper(y));
    this.showFullNav(y);
  }
  translateYNavLinksWrapper(y) {
    for (let topBounding of this.topBoundings) {
      if (y > topBounding.top) {
        this.DOM.navList.style.transform = `translateY(-${topBounding.transValue}px)`;
        return topBounding.sectionID;
      }
    }
  }
  showFullNav(y) {
    if (y < 100) {
      this.DOM.navListWrapper.style.maxHeight = `${this.LIsHeight * 4}px`;
      this.DOM.navListWrapper.classList.add('header__nav-list-wrapper--is-fully-visible');
    } else {
      this.DOM.navListWrapper.style.maxHeight = `${this.LIsHeight}px`;
      this.DOM.navListWrapper.classList.remove('header__nav-list-wrapper--is-fully-visible');
    }
  }
  highlightCurrentSectionLink(sectionID) {
    this.DOM.navList.querySelector('.header__nav-link--active').classList.remove('header__nav-link--active');
    this.DOM.navList.querySelector(`.${sectionID}`).classList.add('header__nav-link--active');
  }
}

export default AnimateNavOnWaypoints;
