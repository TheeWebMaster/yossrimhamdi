import { smoothScroll } from '@smoovy/scroller';

const scroller = smoothScroll(
  {
    element: document.querySelector('.container')
  },
  {
    styles: {
      height: '100vh'
    },
    lerp: {
      damping: 0.02
    }
  }
);

export default scroller;
