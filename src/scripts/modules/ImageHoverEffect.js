import HoverEffect from 'hover-effect';
import 'gsap';
import 'three';

class ImageHoverEffect {
  constructor() {
    this.imagesContainer = document.querySelectorAll('.project__image-container');
    this.imagesDim = [
      { width: 1029, height: 513 },
      { width: 1920, height: 907 },
      { width: 1865, height: 902 },
      { width: 1440, height: 747 },
      { width: 1024, height: 576 },
      { width: 1107, height: 676 },
      { width: 907, height: 606 },
    ];
    this.setImageContainerHeight();
    this.setImageHoverEffect();
  }
  setImageContainerHeight() {
    this.imagesContainer.forEach((imageContainer, i) => {
      const width = imageContainer.clientWidth;
      imageContainer.style.height = `${this.imagesDim[i].height / (this.imagesDim[i].width / width)}px`;
    });
  }
  setImageHoverEffect() {
    this.imagesContainer.forEach((imageContainer, i) => {
      const imageTitle = imageContainer.dataset.projectTitle;

      new HoverEffect({
        parent: imageContainer,
        intensity: 0.2,
        image1: './../assets/images/displacements/transparent.png',
        image2: `../../assets/images/projects/${imageTitle}/${imageTitle}.jpg`,
        displacementImage: '../../assets/images/displacements/cloud.jpg',
        imagesRatio: this.imagesDim[i].height / this.imagesDim[i].width,
      });
    });
  }
}

export default ImageHoverEffect;
