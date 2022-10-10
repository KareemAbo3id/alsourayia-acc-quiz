// signup data
const readUserName = document.querySelector('#readUserName');
const readUserId = document.querySelector('#readUserId');
const readUserPhone = document.querySelector('#readUserPhone');
// quiz data
const quizQuantity = document.querySelector('#readQuizCount');
const readQuizNum = document.querySelector('#readQuizNum');
const readQuizType = document.querySelector('#readQuizSort');
const quizTitle = document.querySelector('#quizTitle');
const quizAns0 = document.querySelector('#quizAns0');
const quizAns1 = document.querySelector('#quizAns1');
const quizAns2 = document.querySelector('#quizAns2');
const quizAns3 = document.querySelector('#quizAns3');
// quiz button
const nextQ = document.querySelector('#nextQ');
// initial index
const CURRUNT_QUESTION_INDEX = 1;

// FUNCTION: get Quiz Data From JSON:
function getQuizData() {
  let req = new XMLHttpRequest();

  // check the response stutes:
  req.onreadystatechange = () => {
    if (req.readyState == 4 && req.status == 200) {
      let QUIZ_DATA = JSON.parse(req.responseText);
      const QUESTIONS_QUANTITY = QUIZ_DATA.length - 1;

      // Read all questions count
      quizQuantity.textContent = QUESTIONS_QUANTITY;

      // Add questions data
      getNextQuestion(
        CURRUNT_QUESTION_INDEX,
        QUIZ_DATA[CURRUNT_QUESTION_INDEX],
        QUIZ_DATA[CURRUNT_QUESTION_INDEX].type
      );
    }
  };

  // get the q:
  req.open('GET', 'https://raw.githubusercontent.com/KareemAbo3id/alsourayia-acc-quiz/master/q.json', true);
  req.send();
}

getQuizData();

function getNextQuestion(questionIndex, questionData, questionType) {
  console.log(questionIndex);
  console.log(questionType);
  console.log(questionData.q);
  console.log(questionData.a_0);
  console.log(questionData.a_1);
  console.log(questionData.a_2);
  console.log(questionData.a_3);
}

readUserName.textContent = USERS_ARRAY[USERS_ARRAY.length - 1].name;
readUserId.textContent = USERS_ARRAY[USERS_ARRAY.length - 1].iqama;
readUserPhone.textContent = USERS_ARRAY[USERS_ARRAY.length - 1].phone;
