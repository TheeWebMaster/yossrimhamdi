import Waypoint from './Waypoint';
import TextLineAnimation from './TextLineAnimation';

class AnimateAwardsOnWaypoint {
  constructor() {
    this.awards = document.querySelectorAll('.award__list > li');

    this.setWaypoints();
  }

  setWaypoints() {
    this.awards.forEach(award => {
      new Waypoint(
        award,
        () => {
          new TextLineAnimation(award, 'from-bottom', true);
        },
        award.clientHeight
      );
    });
  }
}

export default AnimateAwardsOnWaypoint;
