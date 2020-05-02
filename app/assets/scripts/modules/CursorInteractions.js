class CursorInteractions {
  constructor() {
    this.DOM = {
      headerNav: document.querySelector('.header__nav'),
      cursor: {
        container: document.querySelector('.cursor'),
        inner: document.querySelector('.cursor__inner'),
      },
    };

    this.setEvents();
  }

  setEvents() {
    window.addEventListener('mousedown', this.increaseInnerCursorWidth.bind(this));
    window.addEventListener('mouseup', this.decreaseInnerCursorWidth.bind(this));

    this.DOM.headerNav.addEventListener('mouseenter', this.onFocus.bind(this));
    this.DOM.headerNav.addEventListener('mouseleave', this.offFocus.bind(this));
  }

  onFocus() {
    this.DOM.cursor.container.classList.add('cursor--on-focus');
  }

  offFocus() {
    this.DOM.cursor.container.classList.remove('cursor--on-focus');
  }

  increaseInnerCursorWidth() {
    this.DOM.cursor.inner.classList.add('cursor__inner--large');
  }

  decreaseInnerCursorWidth() {
    this.DOM.cursor.inner.classList.remove('cursor__inner--large');
  }
}

export default CursorInteractions;
