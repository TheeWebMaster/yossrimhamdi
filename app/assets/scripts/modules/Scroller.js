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
      damping: 0.06
    }
  }
);

export default scroller;
