class GenerateCostumHTMLLinksDOM {
  constructor() {
    this.links = document.querySelectorAll('.header__nav-link');
    this.updateInnerHTML();
  }
  updateInnerHTML() {
    this.links.forEach((link) => {
      link.innerHTML = this.getNewInnerHTML(link.innerHTML);
    });
  }
  getNewInnerHTML(linkTitle) {
    return `<span class="header__nav-link-top-portion">${linkTitle}</span>
    <span class="header__nav-link-bottom-portion">${linkTitle}</span>`;
  }
}

export default GenerateCostumHTMLLinksDOM;
