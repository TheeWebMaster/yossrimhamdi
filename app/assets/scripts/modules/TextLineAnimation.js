class TextLineAnimation {
  constructor(element, position) {
    this.position = position;
    this.element = element;

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
