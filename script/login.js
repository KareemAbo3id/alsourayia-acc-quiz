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
      console.log(qObj);
    }
  };
  // get the q:
  req.open('GET', 'https://raw.githubusercontent.com/KareemAbo3id/alsourayia-acc-quiz/master/q.json', true);
  req.send();
}

getQ();

typeusername.addEventListener('keyup', () => {
  if (typeusername.value === '') {
    typeusername.classList.remove('is-valid');
    typeusername.classList.add('is-invalid');
  } else {
    typeusername.classList.add('is-valid');
    typeusername.classList.remove('is-invalid');
  }
});

typeuserpass.addEventListener('keyup', () => {
  if (typeuserpass.value === '') {
    typeuserpass.classList.remove('is-valid');
    typeuserpass.classList.add('is-invalid');
  } else {
    typeuserpass.classList.add('is-valid');
    typeuserpass.classList.remove('is-invalid');
  }
});

userform.addEventListener('submit', e => {
  e.preventDefault();

  if (typeusername.value === '' || typeuserpass.value === '') {
    typeusername.focus();
  }
  if (!typeusername.value === '') {
    typeusername.classList.toggle('is-valid');
    typeusername.classList.remove('is-invalid');
  }

  if (typeuserpass.value === '') {
    typeuserpass.classList.remove('is-valid');
    typeuserpass.classList.add('is-invalid');
  } else {
    typeuserpass.classList.add('is-valid');
    typeuserpass.classList.remove('is-invalid');
  }
});
