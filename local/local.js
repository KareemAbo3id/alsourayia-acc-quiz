'use strict';

// Empty Array To Store The user Info
let usersInfoArray = [];

// Empty Array To Store The user answers
let userAnsArray = [];

// Check if Theres Data In Local Storage
if (localStorage.getItem('users')) {
  usersInfoArray = JSON.parse(localStorage.getItem('users'));
}

// FUNCTION: Add New User To Array Of Users As An Object:
function addNewUser(userName, userId, userPhone) {
  // User schema:
  const userModel = {
    id: 'u' + Date.now(),
    name: userName,
    iqama: userId,
    phone: userPhone,
  };
  // Push user To Array Of users
  usersInfoArray.push(userModel);

  // Add users To Local Storage
  updateLocalStorage(usersInfoArray);
}

// FUNCTION: Update Local Storage With User Info:
function updateLocalStorage(usersInfoArray) {
  window.localStorage.setItem('users', JSON.stringify(usersInfoArray));
}
