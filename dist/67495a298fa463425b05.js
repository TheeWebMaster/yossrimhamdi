(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},111:function(e,t,n){},112:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.link=t,this.constructLink(),this.addAnimationClass()}var t,n,r;return t=e,(n=[{key:"constructLink",value:function(){var e=this.link.textContent,t='<span class="link-hover-animation__lower">'.concat(this.getDividedLink(e),'</span><span class="link-hover-animation__capital">').concat(this.getDividedLink(e),"</span>");this.link.innerHTML=t}},{key:"addAnimationClass",value:function(){this.link.classList.add("link-hover-animation")}},{key:"getDividedLink",value:function(e){return e.split("").map((function(e){return'<span class="link-hover-animation__letter-wrapper"><span class="link-hover-animation__letter">'.concat(e,"</span></span>")})).join("")}}])&&i(t.prototype,n),r&&i(t,r),e}();function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.links=document.querySelectorAll(".link, .contact-me__links > li"),this.setAnimationObject()}var t,n,i;return t=e,(n=[{key:"setAnimationObject",value:function(){this.links.forEach((function(e){return new r(e)}))}}])&&a(t.prototype,n),i&&a(t,i),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(t,n,i){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.move=function(){r.element.style.transform="translate(".concat(r.getValue("x"),"px, ").concat(r.getValue("y"),"px)")},this.element=t,this.transLimit=n,this.mouseInput=i,this.setMouseEvent()}var t,n,i;return t=e,(n=[{key:"setMouseEvent",value:function(){document.body.addEventListener("mousemove",this.move)}},{key:"getValue",value:function(e){var t=this.mouseInput[e].fraction,n=this.transLimit[e],i=n.min;return i+(n.max-i)*t}}])&&s(t.prototype,n),i&&s(t,i),e}();function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.calcFractions=function(e){t.calcXFraction(e),t.calcYFraction(e)},this.x={min:0,max:window.innerWidth},this.y={min:0,max:window.innerHeight},this.setMouseEvent()}var t,n,i;return t=e,(n=[{key:"setMouseEvent",value:function(){document.body.addEventListener("mousemove",this.calcFractions)}},{key:"calcXFraction",value:function(e){this.x.fraction=e.clientX/(this.x.max-this.x.min)}},{key:"calcYFraction",value:function(e){this.y.fraction=e.clientY/(this.y.max-this.y.min)}}])&&c(t.prototype,n),i&&c(t,i),e}();function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.loader={wrapper:document.querySelector(".loader"),inner:document.querySelector(".loader__inner")},this.mouseInput=new u,this.transLimit={x:{min:-3.5,max:3.5},y:{min:-3.5,max:3.5}},this.setTranslateObject()}var t,n,i;return t=e,(n=[{key:"setTranslateObject",value:function(){for(var e in this.loader)new l(this.loader[e],this.transLimit,this.mouseInput)}}])&&h(t.prototype,n),i&&h(t,i),e}(),d=n(66).a.init(document.querySelector("#content-wrapper"),{damping:.045});function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(t,n,i){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.runHandler=function(e){e.offset.y>r.topBounding&&(r.handler(),r.removeListener())},this.element=t,this.handler=n,this.offset=i,this.topBounding=this.getTopBounding(),d.addListener(this.runHandler)}var t,n,i;return t=e,(n=[{key:"getTopBounding",value:function(){return this.element.getBoundingClientRect().top-window.innerHeight+this.offset}},{key:"removeListener",value:function(){d.removeListener(this.runHandler)}}])&&m(t.prototype,n),i&&m(t,i),e}();function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var g=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];p(this,e),this.position=n,this.element=t,this.autoTrigger=i,this.constructElementDOM(),this.addAnimationClasses(),this.tryAutoTrigger()}var t,n,i;return t=e,(n=[{key:"constructElementDOM",value:function(){var e='<span class="line-animation__outer-span"><span class="line-animation__inner-span '.concat(this.position,'">%A%</span></span>');this.element.innerHTML=e.replace("%A%",this.element.innerHTML)}},{key:"addAnimationClasses",value:function(){this.element.classList.add("line-animation")}},{key:"triggerAnimation",value:function(){var e=this;setTimeout((function(){e.element.classList.add("line-animation--animated")}),1)}},{key:"tryAutoTrigger",value:function(){var e=this;setTimeout((function(){e.autoTrigger&&e.triggerAnimation()}),1)}}])&&y(t.prototype,n),i&&y(t,i),e}();function w(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.awards=document.querySelectorAll(".award__list > li"),this.hideAwards(),this.setWaypoints()}var t,n,i;return t=e,(n=[{key:"setWaypoints",value:function(){var e=this;this.awards.forEach((function(t){new v(t,e.handler.bind(e,t),t.clientHeight+15)}))}},{key:"handler",value:function(e){new g(e,"from-bottom",!0)}},{key:"hideAwards",value:function(){this.awards.forEach((function(e){return e.style.opacity=0}))}}])&&w(t.prototype,n),i&&w(t,i),e}();function k(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scrollY={start:t.start,end:t.end,range:t.end-t.start},d.addListener(this.calcFraction.bind(this))}var t,n,i;return t=e,(n=[{key:"calcFraction",value:function(e){var t=e.offset.y;this.fraction=(t-this.scrollY.start)/this.scrollY.range,this.fraction=this.fraction<0?0:this.fraction>1?1:this.fraction}}])&&k(t.prototype,n),i&&k(t,i),e}();function _(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var O=function(){function e(t,n,i,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scrollInput=n,this.limits=i,this.element=t,this.transformFunction=r||this.transformFunction,d.addListener(this.transformFunction.bind(this))}var t,n,i;return t=e,(n=[{key:"getCurrentValue",value:function(){var e=this.limits,t=e.start,n=e.end;return t+this.scrollInput.fraction*(n-t)}},{key:"transformFunction",value:function(){this.element.style.transform="translateX(".concat(this.getCurrentValue(),"px)")}}])&&_(t.prototype,n),i&&_(t,i),e}();function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var E=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{top:0,bottom:0},r=arguments.length>3?arguments[3]:void 0;M(this,e),this.element=t,this.topBoundingOffsets=i,this.transLimits=n,this.transformFunction=r,this.topBounding=this.getTopBoundings(),this.relativeScrollInput=this.getRelativeScrollInput(),this.animate()}var t,n,i;return t=e,(n=[{key:"getTopBoundings",value:function(){var e=this.element.getBoundingClientRect().top;return{start:e-window.innerHeight+this.topBoundingOffsets.top,end:e+this.element.clientHeight+this.topBoundingOffsets.bottom}}},{key:"getRelativeScrollInput",value:function(){return new L(this.topBounding)}},{key:"animate",value:function(){new O(this.element,this.relativeScrollInput,this.transLimits,this.transformFunction)}}])&&C(t.prototype,n),i&&C(t,i),e}();function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var j=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.changeText=function(){var e=t.getYValue();t.waypoints.forEach((function(n,i){var r=n.offset,a=n.text;e<=r&&(t.DOM.myName.innerText=a,t.toggleStrokeClass(i,e))})),t.showImage(e)},this.DOM={myName:document.querySelector(".me__my-name"),myImage:document.querySelector(".me__my-image"),container:document.querySelector(".me"),wrapper:document.querySelector(".me__wrapper")},this.limits={transform:{start:-300,end:0},bounding:{top:document.querySelector(".me__my-name").clientHeight/2,bottom:document.querySelector(".me__my-name").clientHeight+300-window.innerHeight}},this.waypoints=[{offset:300,text:"hello!"},{offset:150,text:"who am I?"},{offset:40,text:"yossri"}],this.setupParallax(),this.fixedContainersWidth(),d.addListener(this.changeText)}var t,n,i;return t=e,(n=[{key:"setupParallax",value:function(){new E(this.DOM.myName,this.limits.transform,this.limits.bounding,this.transformFunction)}},{key:"transformFunction",value:function(){this.element.style.transform="translateY(".concat(this.getCurrentValue(),"px)")}},{key:"toggleStrokeClass",value:function(e,t){e%2!=0||0===t?this.DOM.myName.classList.add("me__my-name--stroke"):this.DOM.myName.classList.remove("me__my-name--stroke")}},{key:"showImage",value:function(e){0===e?this.DOM.myImage.classList.add("me__my-image--is-visible"):this.DOM.myImage.classList.remove("me__my-image--is-visible")}},{key:"getYValue",value:function(){return Math.abs(parseInt(this.DOM.myName.style.transform.slice(11,-3)))}},{key:"fixedContainersWidth",value:function(){this.DOM.container.style.width="".concat(this.DOM.container.clientWidth,"px"),this.DOM.wrapper.style.width="".concat(this.DOM.wrapper.clientWidth,"px")}}])&&S(t.prototype,n),i&&S(t,i),e}();function T(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.DOM={cursor:{container:document.querySelector(".cursor"),inner:document.querySelector(".cursor__inner")},importantElements:document.querySelectorAll("canvas, .header__nav, .link")},this.setEvents()}var t,n,i;return t=e,(n=[{key:"setEvents",value:function(){var e=this;window.addEventListener("mousedown",this.increaseInnerCursorWidth.bind(this)),window.addEventListener("mouseup",this.decreaseInnerCursorWidth.bind(this)),this.DOM.importantElements.forEach((function(t){t.addEventListener("mouseenter",e.onFocus.bind(e)),t.addEventListener("mouseleave",e.offFocus.bind(e))}))}},{key:"onFocus",value:function(){this.DOM.cursor.container.classList.add("cursor--on-focus")}},{key:"offFocus",value:function(){this.DOM.cursor.container.classList.remove("cursor--on-focus")}},{key:"increaseInnerCursorWidth",value:function(){this.DOM.cursor.inner.classList.add("cursor__inner--active")}},{key:"decreaseInnerCursorWidth",value:function(){this.DOM.cursor.inner.classList.remove("cursor__inner--active")}}])&&T(t.prototype,n),i&&T(t,i),e}();function H(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var D=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cursor={wrapper:document.querySelector(".cursor"),outer:document.querySelector(".cursor__outer"),inner:document.querySelector(".cursor__inner")},this.centralizeCursor(),d.addListener(this.makeCursorVisible.bind(this))}var t,n,i;return t=e,(n=[{key:"centralizeCursor",value:function(){for(var e in this.cursor)"wrapper"!==e&&(this.cursor[e].style.top="".concat(window.innerHeight/2,"px"),this.cursor[e].style.left="".concat(window.innerWidth/2,"px"))}},{key:"setMouseEvent",value:function(){document.addEventListener("mousemove",this.moveCursorParts.bind(this))}},{key:"makeCursorVisible",value:function(e){var t=e.offset.y;this.cursor.wrapper.style.top="".concat(t,"px")}},{key:"moveCursorParts",value:function(e){var t=this,n=function(n){"wrapper"!==n&&setTimeout((function(){t.cursor[n].style.top="".concat(e.clientY,"px"),t.cursor[n].style.left="".concat(e.clientX,"px")}),"inner"===n?0:100)};for(var i in this.cursor)n(i)}}])&&H(t.prototype,n),i&&H(t,i),e}();function I(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var q=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleReadyState=function(e){var n=t.DOM.loader,i=n.circle,r=n.wrapper;i.style.animation="loaded 2000ms forwards",setTimeout((function(){t.showClickAndHoldMessage(),t.setMousePressEvents(),r.classList.add("loader--interactive")}),1900)},this.showPageContentIfReachedTimeLimit=function(){t.timer.start=Date.now(),t.timer.interval=setInterval(t.showPageContent,100)},this.showPageContent=function(){t.checkTimer(),t.timer.reached&&(t.clearInterval(),t.hideClickAndHoldMessage(),t.animateNavAndAvailabilityMessage(),t.disableDefaultCursor(),t.animateFrontalHeadlines(),t.hideLoader(),t.showCursor())},this.enableMouseInteractions=function(){t.clearInterval(),t.timer.reached&&(t.enableScrolling(),t.cursor.setMouseEvent(),new x)},this.DOM={preload:{wrapper:document.querySelector(".preload-overlay"),state:document.querySelector(".preload-overlay__state")},loader:{wrapper:document.querySelector(".loader"),circle:document.querySelector(".loader__circle")},header:{myName:document.querySelector(".header__my-name"),navListWrapper:document.querySelector(".header__nav-list-wrapper"),adList:document.querySelectorAll(".header__ad-list li"),messageList:document.querySelectorAll(".header__availability-message li")},frontal:{wrapper:document.querySelector(".frontal"),headlines:document.querySelectorAll(".frontal__headline:not(:last-child)")},cursor:document.querySelector(".cursor")},this.cursor=new D,this.timer={start:0,interval:null,limit:300,reached:!1},this.setLoadEvent(),this.animateMyNameAndAdListIntoView(),d.addListener(this.disableScrolling)}var t,n,i;return t=e,(n=[{key:"setLoadEvent",value:function(){window.addEventListener("load",this.handleReadyState)}},{key:"setMousePressEvents",value:function(){this.DOM.loader.wrapper.addEventListener("mousedown",this.showPageContentIfReachedTimeLimit),document.body.addEventListener("mouseup",this.enableMouseInteractions)}},{key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.timer.interval)}))},{key:"disableScrolling",value:function(){d.scrollTo(0,0,0)}},{key:"enableScrolling",value:function(){d.removeListener(this.disableScrolling)}},{key:"checkTimer",value:function(){this.timer.reached=Date.now()-this.timer.start>=this.timer.limit}},{key:"showClickAndHoldMessage",value:function(){new g(this.DOM.preload.state,"from-bottom",!0)}},{key:"hideClickAndHoldMessage",value:function(){this.DOM.preload.state.classList.add("line-animation--hidden-to-bottom")}},{key:"disableDefaultCursor",value:function(){document.body.style.cursor="none"}},{key:"hideLoader",value:function(){this.DOM.loader.wrapper.classList.add("loader--hidden")}},{key:"showCursor",value:function(){this.DOM.cursor.classList.add("cursor--is-visible")}},{key:"animateFrontalHeadlines",value:function(){this.DOM.frontal.headlines.forEach((function(e,t){setTimeout((function(){e.classList.add("frontal__headline--".concat(t))}),120*t)}))}},{key:"animateMyNameAndAdListIntoView",value:function(){var e=this.DOM.header,t=e.myName,n=e.adList,i=this.getAnimations(n,"from-top");setTimeout((function(){return new g(t,"from-top",500)})),this.runAnimations(i,1500)}},{key:"getAnimations",value:function(e,t){return Array.from(e).map((function(e){return new g(e,t)}))}},{key:"runAnimations",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;setTimeout((function(){e.forEach((function(e,t){setTimeout((function(){e.triggerAnimation()}),t*n)}))}),t)}},{key:"animateNavAndAvailabilityMessage",value:function(){var e=this,t=this.DOM.header,n=t.navListWrapper,i=t.messageList,r=this.getAnimations(i,"from-bottom");setTimeout((function(){e.runAnimations(r,0,120),setTimeout((function(){n.classList.add("header__nav-list-wrapper--visible")}),100)}),400)}}])&&I(t.prototype,n),i&&I(t,i),e}();function A(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var P=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scrollerBar=document.querySelector(".scrollbar"),this.htmlContentVisibleHeight=document.querySelector(".website-content").clientHeight-window.innerHeight,d.addListener(this.updateScrollBarHeight.bind(this)),this.updateScrollBarOnInterval()}var t,n,i;return t=e,(n=[{key:"updateScrollBarHeight",value:function(e){var t=e.offset.y;this.scrollerBar.style.height="".concat(t/this.htmlContentVisibleHeight*100,"vh")}},{key:"updateScrollBarOnInterval",value:function(){var e=this;setInterval((function(){e.htmlContentVisibleHeight=document.querySelector(".website-content").clientHeight-window.innerHeight}),200)}}])&&A(t.prototype,n),i&&A(t,i),e}();function B(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var F=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.headlines=document.querySelectorAll(".frontal-headline--to-translate"),this.limits={transform:[{start:0,end:-200},{start:0,end:200}],bounding:[{top:window.innerHeight-this.headlines[0].getBoundingClientRect().top,bottom:0},{top:window.innerHeight-this.headlines[1].getBoundingClientRect().top,bottom:0}]},this.setupParallaxObject()}var t,n,i;return t=e,(n=[{key:"setupParallaxObject",value:function(){var e=this;this.headlines.forEach((function(t,n){new E(t,e.limits.transform[n],e.limits.bounding[n])}))}}])&&B(t.prototype,n),i&&B(t,i),e}();function W(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var N=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.animateDescription=function(){t.topBorders.forEach((function(e){t.isBorderHalfWayVisible(e.style.transform)&&t.isNotAnimated(e)&&new g(e.nextElementSibling,"from-right",!0)}))},this.topBorders=document.querySelectorAll(".milestone__top-border"),this.limits={transform:{start:-50,end:0},bounding:{top:0,bottom:210-window.innerHeight}},this.setupParallaxObject(),d.addListener(this.animateDescription)}var t,n,i;return t=e,(n=[{key:"setupParallaxObject",value:function(){var e=this;this.topBorders.forEach((function(t){new E(t,e.limits.transform,e.limits.bounding,e.transformFunction)}))}},{key:"transformFunction",value:function(){this.element.style.transform="translateX(".concat(this.getCurrentValue(),"%)")}},{key:"isNotAnimated",value:function(e){return!e.nextElementSibling.classList.contains("line-animation--animated")}},{key:"isBorderHalfWayVisible",value:function(e){return parseFloat(e.slice(11,-2))>-20}}])&&W(t.prototype,n),i&&W(t,i),e}();function V(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projects=document.querySelectorAll(".project"),this.limits=this.getLimits(),this.setupParallax()}var t,n,i;return t=e,(n=[{key:"getLimits",value:function(){return window.innerWidth>1400?[{start:100,end:400},{start:100,end:-200}]:[{start:100,end:280},{start:100,end:-80}]}},{key:"setupParallax",value:function(){var e=this;this.projects.forEach((function(t,n){return new E(t,n%2==0?e.limits[0]:e.limits[1])}))}}])&&V(t.prototype,n),i&&V(t,i),e}();function R(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var U=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.workHeadline=document.querySelector(".headline--work"),this.limit={transform:{start:0,end:-200},bounding:{top:0,bottom:400}},this.setupParallax()}var t,n,i;return t=e,(n=[{key:"setupParallax",value:function(){new E(this.workHeadline,this.limit.transform,this.limit.bounding,this.transformFunction)}},{key:"transformFunction",value:function(){this.element.style.transform="translate(39%, ".concat(this.getCurrentValue(),"px) rotate(-90deg)")}}])&&R(t.prototype,n),i&&R(t,i),e}();function X(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var z=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.awardHeadline=document.querySelector(".headline--award"),this.limit={transform:{start:-60,end:10},bounding:{top:0,bottom:200}},this.setupParallax()}var t,n,i;return t=e,(n=[{key:"setupParallax",value:function(){new E(this.awardHeadline,this.limit.transform,this.limit.bounding,this.transformFunction)}},{key:"transformFunction",value:function(){this.element.style.transform="translate(".concat(this.getCurrentValue(),"px, -60%)")}}])&&X(t.prototype,n),i&&X(t,i),e}();function J(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var $=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.header=document.querySelector(".header"),d.addListener(this.modifyHeaderPosition.bind(this))}var t,n,i;return t=e,(n=[{key:"modifyHeaderPosition",value:function(e){var t=e.offset.y;this.header.style.transform="translateY(".concat(t,"px)")}}])&&J(t.prototype,n),i&&J(t,i),e}();function G(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var K=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.message={container:document.querySelector(".header__availability-message ul"),items:document.querySelectorAll(".header__availability-message li")},this.range=this.getRange(),this.moveUpOffset=this.getMoveUpOffset(),d.addListener(this.animateMessage.bind(this))}var t,n,i;return t=e,(n=[{key:"getMoveUpOffset",value:function(){return window.innerWidth>=1024?1.5:1.2}},{key:"getRange",value:function(){return window.innerWidth>=1024?[.4,.3,.2,.1]:[.8,.6,.4,.2]}},{key:"animateMessage",value:function(e){var t=e.offset.y;this.moveMessageListUp(t),this.addSpaceBetweenMessageLIs(t)}},{key:"moveMessageListUp",value:function(e){this.message.container.style.transform="translateY(-".concat(e*this.moveUpOffset,"px)")}},{key:"addSpaceBetweenMessageLIs",value:function(e){var t=this;this.message.items.forEach((function(n,i){n.style.transform="translateY(-".concat(e*t.range[i],"px)")}))}}])&&G(t.prototype,n),i&&G(t,i),e}();function Q(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.milestones=document.querySelectorAll(".milestone--target"),this.nav=document.querySelector(".header__nav"),this.boundaries=this.getBoundaries(),this.animateNavOnWaypoints=t,this.setClickEvent()}var t,n,i;return t=e,(n=[{key:"getBoundaries",value:function(){var e=new Map;return this.milestones.forEach((function(t){e.set(t.id,t.getBoundingClientRect().top)})),e}},{key:"setClickEvent",value:function(){this.nav.addEventListener("click",this.handleClickEvent.bind(this))}},{key:"handleClickEvent",value:function(e){var t=this;e.target.textContent.length<=8&&(this.animateNavOnWaypoints.isEnabled=!1,this.animateNavOnWaypoints.highlightCurrentSectionLink(e.target.textContent)),d.scrollTo(0,this.boundaries.get(e.target.textContent),600),setTimeout((function(){t.animateNavOnWaypoints.isEnabled=!0}),600)}}])&&Q(t.prototype,n),i&&Q(t,i),e}();function ee(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,a=!0,o=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return a=e.done,e},e:function(e){o=!0,r=e},f:function(){try{a||null==i.return||i.return()}finally{if(o)throw r}}}}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function ne(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var ie=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.DOM={waypoints:document.querySelectorAll(".milestone--target"),nav:document.querySelector(".header__nav"),navListWrapper:document.querySelector(".header__nav-list-wrapper"),navList:document.querySelector(".header__nav ul")},this.LIsHeight=this.getLIsHeight(),this.topBoundings=this.getTopBoundings(),this.setNavHeight(),this.isEnabled=!0,d.addListener(this.animate.bind(this))}var t,n,i;return t=e,(n=[{key:"getLIsHeight",value:function(){return document.querySelector(".header__nav li").clientHeight}},{key:"setNavHeight",value:function(){this.DOM.nav.style.height="".concat(4*this.LIsHeight,"px")}},{key:"getTopBoundings",value:function(){var e=this,t=[],n=0;return this.DOM.waypoints.forEach((function(i){t.push({sectionID:i.id,top:i.getBoundingClientRect().top-window.innerHeight+200,transValue:n}),n+=e.LIsHeight})),t.reverse()}},{key:"animate",value:function(e){var t=e.offset.y,n=this.translateYNavLinksWrapper(t);this.isEnabled&&this.highlightCurrentSectionLink(n),this.showFullNav(t)}},{key:"translateYNavLinksWrapper",value:function(e){var t,n=ee(this.topBoundings);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(e>i.top)return this.DOM.navList.style.transform="translateY(-".concat(i.transValue,"px)"),i.sectionID}}catch(e){n.e(e)}finally{n.f()}}},{key:"showFullNav",value:function(e){e<100?(this.DOM.navListWrapper.style.maxHeight="".concat(4*this.LIsHeight,"px"),this.DOM.navListWrapper.classList.add("header__nav-list-wrapper--is-fully-visible")):(this.DOM.navListWrapper.style.maxHeight="".concat(this.LIsHeight,"px"),this.DOM.navListWrapper.classList.remove("header__nav-list-wrapper--is-fully-visible"))}},{key:"highlightCurrentSectionLink",value:function(e){this.DOM.navList.querySelector(".header__nav-link--active").classList.remove("header__nav-link--active"),this.DOM.navList.querySelector(".".concat(e)).classList.add("header__nav-link--active")}}])&&ne(t.prototype,n),i&&ne(t,i),e}();function re(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var ae=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.animate=function(e){var t=e.offset.y,n=i.getNewTranslateYFunction(t);n!==i.DOM.innerSpans[0].style.transform&&i.DOM.innerSpans.forEach((function(e,t){setTimeout((function(){e.style.transform=n}),30*t)}))},this.DOM={paragraph:document.querySelector(t),innerSpans:null},this.offset=n,this.topBounding=this.getTopBounding(),this.addAnimationClass(),this.divideParagraph(),this.selectInnerSpans(),d.addListener(this.animate)}var t,n,i;return t=e,(n=[{key:"divideParagraph",value:function(){var e=this.DOM.paragraph.innerHTML.split(" ");this.DOM.paragraph.innerHTML=e.map((function(e){return"<span><span>".concat(e,"</span></span>")})).join(" ")}},{key:"selectInnerSpans",value:function(){this.DOM.innerSpans=this.DOM.paragraph.querySelectorAll(".text-animation-on-scroll > span > span")}},{key:"getTopBounding",value:function(){return this.DOM.paragraph.getBoundingClientRect().top-window.innerHeight+this.offset}},{key:"addAnimationClass",value:function(){this.DOM.paragraph.classList.add("text-animation-on-scroll")}},{key:"getNewTranslateYFunction",value:function(e){return e>this.topBounding?"translateY(0px)":"translateY(100%)"}}])&&re(t.prototype,n),i&&re(t,i),e}();function oe(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var se=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.adList=document.querySelector(".header__ad-list"),this.offsets=this.getOffsets(),this.interval=null,d.addListener(this.changeAd.bind(this))}var t,n,i;return t=e,(n=[{key:"getOffsets",value:function(){for(var e=[],t=0;t<this.adList.childElementCount;t++)e.push(29*t);return e}},{key:"getRandomInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"createInterval",value:function(){var e=this;return setInterval((function(){var t=e.offsets[e.getRandomInt(e.adList.childElementCount)];e.adList.style.transform="translateY(-".concat(t,"px)")}),3500)}},{key:"changeAd",value:function(e){var t=e.offset.y;t<window.innerHeight-window.innerHeight/2.5&&null!==this.interval?(this.adList.style.transform="translateY(0)",clearInterval(this.interval),this.interval=null):t>window.innerHeight-window.innerHeight/2.5&&null===this.interval&&(this.interval=this.createInterval())}}])&&oe(t.prototype,n),i&&oe(t,i),e}();function le(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var ce=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.links=document.querySelectorAll(".header__nav-link"),this.updateInnerHTML()}var t,n,i;return t=e,(n=[{key:"updateInnerHTML",value:function(){var e=this;this.notEdgeBrowser()&&this.links.forEach((function(t){t.innerHTML=e.getNewInnerHTML(t.innerHTML)}))}},{key:"getNewInnerHTML",value:function(e){return'<span class="header__nav-link-top-portion">'.concat(e,'</span>\n    <span class="header__nav-link-bottom-portion">').concat(e,"</span>")}},{key:"notEdgeBrowser",value:function(){return!window.navigator.userAgent.includes("Edge/")}}])&&le(t.prototype,n),i&&le(t,i),e}();function ue(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var he=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectsContainer=document.querySelector(".projects-container"),this.projects={title:["bcharity","mackmedia","ammolite","grape garage","dorfjungs","mueller","my portfolio"],link:["https://bcharity-thewebmaster.netlify.com","#","#","#","#","#","https://yossrimhamdi.netlify.com"],marqee:"javascript animations smooth wordpress tansition parallax react nextjs scrolling smoovy gulp post-css webpack node-js automation github git npm"},this.generateDOMprojects()}var t,n,i;return t=e,(n=[{key:"generateDOMprojects",value:function(){var e=this;this.projects.title.forEach((function(t,n){e.projectsContainer.insertAdjacentHTML("beforeend",e.getProjectDOMString(t,e.projects.link[n]))}))}},{key:"getProjectDOMString",value:function(e,t){return this.shuffleMarqee(),'\n    <div class="project">\n      <div class="project__container"> \n        <div class="project__wrapper">\n          <h1 class="project__title">'.concat(e,'</h1>\n          <p class="project__marqee">').concat(this.projects.marqee,'</p>\n          <p class="project__marqee project__marqee--left-content-support">').concat(this.projects.marqee,'</p>\n        </div>\n        <a class="project__link" href="').concat(t,'" target="_blank">\n          <div class="project__image-container" data-project-title="').concat(e.split(" ").join("-"),'"></div>\n        </a>\n      </div>\n    </div>\n    ')}},{key:"shuffleMarqee",value:function(){for(var e=this.projects.marqee.split(" "),t=0;t<e.length;t++)this.swap(e,t,this.getRandomI(e.length));this.projects.marqee=e.join(" ")}},{key:"getRandomI",value:function(e){return Math.floor(Math.random()*e)}},{key:"swap",value:function(e,t,n){var i=e[t];e[t]=e[n],e[n]=i}}])&&ue(t.prototype,n),i&&ue(t,i),e}(),fe=n(67);n(110);function de(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var me=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.imagesContainer=document.querySelectorAll(".project__image-container"),this.imagesDim=[{width:476,height:237},{width:1100,height:520},{width:820,height:396},{width:1030,height:534},{width:1024,height:576},{width:600,height:366},{width:709,height:443}],this.setImageContainerHeight(),this.setImageHoverEffect()}var t,n,i;return t=e,(n=[{key:"setImageContainerHeight",value:function(){var e=this;this.imagesContainer.forEach((function(t,n){var i=t.clientWidth;t.style.height="".concat(e.imagesDim[n].height/(e.imagesDim[n].width/i),"px")}))}},{key:"setImageHoverEffect",value:function(){var e=this;this.imagesContainer.forEach((function(t,n){var i=t.dataset.projectTitle;new fe.a({parent:t,intensity:.2,image1:"./images/displacements/transparent.png",image2:"./images/projects/".concat(i,"/").concat(i,".jpg"),displacementImage:"./images/displacements/cloud.jpg",imagesRatio:e.imagesDim[n].height/e.imagesDim[n].width})}))}}])&&de(t.prototype,n),i&&de(t,i),e}();window.addEventListener("load",(function(){new P,new he,new ce;var e=new ie;new Z(e),new K,new $,new F,new U,new z,window.innerWidth>=1024&&(new ae(".text-to-animate",200),new ae(".text-to-animate--1",200),new N,new Y,new se,new me,new j,new b,new f,new o)})),window.innerWidth>=1024&&new q},64:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},68:function(e,t,n){n(112),e.exports=n(111)}},[[68,4,1,5,3,2,6,7]]]);