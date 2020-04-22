import AnimateMyNameOnScroll from './modules/AnimateMyNameOnScroll';
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
import AnimateTextOnScroll from './modules/AnimateTextOnScroll';
import ChangeAdOnTiming from './modules/ChangeAdOnTiming';
import GenerateCostumHTMLLinksDOM from './modules/GenerateCostumHTMLLinksDOM';
import GenerateProjects from './modules/GenerateProjects';
import ImageHoverEffect from './modules/ImageHoverEffect';

new ScrollBar();
new GenerateProjects();
new GenerateCostumHTMLLinksDOM();
new AnimateTextOnScroll();
new AnimateNavOnWaypoints();
new ScrollToOnNavigationLinkClick();
new AnimateAvailabilityMessageOnScroll();
new FixedHeaderPosition();
new TranslateXAwardHeadlinesOnScroll();
new TranslateYWorkHeadlineOnScroll();
new TranslateXFrontalHeadlinesOnScroll();

if (window.innerWidth >= 1024) {
  new AnimateMileStonesOnScroll();
  new TranslateXProjectsOnScroll();
  new ChangeAdOnTiming();
  new ImageHoverEffect();
  new AnimateMyNameOnScroll();
}
