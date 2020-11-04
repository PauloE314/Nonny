const username = document.getElementById('username');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit');
const form = document.getElementById('login-form');

window.addEventListener('load', () => {
  handleFormChange(['username', 'password'], {
    onValid: () => submitButton.classList.remove('disabled'),
    onNotValid: () => submitButton.classList.add('disabled'),
  })
})