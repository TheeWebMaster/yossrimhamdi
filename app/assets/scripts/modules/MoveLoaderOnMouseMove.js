import TranslateOnMouseMove from './TranslateOnMouseMove';
import MouseInput from './MouseInput';

class MoveLoaderOnMouseMove {
  constructor() {
    this.loader = {
      wrapper: document.querySelector('.loader'),
      inner: document.querySelector('.loader__inner'),
    };
    this.mouseInput = new MouseInput();
    this.transLimit = {
      x: { min: -3.5, max: 3.5 },
      y: { min: -3.5, max: 3.5 },
    };

    this.setTranslateObject();
  }

  setTranslateObject() {
    for (const part in this.loader) {
      new TranslateOnMouseMove(this.loader[part], this.transLimit, this.mouseInput);
    }
  }
}

export default MoveLoaderOnMouseMove;
