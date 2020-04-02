class TranslateNavLinksOnWaypoints {
  constructor(scroller) {
    this.waypoints = document.querySelectorAll('.milestone--target');
    this.navList = document.querySelector('.header__nav ul');
    this.navListWrapper = document.querySelector('.header__nav-list-wrapper');
    this.topBoundings = this.getTopBoundings();
    scroller.onScroll(this.tranNavLinksWrapper.bind(this));
  }
  getTopBoundings() {
    const topBoundings = new Map();
    let offset = 0;

    this.waypoints.forEach(element => {
      topBoundings.set(element.id, { top: element.getBoundingClientRect().top, transValue: offset });
      offset += 28;
    });
    return topBoundings;
  }
  tranNavLinksWrapper({ y }) {
    this.waypoints.forEach(waypoint => {
      const currentTopBounding = this.topBoundings.get(waypoint.id);

      if (y > currentTopBounding.top - window.innerHeight + 200) {
        this.navList.style.transform = `translateY(-${currentTopBounding.transValue}px)`;
      }
    });

    if (y < window.innerHeight / 2) {
      this.navListWrapper.classList.add('header__nav-list-wrapper--is-visible');
    } else {
      this.navListWrapper.classList.remove('header__nav-list-wrapper--is-visible');
    }
  }
}

export default TranslateNavLinksOnWaypoints;
