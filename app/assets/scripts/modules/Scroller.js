import Scroller from 'smooth-scrollbar';

export default Scroller.init(document.querySelector('#content-wrapper'), {
  damping: 0.05,
});
