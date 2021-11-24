'use strict';

const movements = [400, 500, 200, -300, -200, 1000, -200, 500];

const user = {
  name: 'Austin',
  username: 'at',
  pin: 1012,
  movements: [400, 500, 200, -300, -200, 1200, -500, 900],
};

const button = document.getElementById('button');
const logout = document.getElementById('logout');
const movementsEl = document.getElementById('movements');
const userEl = document.getElementById('user');
const pinEl = document.getElementById('pin');

// change ui on login
const updateLoginUI = function () {
  logout.style.opacity = 100;
};

const displayMovements = function () {
  const movementsHeading = `<h2 class="movements-header">Movements<h2>`;
  movementsEl.insertAdjacentHTML('beforebegin', movementsHeading);
  movements.forEach(movement => {
    const html = `	
			<li>${movement}</li>
		`;
    movementsEl.insertAdjacentHTML('afterbegin', html);
  });

  updateLoginUI();
};

const verifyUser = function () {
  if (userEl.value === user.username && Number(pinEl.value) === user.pin) {
    // clear inputs
    userEl.value = '';
    pinEl.value = '';
    userEl.blur();
    pinEl.blur();
    displayMovements();
  } else {
    alert('Error logging in. Please try again');
  }
};

const logoutUser = function () {
  movementsEl.innerHTML = '';
  logout.style.opacity = 0;
  console.log('Logged out');
};

// verifyuser and login on button click
button.addEventListener('click', function () {
  verifyUser();
  // logout on button click
  logout.addEventListener('click', function () {
    logoutUser();
  });
});
