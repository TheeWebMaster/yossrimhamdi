import ScrollerBar from './modules/ScrollerBar';
import scroller from './modules/Scroller';
import ScrollInput from './modules/scrollInput';

new ScrollerBar(scroller);
new ScrollInput(scroller, { top: 1000, bottom: 1000 });
