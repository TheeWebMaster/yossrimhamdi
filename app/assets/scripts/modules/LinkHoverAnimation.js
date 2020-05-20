class LinkHoverAnimation {
  constructor(link) {
    this.link = link;

    this.constructLink();
    this.addAnimationClass();
  }

  constructLink() {
    const word = this.link.textContent;

    const constructedLink = `<span class="link-animation__lower">${this.getDividedLink(
      word
    )}</span><span class="link-animation__capital">${this.getDividedLink(word)}</span>`;

    this.link.innerHTML = constructedLink;
  }

  addAnimationClass() {
    this.link.classList.add('link-animation');
  }

  getDividedLink(word) {
    const letters = word.split('');
    const l = letters.map(letter => {
      return `<span class="link-animation__letter-wrapper"><span class="link-animation__letter">${letter}</span></span>`;
    });

    return l.join('');
  }
}

export default LinkHoverAnimation;

new LinkHoverAnimation(document.querySelector('.link'));
