'use strict';

const userform = document.querySelector('#userform');
const typeusername = document.querySelector('#typeusername');
const typeuserpass = document.querySelector('#typeuserpass');
const typeusersubmit = document.querySelector('#typeusersubmit');
const logAlert = document.querySelector('#logAlert');

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
          window.location.replace(`../users/registre.html`);
          typeuserpass.value = '';
        } else {
          logAlert.classList.remove('hide');
          logAlert.innerHTML = '<span>كلمة المرور غير صحيحة</span><br>';
        }
      });
    }
  };
  // get the q:
  req.open('GET', 'https://raw.githubusercontent.com/KareemAbo3id/alsourayia-acc-quiz/master/q.json', true);
  req.send();
}

getQ();
