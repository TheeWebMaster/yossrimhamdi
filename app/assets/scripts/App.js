import ScrollerBar from './modules/ScrollerBar';
import scroller from './modules/Scroller';
import TranslateFrontalHeadlinesOnScroll from './modules/TranslateFrontalHeadlinesOnScroll';
import AnimateMileStonesOnScroll from './modules/AnimateMileStonesOnScroll';

new AnimateMileStonesOnScroll(scroller);
new TranslateFrontalHeadlinesOnScroll(scroller);
new ScrollerBar(scroller);
