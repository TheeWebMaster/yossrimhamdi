class LinkHoverAnimation {
  constructor(link) {
    this.link = link;

    this.constructLink();
    this.addAnimationClass();
  }

  constructLink() {
    const word = this.link.textContent;

    const constructedLink = `<span class="link-hover-animation__lower">${this.getDividedLink(
      word
    )}</span><span class="link-hover-animation__capital">${this.getDividedLink(word)}</span>`;

    this.link.innerHTML = constructedLink;
  }

  addAnimationClass() {
    this.link.classList.add('link-hover-animation');
  }

  getDividedLink(word) {
    const letters = word.split('');
    const l = letters.map(letter => {
      return `<span class="link-hover-animation__letter-wrapper"><span class="link-hover-animation__letter">${letter}</span></span>`;
    });

    return l.join('');
  }
}

export default LinkHoverAnimation;
