import LinkHoverAnimation from './LinkHoverAnimation';

class AnimateLinksOnHover {
  constructor() {
    this.links = document.querySelectorAll('.link, .contact-me__links > li');

    this.setAnimationObject();
  }

  setAnimationObject() {
    this.links.forEach(link => new LinkHoverAnimation(link));
  }
}

export default AnimateLinksOnHover;
