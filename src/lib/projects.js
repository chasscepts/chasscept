import marked from '../assets/images/marked.jpg';
import handyCommands from '../assets/images/handy-commands.png';
import flights from '../assets/images/flights.jpg';
import chassCorner from '../assets/images/chass-corner.jpg';
import husler from '../assets/images/husler.jpg';
import weatherApp from '../assets/images/weather-app.jpg';

/**
 *
 * @param {String} title project title
 * @param {String} summary a short description of project
 * @param {String} poster project poster image
 * @param {Array<String>} stacks technologies used to build this project
 * @param {Array<{label: string, url: string}>} links external project links
 */
function Project(title, summary, description, poster, stacks, links = []) {
  this.title = title;
  this.summary = summary;
  this.description = description;
  this.poster = poster;
  this.stacks = stacks;
  this.links = links;
}

const detailsPage = (() => {
  const page = document.querySelector('#project-details-page');
  const titleElem = document.querySelector('#project-details-title');
  const stacks = document.querySelector('#project-details-stacks');
  const poster = document.querySelector('#details-poster');
  const description = document.querySelector('#project-description');
  const links = document.querySelector('#details-links');

  setTimeout(() => {
    page.classList.remove('initial');
  }, 100);

  document.querySelector('#details-close-btn').addEventListener('click', () => {
    page.classList.remove('open');
    document.body.classList.remove('details-mode');
  });

  /**
   *
   * @param {Project} project
   */
  const show = (project) => {
    page.classList.add('open');
    document.body.classList.add('details-mode');
    titleElem.textContent = project.title;
    poster.src = project.poster;
    description.textContent = project.description;
    stacks.innerHTML = '';
    project.stacks.forEach((stack) => {
      const span = document.createElement('span');
      span.classList.add('stack');
      span.textContent = stack;
      stacks.append(span);
    });
    links.innerHTML = '';
    if (project.links) {
      project.links.forEach((link) => {
        const a = document.createElement('a');
        a.classList.add('btn', 'btn-secondary');
        a.href = link.url;
        a.textContent = link.label;
        a.target = '_blank';
        links.append(a);
      });
    }
  };

  return {
    show,
  };
})();

const all = [
  new Project(
    'Marked Field',
    'A split view Markdown Editor. The preview is updated in real life as the user changes the markdown.',
    'Markedfield is a Markdown Editor with a split view for editing the markdown and previewing the HTML. The preview automatically updates as the markdown changes. For parsing markdown, Marked Field uses <a href="https://github.com/markedjs/marked" target="_blank">Marked</a>. It is a standalone application that uses Electron for the UI.',
    marked,
    ['JavaScript', 'Electron', 'HTML'],
    [
      { label: 'Github Repo', url: 'https://github.com/chasscepts/markedfield' },
    ],
  ),
  new Project(
    'Handy Commands',
    'A Visual Studio Code extension for organizing frequently used commands.',
    'Handy Commands is a Visual Studio Code extension for organizing commands that we frequently run on the command line. Sometimes we forget that command we want to run, and we will leave our development environment to search for it. That is not productive. With Handy Commands, you organize them into groups of related commands and run them with the click of the mouse. If some part of the command changes from run to run, you can paste and edit it in the terminal. If you no longer frequently use a command, you can delete it. And by organizing them into groups, they will not clutter your workspace. From v0.0.2, Handy Commands automatically imports the scripts defined in package.json and puts them in their group (Npm Scripts). It watches changes to package.json and updates this group as the script changes.',
    handyCommands,
    ['TypeScript', 'VSCode API'],
    [
      { label: 'Github Repo', url: 'https://github.com/chasscepts/handy-commands' },
      { label: 'Market Place', url: 'https://marketplace.visualstudio.com/manage/publishers/chasscepts/extensions/handy-commands/hub' },
    ],
  ),
  new Project(
    'Husler',
    'A game developed on the Phaser 3 Framework.',
    'Husler is a game developed on the Phaser 3 framework. Our hero runs around, collecting Gems before they and he run out of lives. A villain could be hiding in any of the Gems, and there is no way to tell. If he collects the gold coin, he will become rich. But if the villain catches him, he dies.',
    husler,
    ['Phaser 3', 'JavaScript', 'Webpack'],
    [
      { label: 'Github Repo', url: 'https://github.com/chasscepts/husler' },
      { label: 'Live Demo', url: 'https://husler.netlify.app/' },
    ],
  ),
  new Project(
    'Flights',
    'A command-line utility application, written in Ruby and used to curate flight deals from the internet.',
    'Flights is a command-line utility application written in Ruby to scrape the internet for the day or future flight deals. It helps you avoid browsing countless websites for flight information by providing a simple command-line interface that will curate the best deals for you.',
    flights,
    ['Ruby'],
    [
      { label: 'Github Repo', url: 'https://github.com/chasscepts/flights' },
    ],
  ),
  new Project(
    'Chass Corner',
    'An exclusive lifestyle blog where we discuss Family, Sports, Entertainment, and Politics.',
    "Chass corner is a lifestyle blog where we discuss sports, politics, entertainment, family, and just about anything else. As a member of chass corner, You can contribute articles, read articles, and vote for your favorites. Just drop by 'The Corner' anytime, and You will find something there that will interest you.",
    chassCorner,
    ['Rails', 'JavaScript', 'SCSS'],
    [
      { label: 'Github Repo', url: 'https://github.com/chasscepts/chass-corner' },
      { label: 'Live Demo', url: 'https://chass-corner.herokuapp.com/' },
    ],
  ),
  new Project(
    'Weather App',
    'An App to pull and display weather information from the OpenWeatherMap API.',
    'Weather-app is an app to pull and display weather information from the OpenWeatherMap API. A user can search for Weather information by entering a city in the provided field. For quick searches, the App has a button that allows the user to search the information for the current city. The background of the page changes to reflect the current weather information. The design is simple and efficient.',
    weatherApp,
    ['JavaScript', 'Webpack', 'SCSS'],
    [
      { label: 'Github Repo', url: 'https://github.com/chasscepts/weather-app' },
      { label: 'Live Demo', url: 'https://chasscepts.github.io/weather-app/' },
    ],
  ),
];

/**
 *
 * @param {Project} project a project
 */
const getDOM = (project) => {
  const link = document.createElement('a');
  link.classList.add('project-link', 'relative');
  link.href = '#';
  link.innerHTML = `
    <article class="project-card">
      <img class="cover bg project-corner" src="${project.poster}" alt="${project.title}">
      <div class="cover dimmer project-corner"></div>
      <div class="z-normal">
        <header class="mb-15px">
          <h3>${project.title}</h3>
        </header>
        <div class="project-description mb-15px">${project.summary}</div>
        <div class="stacks">
          ${project.stacks.reduce((memo, tech) => `${memo}<span>${tech}</span>`, '')}
        </div>
      </div>
    </article>
  `;

  link.onclick = (e) => {
    e.preventDefault();
    detailsPage.show(project);
  };

  return link;
};

export default {
  all,
  getDOM,
};
