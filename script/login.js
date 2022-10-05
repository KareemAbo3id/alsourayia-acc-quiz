'use strict';

const userform = document.querySelector('#userform');
const typeusername = document.querySelector('#typeusername');
const typeuserpass = document.querySelector('#typeuserpass');
const typeusersubmit = document.querySelector('#typeusersubmit');

function getQ() {
  let req = new XMLHttpRequest();
  // check the response stutes:
  req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200) {
      let qObj = JSON.parse(req.responseText);
      const DB_USERNAME = qObj[0].admin;
      const DB_PASSWORD = qObj[0].pass;
      typeusername.value = DB_USERNAME;
      userform.addEventListener('submit', e => {
        e.preventDefault();

        if (typeuserpass.value === DB_PASSWORD) {
          window.location.replace('/users/registre.html');
          typeuserpass.value = '';
        }
      });
    }
  };
  // get the q:
  req.open('GET', 'https://raw.githubusercontent.com/KareemAbo3id/alsourayia-acc-quiz/master/q.json', true);
  req.send();
}

getQ();
