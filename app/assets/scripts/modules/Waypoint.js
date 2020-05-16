import scroller from './scroller';

class Waypoint {
  constructor(element, handler) {
    this.element = element;
    this.handler = handler;
    this.topBounding = this.getTopBounding();
    // this.bindedHandler = this.runHandler.bind(this);

    scroller.addListener(this.runHandler);
  }

  getTopBounding() {
    return this.element.getBoundingClientRect().top - window.innerHeight;
  }

  runHandler = ({ offset: { y } }) => {
    if (y > this.topBounding) {
      console.log('hello');
      this.handler();
      this.removeListener();
    }
  };

  removeListener() {
    scroller.removeListener(this.runHandler);
  }
}

export default Waypoint;
