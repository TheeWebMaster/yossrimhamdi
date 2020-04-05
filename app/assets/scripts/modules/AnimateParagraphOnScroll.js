class AnimateParagraphOnScroll {
  constructor(scroller) {
    this.paragraphs = {
      DOM: document.querySelectorAll('.paragraph--to-animate-js'),
      innerSpans: [],
    };
    this.topBoundings = this.getTopBoundings();
    this.divideParagraphsTextIntoSpans();
    this.selectInnerParagraphDOMspans();
    scroller.onScroll(this.animateParagraphs.bind(this));
  }
  divideParagraphsTextIntoSpans() {
    this.paragraphs.DOM.forEach((paragraph) => {
      paragraph.innerHTML = paragraph.innerText
        .split(' ')
        .map((word) => `<span><span>${word}</span></span>`)
        .join(' ');
    });
  }
  selectInnerParagraphDOMspans() {
    this.paragraphs.DOM.forEach((paragraph) => {
      this.paragraphs.innerSpans.push(paragraph.querySelectorAll('span > span'));
    });
  }
  animateParagraphs({ y }) {
    this.paragraphs.innerSpans.forEach((spans, i) => {
      const newTranslateYFunction = this.getNewTranslateYFunction(y, i);

      if (newTranslateYFunction !== spans[0].style.transform) {
        spans.forEach((span, j) => {
          setTimeout(() => {
            span.style.transform = newTranslateYFunction;
          }, 30 * j);
        });
      }
    });
  }
  getNewTranslateYFunction(y, i) {
    if (y > this.topBoundings[i]) {
      return 'translateY(0px)';
    } else {
      return 'translateY(100%)';
    }
  }
  getTopBoundings() {
    const topBoundings = [];

    this.paragraphs.DOM.forEach((paragraph) => {
      topBoundings.push(
        paragraph.getBoundingClientRect().top - window.innerHeight + paragraph.clientHeight * (1 - 1 / 5)
      );
    });

    return topBoundings;
  }
}

export default AnimateParagraphOnScroll;
