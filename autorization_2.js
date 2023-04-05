const managerName = document.querySelector('.header__manager-name');

// check if user data is stored in localStorage
const storedUsername = localStorage.getItem('username');
if (storedUsername) {
  // set the Manager Name to the stored username
  managerName.textContent = 'Welcome, ' + storedUsername + '!';
}