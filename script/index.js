// selectors [MCQ]
const readUserName = document.querySelector('#readUserName');
const readUserId = document.querySelector('#readUserId');
const readUserPhone = document.querySelector('#readUserPhone');

// get questions from api:
function getQ() {
  let req = new XMLHttpRequest();

  // check the response stutes:
  req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200) {
      let qObj = JSON.parse(req.responseText);
    }
  };

  // get the q:
  req.open('GET', 'https://raw.githubusercontent.com/KareemAbo3id/alsourayia-acc-quiz/master/q.json', true);
  req.send();
}

readUserName.textContent = usersInfoArray[usersInfoArray.length - 1].name;
readUserId.textContent = usersInfoArray[usersInfoArray.length - 1].iqama;
readUserPhone.textContent = usersInfoArray[usersInfoArray.length - 1].phone;
