class TextLineAnimation {
  constructor(selector, position) {
    this.position = position;
    this.element = document.querySelector(selector);

    setTimeout(this.triggerAnimation.bind(this), 3000);

    this.constructElementDOM();
    this.addAnimationClasses();
  }

  constructElementDOM() {
    const spans = `<span class="outer-span"><span class="inner-span ${this.position}">%A%</span></span>`;
    this.element.innerHTML = spans.replace('%A%', this.element.textContent);
  }

  addAnimationClasses() {
    this.element.classList.add('line-animation');
  }

  triggerAnimation() {
    this.element.classList.add('line-animation--animated');
  }
}

export default TextLineAnimation;
