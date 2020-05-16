import AnimateAwardsOnWaypoint from './modules/AnimateAwardsOnWaypoint';
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
import progressinveTextAnimationOnScroll from './modules/progressinveTextAnimationOnScroll';
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
  new progressinveTextAnimationOnScroll('.text-to-animate', 200);
  new progressinveTextAnimationOnScroll('.text-to-animate--1', 200);
  new progressinveTextAnimationOnScroll('.contact-me__message', 100);
  new AnimateMileStonesOnScroll();
  new TranslateXProjectsOnScroll();
  new ChangeAdOnTiming();
  new ImageHoverEffect();
  new AnimateMyNameOnScroll();
  new Preload();
}

new AnimateAwardsOnWaypoint();
