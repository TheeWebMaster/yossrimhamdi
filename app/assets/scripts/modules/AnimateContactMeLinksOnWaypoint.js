import Waypoint from './Waypoint';
import TextLineAnimation from './TextLineAnimation';

class AnimateContactMeLinksOnWaypoint {
  constructor() {
    this.links = document.querySelectorAll('.contact-me__links > li');

    this.hideLinks();
    this.setWaypoints();
  }

  setWaypoints() {
    this.links.forEach(link => {
      new Waypoint(link, this.handler.bind(this, link), link.clientHeight);
    });
  }

  handler(link) {
    new TextLineAnimation(link, 'from-bottom', true);
  }

  hideLinks() {
    this.links.forEach(link => (link.style.opacity = 0));
  }
}

export default AnimateContactMeLinksOnWaypoint;
