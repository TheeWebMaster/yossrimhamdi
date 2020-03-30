import ScrollerBar from './modules/ScrollerBar';
import scroller from './modules/Scroller';
import TranslateFrontalHeadlinesOnScroll from './modules/TranslateFrontalHeadlinesOnScroll';
import AnimateMileStonesOnScroll from './modules/AnimateMileStonesOnScroll';
import TranslateXHeadlinesOnScroll from './modules/TranslateXHeadlinesOnScroll';
import TranslateYWorkHeadlineOnScroll from './modules/TranslateYWorkHeadlineOnScroll';

new TranslateYWorkHeadlineOnScroll(scroller);
new TranslateXHeadlinesOnScroll(scroller);
new AnimateMileStonesOnScroll(scroller);
new TranslateFrontalHeadlinesOnScroll(scroller);
new ScrollerBar(scroller);
