import scroller from './scroller';

class Waypoint {
  constructor(element, handler) {
    this.element = element;
    this.topBounding = this.getTopBounding();

    scroller.addListener(this.runHandler.bind(this));
  }

  getTopBounding() {
    return this.element.getBoundingClientRect().top - window.innerHeight;
  }

  runHandler({ offset: { y } }) {
    if (y > this.topBounding) {
      handler();
    }
  }
}

export default Waypoint;
