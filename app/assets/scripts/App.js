import scroller from './modules/Scroller';
import ScrollBar from './modules/Scrollbar';
import TranslateXFrontalHeadlinesOnScroll from './modules/TranslateXFrontalHeadlinesOnScroll';
import AnimateMileStonesOnScroll from './modules/AnimateMileStonesOnScroll';
import TranslateXHeadlinesOnScroll from './modules/TranslateXHeadlinesOnScroll';
import TransformWorkHeadlineOnScroll from './modules/TransformWorkHeadlineOnScroll';
import TranslateXStrokeHeadlinesOnScroll from './modules/TranslateXStrokeHeadlinesOnScroll';
import FixedHeaderPosition from './modules/FixedHeaderPosition';
import AnimateAvailabilityMessageOnScroll from './modules/AnimateAvailabilityMessageOnScroll';
import ScrollToOnNavigationLinkClick from './modules/ScrollToOnNavigationLinkClick';
import AnimateNavOnWaypoints from './modules/AnimateNavOnWaypoints';
import AnimateParagraphOnScroll from './modules/AnimateParagraphOnScroll';
import ChangeAdOnTiming from './modules/ChangeAdOnTiming';
import GenerateCostumHTMLLinksDOM from './modules/GenerateCostumHTMLLinksDOM';
import GenerateProjects from './modules/GenerateProjects';

const scrollBar = new ScrollBar(scroller);
new GenerateProjects(scrollBar);
new GenerateCostumHTMLLinksDOM();
new AnimateParagraphOnScroll(scroller);
new AnimateNavOnWaypoints(scroller);
new ScrollToOnNavigationLinkClick(scroller);
new AnimateAvailabilityMessageOnScroll(scroller);
new FixedHeaderPosition(scroller);
new TranslateXStrokeHeadlinesOnScroll(scroller);
new TransformWorkHeadlineOnScroll(scroller);
new TranslateXFrontalHeadlinesOnScroll(scroller);

if (window.innerWidth >= 1024) {
  new AnimateMileStonesOnScroll(scroller);
  new TranslateXHeadlinesOnScroll(scroller);
  new ChangeAdOnTiming(scroller);
}
