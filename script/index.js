// selectors [MCQ]
const readUserName = document.querySelector('#readUserName');
const readUserId = document.querySelector('#readUserId');
const readUserPhone = document.querySelector('#readUserPhone');
// qs
const readQuizNum = document.querySelector('#readQuizNum');
const readQuizCount = document.querySelector('#readQuizCount');

const readQuizSort = document.querySelector('#readQuizSort');
const quizTitle = document.querySelector('#quizTitle');
const quizAns0 = document.querySelector('#quizAns0');
const quizAns1 = document.querySelector('#quizAns1');
const quizAns2 = document.querySelector('#quizAns2');
const quizAns3 = document.querySelector('#quizAns3');

const nextQ = document.querySelector('#nextQ');

// get questions from api:
function getQ() {
  let req = new XMLHttpRequest();

  // check the response stutes:
  req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200) {
      let qObj = JSON.parse(req.responseText);
      readQuizCount.textContent = qObj.length - 1;

      function getNextQ(qIndex) {
        readQuizNum.textContent = qIndex;

        readQuizSort.textContent = qObj[qIndex].type;
        quizTitle.textContent = qObj[qIndex].q;
        quizAns0.textContent = qObj[qIndex].a_1;
        quizAns1.textContent = qObj[qIndex].a_2;
        quizAns2.textContent = qObj[qIndex].a_3;
        quizAns3.textContent = qObj[qIndex].a_4;
      }

      getNextQ(1);
    }
  };

  // get the q:
  req.open('GET', 'https://raw.githubusercontent.com/KareemAbo3id/alsourayia-acc-quiz/master/q.json', true);
  req.send();
}

getQ();

readUserName.textContent = usersInfoArray[usersInfoArray.length - 1].name;
readUserId.textContent = usersInfoArray[usersInfoArray.length - 1].iqama;
readUserPhone.textContent = usersInfoArray[usersInfoArray.length - 1].phone;
