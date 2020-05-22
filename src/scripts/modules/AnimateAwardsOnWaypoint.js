import Waypoint from './Waypoint';
import TextLineAnimation from './TextLineAnimation';

class AnimateAwardsOnWaypoint {
  constructor() {
    this.awards = document.querySelectorAll('.award__list > li');

    this.hideAwards();
    this.setWaypoints();
  }

  setWaypoints() {
    this.awards.forEach(award => {
      new Waypoint(award, this.handler.bind(this, award), award.clientHeight + 15);
    });
  }

  handler(award) {
    new TextLineAnimation(award, 'from-bottom', true);
  }

  hideAwards() {
    this.awards.forEach(award => (award.style.opacity = 0));
  }
}

export default AnimateAwardsOnWaypoint;
