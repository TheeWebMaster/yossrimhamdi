class GenerateProjects {
  constructor() {
    this.projectsContainer = document.querySelector('.projects-container');
    this.projects = {
      title: ['roots', 'mackmedia', 'ammolite', 'grape garage', 'dorfjungs', 'mueller', 'my portfolio'],
      marqee: 'javascript animations smooth wordpress tansition parallax react nextjs scrolling smoovy gulp post-css webpack node-js automation github git npm'.split(
        ' '
      ),
    };
    this.generateDOMprojects();
  }
  generateDOMprojects() {
    this.projects.title.forEach((projectTitle) => {
      this.projectsContainer.insertAdjacentHTML('beforeend', this.getProjectDOMString(projectTitle));
    });
  }
  getProjectDOMString(projectTitle) {
    this.shuffleMarqee();
    return `
    <div class="project">
      <div class="project__container"> 
        <div class="project__wrapper">
          <h1 class="project__title">${projectTitle}</h1>
          <p class="project__marqee">${this.projects.marqee.join(' ')}</p>
          <p class="project__marqee project__marqee--left-content-support">${this.projects.marqee.join(' ')}</p>
        </div>
        <div class="project__image-container" data-project-title="${projectTitle.split(' ').join('-')}"></div>
      </div>
    </div>
    `;
  }
  shuffleMarqee() {
    for (let i = 0; i < this.projects.marqee.length; i++) {
      this.swap(i, this.getRandomI());
    }
  }
  getRandomI() {
    return Math.floor(Math.random() * this.projects.marqee.length);
  }
  swap(i, j) {
    const { marqee } = this.projects;
    const temp = marqee[i];
    marqee[i] = marqee[j];
    marqee[j] = temp;
  }
}

export default GenerateProjects;
