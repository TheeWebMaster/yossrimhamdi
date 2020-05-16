import './modules/Waypoint';
import AnimateMyNameOnScroll from './modules/AnimateMyNameOnScroll';
import Preload from './modules/Preload';
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
import AnimateTextProgressivelyOnScroll from './modules/AnimateTextProgressivelyOnScroll';
import ChangeAdOnTiming from './modules/ChangeAdOnTiming';
import GenerateCostumHTMLLinksDOM from './modules/GenerateCostumHTMLLinksDOM';
import GenerateProjects from './modules/GenerateProjects';
import ImageHoverEffect from './modules/ImageHoverEffect';

new ScrollBar();
new GenerateProjects();
new GenerateCostumHTMLLinksDOM();
const animateNavOnWaypoints = new AnimateNavOnWaypoints();
new ScrollToOnNavigationLinkClick(animateNavOnWaypoints);
new AnimateAvailabilityMessageOnScroll();
new FixedHeaderPosition();
new TranslateXAwardHeadlinesOnScroll();
new TranslateYWorkHeadlineOnScroll();
new TranslateXFrontalHeadlinesOnScroll();

if (window.innerWidth >= 1024) {
  new AnimateTextProgressivelyOnScroll();
  new AnimateMileStonesOnScroll();
  new TranslateXProjectsOnScroll();
  new ChangeAdOnTiming();
  new ImageHoverEffect();
  new AnimateMyNameOnScroll();
  new Preload();
}
