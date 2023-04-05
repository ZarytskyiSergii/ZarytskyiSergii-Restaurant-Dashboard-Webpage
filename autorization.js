


/************************************************* */
const loginForm = document.querySelector('.form-modal');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const managerName = document.querySelector('.header__manager-name');
const backdrop = document.querySelector('.backdrop');


// check if user data is stored in localStorage
const storedUsername = localStorage.getItem('username');
if (storedUsername) {
  // set the Manager Name to the stored username
  managerName.textContent = 'Welcome, ' + storedUsername + '!';
  // hide the backdrop
  backdrop.classList.add('is-hidden');
}

const loginButton = document.querySelector('.form-modal__button-submit');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // check if both fields are filled
  if (usernameInput.value && passwordInput.value) {
    // set the Manager Name to the input username
    managerName.textContent = 'Welcome, ' + usernameInput.value + '!';

    // save the username in localStorage
    localStorage.setItem('username', usernameInput.value);

    // hide the backdrop
    backdrop.classList.add('is-hidden');

    // clear the input fields
    usernameInput.value = '';
    passwordInput.value = '';
  } else {
    alert('Please fill in both fields.');
  }
});

// clear the stored user data when the tab is closed
// window.addEventListener('beforeunload', () => {
//   localStorage.removeItem('username');
 
// });





