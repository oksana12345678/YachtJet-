const iconMenu = document.querySelector('#intro_btn');
const menuBody = document.querySelector('#menu');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('is-open');
    menuBody.classList.toggle('is-open');
  });
}
document.querySelector('#close').onclick = function () {
  document.querySelector('#menu').classList.remove('is-open');
};

const menuLincks = document.querySelectorAll('.mobile-menu-link[data-goto]');
if (menuLincks.length > 0) {
  menuLincks.forEach(menuLincks => {
    menuLincks.addEventListener('click', onMenuLinkClick);
  });
}

function onMenuLinkClick(e) {
  const menuLincks = e.target;
  if (
    menuLincks.dataset.goto &&
    document.querySelector(menuLincks.dataset.goto)
  ) {
    const gotoBlock = document.querySelector(menuLincks.dataset.goto);

    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector('header').offsetHeight;

    if (menuBody.classList.contains('is-open')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('is-open');
      menuBody.classList.remove('is-open');
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
}
