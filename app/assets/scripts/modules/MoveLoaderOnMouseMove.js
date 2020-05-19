import TransformOnMouseMove from './TransformOnMouseMove';
import MouseInput from './MouseInput';

class MoveLoaderOnMouseMove {
  constructor() {
    this.loader = {
      wrapper: document.querySelector('.loader'),
      inner: document.querySelector('.loader__inner'),
    };
    this.mouseInput = new MouseInput();
    this.limits = {
      x: { min: -6, max: 6 },
      y: { min: -6, max: 6 },
    };

    this.setTransformObject();
  }

  setTransformObject() {
    for (const part in this.loader) {
      new TransformOnMouseMove(this.loader[part], this.limits, this.mouseInput);
    }
  }
}

export default MoveLoaderOnMouseMove;
