class TranslateNavLinksOnWaypoints {
  constructor(scroller) {
    this.DOM = {
      waypoints: document.querySelectorAll('.milestone--target'),
      nav: document.querySelector('.header__nav'),
      navList: document.querySelector('.header__nav ul'),
      navListWrapper: document.querySelector('.header__nav-list-wrapper'),
    };
    this.LIsHeight = this.getLIsHeight();
    this.setNavHeight();
    this.topBoundings = this.getTopBoundings();
    scroller.addListener(this.tranNavLinksWrapper.bind(this));
  }
  getLIsHeight() {
    return this.DOM.navList.querySelector('li').clientHeight;
  }
  setNavHeight() {
    this.DOM.nav.style.height = `${this.LIsHeight * 4}px`;
  }
  getTopBoundings() {
    const topBoundings = new Map();
    let offset = 0;

    this.DOM.waypoints.forEach((element) => {
      topBoundings.set(element.id, { top: element.getBoundingClientRect().top, transValue: offset });
      offset += this.LIsHeight;
    });
    return topBoundings;
  }
  tranNavLinksWrapper({ offset: { y } }) {
    this.DOM.waypoints.forEach((waypoint) => {
      const currentTopBounding = this.topBoundings.get(waypoint.id);

      if (y > currentTopBounding.top - window.innerHeight + 200) {
        this.DOM.navList.style.transform = `translateY(-${currentTopBounding.transValue}px)`;
      }
    });

    if (y < window.innerHeight / 2) {
      this.DOM.navListWrapper.style.maxHeight = `${this.LIsHeight * 4}px`;
    } else {
      this.DOM.navListWrapper.style.maxHeight = `${this.LIsHeight}px`;
    }
  }
}

export default TranslateNavLinksOnWaypoints;
