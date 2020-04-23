import scroller from './Scroller';

class Cursor {
  constructor() {
    this.cursor = {
      wrapper: document.querySelector('.cursor'),
      outer: document.querySelector('.cursor__outer'),
      inner: document.querySelector('.cursor__inner'),
    };

    scroller.addListener(this.makeCursorVisible.bind(this));
    this.setMouseEvent();
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
          part === 'inner' ? 0 : 60
        );
      }
    }
  }
}

export default Cursor;
