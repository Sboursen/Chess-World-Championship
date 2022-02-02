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
