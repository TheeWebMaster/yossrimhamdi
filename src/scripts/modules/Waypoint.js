import scroller from './Scroller';

class Waypoint {
  constructor(element, handler, offset) {
    this.element = element;
    this.handler = handler;
    this.offset = offset;
    this.topBounding = this.getTopBounding();

    scroller.addListener(this.runHandler);
  }

  getTopBounding() {
    return this.element.getBoundingClientRect().top - window.innerHeight + this.offset;
  }

  runHandler = ({ offset: { y } }) => {
    if (y > this.topBounding) {
      this.handler();
      this.removeListener();
    }
  };

  removeListener() {
    scroller.removeListener(this.runHandler);
  }
}

export default Waypoint;
