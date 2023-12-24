import { isMobile } from './helpers/isMobile';
import { classListHelper } from './helpers/classListHelper';

const MENU_ID = '#menu';
const INTRO_BTN_ID = '#intro_btn';
const CLOSE_ID = '#close';

const LOCK_CLASS = '_lock';
const IS_OPEN_CLASS = 'is-open';
const MOBILE_MENU_LIST_CLASS = 'mobile-menu-list';
const NAVIGATION_CLASS = 'navigation';

const iconMenu = document.querySelector(INTRO_BTN_ID);
const menuBody = document.querySelector(MENU_ID);

if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    const iconActions = [
      {
        el: document.body,
        cls: LOCK_CLASS,
        act: 'toggle',
      },
      {
        el: iconMenu,
        cls: IS_OPEN_CLASS,
        act: 'toggle',
      },
      {
        el: menuBody,
        cls: IS_OPEN_CLASS,
        act: 'toggle',
      },
    ];

    iconActions.forEach(item => {
      classListHelper(item);
    });
  });
}

document.querySelector(CLOSE_ID).onclick = function () {
  const menu = document.querySelector(MENU_ID);
  classListHelper({
    el: menu,
    cls: IS_OPEN_CLASS,
    act: 'remove',
  });
};

const navClass = isMobile() ? MOBILE_MENU_LIST_CLASS : NAVIGATION_CLASS;
const nav = document.querySelector(`.${navClass}`);

if (nav) {
  nav.addEventListener('click', e => {
    e.preventDefault();
    const {
      target,
      target: { href, localName, dataset: { goto = null } = {} } = {},
    } = e;
    switch (localName) {
      case 'li':
        const {
          href: linkHref = null,
          dataset: { goto: linkGoto = null } = {},
        } = target.querySelector('a');
        const liAnchor = linkHref ? linkHref.split('/').pop() : linkGoto;
        if (liAnchor) onMenuLinkClick(liAnchor);
        break;
      case 'a':
        const aAnchor = href ? href.split('/').pop() : goto;
        if (aAnchor) onMenuLinkClick(aAnchor);
        break;
      default:
        break;
    }
  });
}

function onMenuLinkClick(goto) {
  if (document.querySelector(goto)) {
    const gotoBlock = document.querySelector(goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

    if (menuBody.classList.contains(IS_OPEN_CLASS)) {
      const menuBodyAction = [
        {
          el: document.body,
          cls: LOCK_CLASS,
          act: 'remove',
        },
        {
          el: iconMenu,
          cls: IS_OPEN_CLASS,
          act: 'remove',
        },
        {
          el: menuBody,
          cls: IS_OPEN_CLASS,
          act: 'remove',
        },
      ];
      menuBodyAction.forEach(item => {
        classListHelper(item);
      });
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
  }
}
