// |||Mobile menu
const MEDIA_BREAKPOINT = 768;
const mobileMenuButton = document.querySelector(
  'button.mobile-menu-button',
);
const mobileMenuList = document.querySelectorAll(
  '.mobile-list > li',
);
const mobileMenu = document.querySelector(
  'div.mobile-menu',
);

const cancelMobileMenu = document.querySelector(
  '.mobile-menu .cancel',
);

function showMobileMenu(e) {
  if (
    e.currentTarget.classList.contains('mobile-menu-button')
  ) {
    mobileMenu.style.display = 'flex';
    mobileMenu.style['z-index'] = 2;
  }
}

function hideMobileMenu(e) {
  if (
    e.currentTarget.classList.contains('cancel') ||
    e.currentTarget.parentNode.classList.contains(
      'mobile-list',
    )
  ) {
    mobileMenu.style.display = 'none';
    mobileMenu.style['z-index'] = -2;
  }
}

function hideMobileMenuOnEvent(e) {
  if (mobileMenu.style.display !== 'none') {
    if (e.type === 'resize') {
      if (window.innerWidth > MEDIA_BREAKPOINT) {
        mobileMenu.style.display = 'none';
        mobileMenu.style['z-index'] = -2;
      }
    } else {
      mobileMenu.style.display = 'none';
      mobileMenu.style['z-index'] = -2;
    }
  }
}

mobileMenuButton.addEventListener('click', showMobileMenu);
cancelMobileMenu.addEventListener('click', hideMobileMenu);
mobileMenuList.forEach((node) =>
  node.addEventListener('click', hideMobileMenu),
);
window.addEventListener('scroll', hideMobileMenuOnEvent);
window.addEventListener('resize', hideMobileMenuOnEvent);

// |||Dynamic project details generation
const speakersData = [
  {
    id: 'speaker1',
    name: 'Paul Charles Morphy',
    description1: 'World chess champion 1858',
    description2: 'World Chess Hall of Fame Inducted 2001',
    moreInfoLink:
      'https://worldchesshof.org/chess-hall-of-fame/paul-morphy',
  },
  {
    id: 'speaker2',
    name: 'Tigran Petrosian',
    description1: 'World chess champion 1963',
    description2: 'World Chess Hall of Fame Inducted 2003',
    moreInfoLink:
      'https://worldchesshof.org/hof-inductee/tigran-petrosian',
  },
  {
    id: 'speaker3',
    name: 'Garry Kasparov',
    description1: 'Classical World Chess Champion 1993',
    description2: 'World Chess Hall of Fame Inducted 2005',
    moreInfoLink:
      'https://worldchesshof.org/hof-inductee/garry-kasparov',
  },
  {
    id: 'speaker4',
    name: 'Judit Polgar',
    description1: 'The uncrowned queen of chess',
    description2: 'World Chess Hall of Fame Inducted 2021',
    moreInfoLink:
      'https://worldchesshof.org/hof-inductee/judit-polgar',
  },
  {
    id: 'speaker5',
    name: 'José Raúl Capablanca',
    description1: 'World Chess champion 1927',
    description2: 'World Chess Hall of Fame 2001',
    moreInfoLink:
      'https://worldchesshof.org/chess-hall-of-fame/paul-morphy',
  },
  {
    id: 'speaker6',
    name: 'Mikhail Tal',
    description1: 'World Chess champion 1960',
    description2: 'World Chess Hall of Fame Inducted 2003',
    moreInfoLink:
      'https://worldchesshof.org/hof-inductee/mikhail-tal',
  },
  {
    id: 'speaker7',
    name: 'Robert (Bobby) James Fischer',
    description1: 'World Chess champion 1972',
    description2: 'World Chess Hall of Fame Inducted 2001',
    moreInfoLink:
      'https://worldchesshof.org/hof-inductee/robert-bobby-james-fischer',
  },
  {
    id: 'speaker8',
    name: 'Wilhelm (William) Steinitz',
    description1: 'World Chess champion 1886',
    description2: 'World Chess Hall of Fame Inducted 2001',
    moreInfoLink:
      'https://worldchesshof.org/hof-inductee/wilhelm-william-steinitz',
  },
];

const dynamicSpeakers = document.querySelector(
  '.dynamic-speakers',
);

const loadSpeakers = () => {
  speakersData.forEach((speaker) => {
    let render = `
          <li class="${speaker.id}">
          <div class="profile-photo">
          </div>
          <div class="profile-info">
            <h3 class="name">${speaker.name}</h3>
            <p class="hall-of-fame">${speaker.description1}<br>${speaker.description2}
            </p>
            <hr>
            <a
              href="${speaker.moreInfoLink}">More
              info</a>
          </div>
          </li>`;
    dynamicSpeakers.innerHTML += `\n ${render}`;
  });
};
document.addEventListener('DOMContentLoaded', loadSpeakers);
