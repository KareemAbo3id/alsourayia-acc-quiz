'use strict';

////////////////////////////////////////////////////////
// Empty Array To Store The user Info
let USERS_ARRAY = [];
// Empty Array To Store The user answers
let ANSWERS_ARRAY = [];
////////////////////////////////////////////////////////

// Check if Theres Data In Local Storage
if (localStorage.getItem('USERS_DB')) {
  USERS_ARRAY = JSON.parse(localStorage.getItem('USERS_DB'));
}

// FUNCTION: Add New User To Array Of Users As An Object:
function addNewUser(userName, userId, userPhone) {
  // User schema:
  const USER_SCHEMA = {
    id: '_u' + Date.now(),
    name: userName,
    iqama: userId,
    phone: userPhone,
  };

  USERS_ARRAY.push(USER_SCHEMA); // Push user To USERS_ARRAY
  updateLocalStorage(USERS_ARRAY); // Add users To Local Storage
}

// FUNCTION: Update Local Storage With User Info:
function updateLocalStorage(usersArr) {
  window.localStorage.setItem('USERS_DB', JSON.stringify(usersArr));
}
