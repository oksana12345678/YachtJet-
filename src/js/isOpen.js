document.querySelector('#intro_btn').onclick = function () {
  document.querySelector('#menu').classList.add('is-open');
};
document.querySelector('#close').onclick = function () {
  document.querySelector('#menu').classList.remove('is-open');
};
