class GenerateProjects {
  constructor() {
    this.projectsContainer = document.querySelector('.projects-container');
    this.projects = {
      title: ['roots', 'mackmedia', 'ammolite', 'grape garage', 'dorfjungs', 'mueller', 'my portfolio'],
      link: ['#', '#', '#', '#', '#', '#', 'https://yossrimhamdi.netlify.com'],
      marqee:
        'javascript animations smooth wordpress tansition parallax react nextjs scrolling smoovy gulp post-css webpack node-js automation github git npm',
    };
    this.generateDOMprojects();
  }

  generateDOMprojects() {
    this.projects.title.forEach((projectTitle, i) => {
      this.projectsContainer.insertAdjacentHTML('beforeend', this.getProjectDOMString(projectTitle, this.projects.link[i]));
    });
  }

  getProjectDOMString(projectTitle, projectLink) {
    this.shuffleMarqee();

    return `
    <div class="project">
      <div class="project__container"> 
        <div class="project__wrapper">
          <h1 class="project__title">${projectTitle}</h1>
          <p class="project__marqee">${this.projects.marqee}</p>
          <p class="project__marqee project__marqee--left-content-support">${this.projects.marqee}</p>
        </div>
        <a href="${projectLink}" target="_blank">
          <div class="project__image-container" data-project-title="${projectTitle.split(' ').join('-')}"></div>
        <a/>
      </div>
    </div>
    `;
  }

  shuffleMarqee() {
    const marqeeArray = this.projects.marqee.split(' ');

    for (let i = 0; i < marqeeArray.length; i++) {
      this.swap(marqeeArray, i, this.getRandomI(marqeeArray.length));
    }

    this.projects.marqee = marqeeArray.join(' ');
  }

  getRandomI(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  }

  swap(marqeeArray, i, j) {
    const temp = marqeeArray[i];
    marqeeArray[i] = marqeeArray[j];
    marqeeArray[j] = temp;
  }
}

export default GenerateProjects;
