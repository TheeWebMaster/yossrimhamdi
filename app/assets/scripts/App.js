import ScrollerBar from './modules/ScrollerBar';
import scroller from './modules/Scroller';
import TranslateFrontalHeadlinesOnScroll from './modules/TranslateFrontalHeadlinesOnScroll';
import AnimateMileStonesOnScroll from './modules/AnimateMileStonesOnScroll';
import TranslateXHeadlinesOnScroll from './modules/TranslateXHeadlinesOnScroll';
import TransformWorkHeadlineOnScroll from './modules/TransformWorkHeadlineOnScroll';
import TranslateXStrokeHeadlinesOnScroll from './modules/TranslateXStrokeHeadlinesOnScroll';
import FixedHeaderPosition from './modules/FixedHeaderPosition';

new FixedHeaderPosition(scroller);

new TranslateXStrokeHeadlinesOnScroll(scroller);
new TransformWorkHeadlineOnScroll(scroller);
new TranslateXHeadlinesOnScroll(scroller);
new AnimateMileStonesOnScroll(scroller);
new TranslateFrontalHeadlinesOnScroll(scroller);
new ScrollerBar(scroller);
