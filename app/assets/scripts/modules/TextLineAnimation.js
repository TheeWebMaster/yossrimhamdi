class TextLineAnimation {
  constructor(element, position, autoTrigger) {
    this.position = position;
    this.element = element;
    this.autoTrigger = autoTrigger;

    this.constructElementDOM();
    this.addAnimationClasses();
    this.tryAutoTrigger();
  }

  constructElementDOM() {
    const spans = `<span class="line-animation__outer-span"><span class="line-animation__inner-span ${this.position}">%A%</span></span>`;
    this.element.innerHTML = spans.replace('%A%', this.element.innerHTML);
  }

  addAnimationClasses() {
    this.element.classList.add('line-animation');
  }

  triggerAnimation() {
    this.element.classList.add('line-animation--animated');
  }

  tryAutoTrigger() {
    setTimeout(() => {
      if (this.autoTrigger) {
        this.triggerAnimation();
      }
    }, 1);
  }
}

export default TextLineAnimation;
