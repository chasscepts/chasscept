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
 */
function Project(title, summary, poster, stacks) {
  this.title = title;
  this.summary = summary;
  this.poster = poster;
  this.stacks = stacks;
}

const all = [
  new Project(
    'Marked Field',
    'A Markdown Editor. It uses Electron for graphical User Interface.',
    marked,
    ['JavaScript', 'Electron', 'HTML'],
  ),
  new Project(
    'Handy Commands',
    'A Visual Studio Extension for organising frequently used command line commands.',
    handyCommands,
    ['TypeScript', 'VSCode API'],
  ),
  new Project(
    'Husler',
    'A game developed on the Phaser 3 Framework.',
    husler,
    ['Phaser 3', 'JavaScript', 'Webpack'],
  ),
  new Project(
    'Flights',
    'A command-line utility written in Ruby to scrape the internet for the day or future flight deals.',
    flights,
    ['Ruby'],
  ),
  new Project(
    'Chass Corner',
    'A Lifestyle Blog where we discuss Family, Sports, Entertainment and Politics.',
    chassCorner,
    ['Rails', 'JavaScript', 'SCSS'],
  ),
  new Project(
    'Weather App',
    'An App to retrieve and display weather information from the OpenWeatherMap API.',
    weatherApp,
    ['JavaScript', 'Webpack', 'SCSS'],
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
      <div class="cover dim dark project-corner"></div>
      <div class="z-normal">
        <header class="mb-15px">
          <h3>${project.title}</h3>
        </header>
        <div class="project-description mb-15px">${project.summary}</div>
        <div class="stack">
          ${project.stacks.reduce((memo, tech) => `${memo}<span>${tech}</span>`, '')}
        </div>
      </div>
    </article>
  `;
  return link;
};

export default {
  all,
  getDOM,
};
