import LinkHoverAnimation from './LinkHoverAnimation';

class AnimateLinksOnHover {
  constructor() {
    this.links = document.querySelectorAll('.link');
    console.log(this.links);

    this.setAnimationObject();
  }

  setAnimationObject() {
    this.links.forEach(link => new LinkHoverAnimation(link));
  }
}

export default AnimateLinksOnHover;
