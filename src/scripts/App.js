import AnimateLinksOnHover from './modules/AnimateLinksOnHover';
import MoveLoaderOnMouseMove from './modules/MoveLoaderOnMouseMove';
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

setTimeout(() => {
  new ScrollBar();
  new GenerateProjects();
  new GenerateCostumHTMLLinksDOM();
  const animateNavOnWaypoints = new AnimateNavOnWaypoints();
  new ScrollToOnNavigationLinkClick(animateNavOnWaypoints);
  new AnimateAvailabilityMessageOnScroll();
  new FixedHeaderPosition();
  new TranslateXFrontalHeadlinesOnScroll();
  new TranslateYWorkHeadlineOnScroll();
  new TranslateXAwardHeadlinesOnScroll();

  if (window.innerWidth >= 1024) {
    new progressinveTextAnimationOnScroll('.text-to-animate', 200);
    new progressinveTextAnimationOnScroll('.text-to-animate--1', 200);
    new AnimateMileStonesOnScroll();
    new TranslateXProjectsOnScroll();
    new ChangeAdOnTiming();
    new ImageHoverEffect();
    new AnimateMyNameOnScroll();
    new AnimateAwardsOnWaypoint();
    new MoveLoaderOnMouseMove();
    new AnimateLinksOnHover();
  }
}, 1000);

if (window.innerWidth >= 1024) {
  new Preload();
}
