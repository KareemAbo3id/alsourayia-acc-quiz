'use strict';

// login data
const USERNAME = document.querySelector('#typeusername');
const USERPASS = document.querySelector('#typeuserpass');
const USERSUBMIT = document.querySelector('#typeusersubmit');
const userform = document.querySelector('#userform');
const logAlert = document.querySelector('#logAlert');

// FUNCTION: get JSON data
function getQuizData() {
  let req = new XMLHttpRequest();
  // check the response stutes:
  req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200) {
      let QUIZ_DATA_OBJECT = JSON.parse(req.responseText);
      // get the user/pass
      const DB_USERNAME = QUIZ_DATA_OBJECT[0].admin;
      const DB_PASSWORD = QUIZ_DATA_OBJECT[0].pass;
      USERNAME.value = DB_USERNAME;

      // submit login data to begin test
      userform.addEventListener('submit', e => {
        e.preventDefault();

        if (USERPASS.value === DB_PASSWORD) {
          window.location.replace(`../users/signup.html`); // go to signup page
          USERPASS.value = '';
        } else {
          logAlert.classList.remove('hide');
          logAlert.innerHTML = '<span>كلمة المرور غير صحيحة</span><br>';
        }
      });
    }
  };
  // get the response:
  req.open('GET', 'https://raw.githubusercontent.com/KareemAbo3id/alsourayia-acc-quiz/master/q.json', true);
  req.send();
}

getQuizData();
