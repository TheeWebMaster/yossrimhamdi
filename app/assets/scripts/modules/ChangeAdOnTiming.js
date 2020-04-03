class ChangeAdOnTiming {
  constructor(scroller) {
    this.adList = document.querySelector('.header__ad-list');
    this.offsets = this.getOffsets();
    this.interval = null;
    scroller.onScroll(this.changeAd.bind(this));
  }
  getOffsets() {
    const offsets = [];

    for (let i = 0; i < this.adList.childElementCount; i++) {
      offsets.push(29 * i);
    }

    return offsets;
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  createInterval() {
    return setInterval(() => {
      const randOffset = this.offsets[this.getRandomInt(this.adList.childElementCount)];
      this.adList.style.transform = `translateY(-${randOffset}px)`;
    }, 3500);
  }
  changeAd({ y }) {
    if (y < window.innerHeight - window.innerHeight / 2.5 && this.interval !== null) {
      this.adList.style.transform = 'translateY(0)';
      clearInterval(this.interval);
      this.interval = null;
    } else if (y > window.innerHeight - window.innerHeight / 2.5 && this.interval === null) {
      this.interval = this.createInterval();
    }
  }
}

export default ChangeAdOnTiming;
