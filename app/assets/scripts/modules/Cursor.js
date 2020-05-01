import scroller from './Scroller';

class Cursor {
  constructor() {
    this.cursor = {
      wrapper: document.querySelector('.cursor'),
      outer: document.querySelector('.cursor__outer-circle-container'),
      inner: document.querySelector('.cursor__inner'),
    };
    this.centralizeCursor();

    scroller.addListener(this.makeCursorVisible.bind(this));
    this.setMouseEvent();
  }

  centralizeCursor() {
    for (const part in this.cursor) {
      if (part !== 'wrapper') {
        this.cursor[part].style.top = `${window.innerHeight / 2}px`;
        this.cursor[part].style.left = `${window.innerWidth / 2}px`;
      }
    }
  }

  setMouseEvent() {
    document.addEventListener('mousemove', this.moveCursorParts.bind(this));
  }

  makeCursorVisible({ offset: { y } }) {
    this.cursor.wrapper.style.top = `${y}px`;
  }

  moveCursorParts(e) {
    for (const part in this.cursor) {
      if (part !== 'wrapper') {
        setTimeout(
          () => {
            this.cursor[part].style.top = `${e.clientY}px`;
            this.cursor[part].style.left = `${e.clientX}px`;
          },
          part === 'inner' ? 0 : 100
        );
      }
    }
  }
}

export default Cursor;
