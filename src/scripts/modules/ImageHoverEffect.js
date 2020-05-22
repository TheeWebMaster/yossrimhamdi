import HoverEffect from 'hover-effect';
import 'gsap';
import 'three';

class ImageHoverEffect {
  constructor() {
    this.imagesContainer = document.querySelectorAll('.project__image-container');
    this.imagesDim = [
      { width: 476, height: 237 }, //bcharity
      { width: 1100, height: 520 }, //mackmedia
      { width: 820, height: 396 }, //ammolite
      { width: 1030, height: 534 }, //dorfungs
      { width: 1024, height: 576 }, //dorfjungs
      { width: 600, height: 366 }, // mueeler
      { width: 709, height: 443 }, // my portfilio
    ];
    this.setImageContainerHeight();
    this.setImageHoverEffect();
  }
  setImageContainerHeight() {
    this.imagesContainer.forEach((imageContainer, i) => {
      const width = imageContainer.clientWidth;
      console.log(width);
      imageContainer.style.height = `${this.imagesDim[i].height / (this.imagesDim[i].width / width)}px`;
    });
  }
  setImageHoverEffect() {
    this.imagesContainer.forEach((imageContainer, i) => {
      const imageTitle = imageContainer.dataset.projectTitle;

      new HoverEffect({
        parent: imageContainer,
        intensity: 0.2,
        image1: './images/displacements/transparent.png',
        image2: `./images/projects/${imageTitle}/${imageTitle}.jpg`,
        displacementImage: './images/displacements/cloud.jpg',
        imagesRatio: this.imagesDim[i].height / this.imagesDim[i].width,
      });
    });
  }
}

export default ImageHoverEffect;
