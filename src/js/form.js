const form = document.querySelector('#form');
const launchBtn = document.querySelector('#launch-btn');
const userEmailField = document.querySelector('#user-email');

function clearFormFields() {
  const fieldName = form.querySelector('input[type="text"]');
  const fieldEmail = form.querySelector('input[type="email"]');
  const fieldTel = form.querySelector('input[type="tel"]');

  fieldName.value = '';
  fieldEmail.value = '';
  fieldTel.value = '';
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);

  launchBtn.setAttribute('disabled', true);
  launchBtn.style.opacity = '0.7';

  var form = document.querySelector('#form');
  form.reset();
});
