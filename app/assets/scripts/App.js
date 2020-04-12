import ScrollBar from './modules/Scrollbar';
import scroller from './modules/Scroller';
import TranslateXFrontalHeadlinesOnScroll from './modules/TranslateXFrontalHeadlinesOnScroll';
import AnimateMileStonesOnScroll from './modules/AnimateMileStonesOnScroll';
import TranslateXHeadlinesOnScroll from './modules/TranslateXHeadlinesOnScroll';
import TransformWorkHeadlineOnScroll from './modules/TransformWorkHeadlineOnScroll';
import TranslateXStrokeHeadlinesOnScroll from './modules/TranslateXStrokeHeadlinesOnScroll';
import FixedHeaderPosition from './modules/FixedHeaderPosition';
import AnimateAvailabilityMessageOnScroll from './modules/AnimateAvailabilityMessageOnScroll';
import ScrollToOnNavigationLinkClick from './modules/ScrollToOnNavigationLinkClick';
import TranslateNavLinksOnWaypoints from './modules/TranslateNavLinksOnWaypoints';
import AnimateParagraphOnScroll from './modules/AnimateParagraphOnScroll';
import ChangeAdOnTiming from './modules/ChangeAdOnTiming';

new AnimateParagraphOnScroll(scroller);
new TranslateNavLinksOnWaypoints(scroller);
new ScrollToOnNavigationLinkClick(scroller);
new AnimateAvailabilityMessageOnScroll(scroller);
new FixedHeaderPosition(scroller);
new TranslateXStrokeHeadlinesOnScroll(scroller);
new TransformWorkHeadlineOnScroll(scroller);
new TranslateXFrontalHeadlinesOnScroll(scroller);
new ScrollBar(scroller);

if (window.innerWidth >= 1024) {
  new AnimateMileStonesOnScroll(scroller);
  new TranslateXHeadlinesOnScroll(scroller);
  new ChangeAdOnTiming(scroller);
}
