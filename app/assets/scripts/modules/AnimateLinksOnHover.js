import LinkHoverAnimation from './LinkHoverAnimation';

class AnimateLinksOnHover {
  constructor() {
    this.links = document.querySelectorAll('.link');

    this.setAnimationObject();
  }

  setAnimationObject() {
    this.links.forEach(link => new LinkHoverAnimation(link));
  }
}

export default AnimateLinksOnHover;
