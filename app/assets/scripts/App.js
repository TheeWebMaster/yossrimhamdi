import scroller from './modules/Scroller';
import ScrollBar from './modules/Scrollbar';
import TranslateXFrontalHeadlinesOnScroll from './modules/TranslateXFrontalHeadlinesOnScroll';
import AnimateMileStonesOnScroll from './modules/AnimateMileStonesOnScroll';
import TranslateXProjectsOnScroll from './modules/TranslateXProjectsOnScroll';
import TranslateYWorkHeadlineOnScroll from './modules/TranslateYWorkHeadlineOnScroll';
import TranslateXAwardHeadlinesOnScroll from './modules/TranslateXAwardHeadlinesOnScroll';
import FixedHeaderPosition from './modules/FixedHeaderPosition';
import AnimateAvailabilityMessageOnScroll from './modules/AnimateAvailabilityMessageOnScroll';
import ScrollToOnNavigationLinkClick from './modules/ScrollToOnNavigationLinkClick';
import AnimateNavOnWaypoints from './modules/AnimateNavOnWaypoints';
import AnimateParagraphOnScroll from './modules/AnimateParagraphOnScroll';
import ChangeAdOnTiming from './modules/ChangeAdOnTiming';
import GenerateCostumHTMLLinksDOM from './modules/GenerateCostumHTMLLinksDOM';
import GenerateProjects from './modules/GenerateProjects';
import ImageHoverEffect from './modules/ImageHoverEffect';

new ScrollBar(scroller);
new GenerateProjects();
new GenerateCostumHTMLLinksDOM();
new AnimateParagraphOnScroll(scroller);
new AnimateNavOnWaypoints(scroller);
new ScrollToOnNavigationLinkClick(scroller);
new AnimateAvailabilityMessageOnScroll(scroller);
new FixedHeaderPosition(scroller);
new TranslateXAwardHeadlinesOnScroll(scroller);
new TranslateYWorkHeadlineOnScroll(scroller);
new TranslateXFrontalHeadlinesOnScroll(scroller);

if (window.innerWidth >= 1024) {
  new AnimateMileStonesOnScroll(scroller);
  new TranslateXProjectsOnScroll(scroller);
  new ChangeAdOnTiming(scroller);
  new ImageHoverEffect();
}
