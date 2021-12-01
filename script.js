'use strict';

const movements = [400, 500, 200, -300, -200, 1000, -200, 500];

const user = {
  name: 'Austin',
  username: 'at',
  pin: 1012,
  // movements: [400, 500, 200, -300, -200, 1200, -500, 900],
};

const allMovements = user.movements;

const button = document.getElementById('button');
const logout = document.getElementById('logout');
const sort = document.getElementById('sort');
const movementsEl = document.getElementById('movements');
const userEl = document.getElementById('user');
const pinEl = document.getElementById('pin');

// add logout button when loggedin
const updateLoginUI = function () {
  logout.style.opacity = 100;
  sort.style.opacity = 100;
};

// function to display all transacations
const displayMovements = function () {
  const movementsHeading = `<h2 class="movements-header" id="movement-title">Movements<h2>`;
  movementsEl.insertAdjacentHTML('beforebegin', movementsHeading);
  movements.forEach(movement => {
    const html = `	
			<li>${movement}</li>
		`;
    movementsEl.insertAdjacentHTML('afterbegin', html);
  });
};

const sortMovements = function (movements) {
  const sortedMovements = movements.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
  displayMovements(sortedMovements);
};

// function to verify user credentials
const verifyUser = function () {
  if (userEl.value === user.username && Number(pinEl.value) === user.pin) {
    // clear inputs
    userEl.value = '';
    pinEl.value = '';
    userEl.blur();
    pinEl.blur();
  } else {
    alert('Error logging in. Please try again');
  }
};

// function to logout user
const logoutUser = function () {
  document.getElementById('movement-title').innerHTML = '';
  movementsEl.textContent = '';
  logout.style.opacity = 0;
  sort.style.opacity = 0;
};

// verifyuser and login on button click
button.addEventListener('click', function () {
  verifyUser();
  displayMovements();
  updateLoginUI();
  // logout on button click
  logout.addEventListener('click', function () {
    logoutUser();
  });
  sort.addEventListener('click', function () {
    sortMovements(movements);
  });
});
