class CursorInteractions {
  constructor() {
    this.DOM = {
      cursor: {
        container: document.querySelector('.cursor'),
        inner: document.querySelector('.cursor__inner'),
      },
      importantElements: document.querySelectorAll('canvas, .header__nav, .link'),
    };

    this.setEvents();
  }

  setEvents() {
    window.addEventListener('mousedown', this.increaseInnerCursorWidth.bind(this));
    window.addEventListener('mouseup', this.decreaseInnerCursorWidth.bind(this));

    this.DOM.importantElements.forEach(element => {
      element.addEventListener('mouseenter', this.onFocus.bind(this));
      element.addEventListener('mouseleave', this.offFocus.bind(this));
    });
  }

  onFocus() {
    this.DOM.cursor.container.classList.add('cursor--on-focus');
  }

  offFocus() {
    this.DOM.cursor.container.classList.remove('cursor--on-focus');
  }

  increaseInnerCursorWidth() {
    this.DOM.cursor.inner.classList.add('cursor__inner--active');
  }

  decreaseInnerCursorWidth() {
    this.DOM.cursor.inner.classList.remove('cursor__inner--active');
  }
}

export default CursorInteractions;
