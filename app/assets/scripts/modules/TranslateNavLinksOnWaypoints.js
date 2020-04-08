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
    const topBoundings = [];
    let offset = 0;

    this.DOM.waypoints.forEach((element) => {
      topBoundings.push({ top: element.getBoundingClientRect().top, transValue: offset });
      offset += this.LIsHeight;
    });
    return topBoundings.reverse();
  }
  tranNavLinksWrapper({ offset: { y } }) {
    for (let topBounding of this.topBoundings) {
      if (y > topBounding.top - window.innerHeight + 200) {
        this.DOM.navList.style.transform = `translateY(-${topBounding.transValue}px)`;
        break;
      }
    }

    if (y < window.innerHeight / 2) {
      this.DOM.navListWrapper.style.maxHeight = `${this.LIsHeight * 4}px`;
    } else {
      this.DOM.navListWrapper.style.maxHeight = `${this.LIsHeight}px`;
    }
  }
}

export default TranslateNavLinksOnWaypoints;
