import './assets/css/style.scss';
import picture from './assets/images/pic.jpg';
import projects from './lib/projects';

// Picture
(() => {
  document.querySelector('#picture').src = picture;
})();

// Projects
(() => {
  const container = document.querySelector('#projects-container');
  projects.all.forEach((project) => container.append(projects.getDOM(project)));
})();

// Header Scroll
(() => {
  const slide = document.querySelector('#page-header-slide');
  const height = slide.clientHeight;
  let isOpen = false;

  document.addEventListener('scroll', () => {
    if (window.scrollY > height) {
      if (!isOpen) {
        isOpen = true;
        slide.classList.add('bg-open');
      }
    } else if (isOpen) {
      isOpen = false;
      slide.classList.remove('bg-open');
    }
  });
})();

// Drawer
(() => {
  const hamburger = document.querySelector('#hamburger');
  const drawer = document.querySelector('#drawer');
  let open = false;

  hamburger.addEventListener('click', () => {
    if (open) {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
    } else {
      hamburger.classList.add('open');
      drawer.classList.add('open');
    }

    open = !open;
  });
})();
