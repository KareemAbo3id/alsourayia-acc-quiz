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
const userAllAns = document.getElementsByName('vbtn-radio');

// quiz button
const nextQ = document.querySelector('#nextQ');
// initial index
let CURRUNT_QUESTION_INDEX = 1;

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

      // insert first question:
      readQuizNum.textContent = CURRUNT_QUESTION_INDEX;
      readQuizType.textContent = QUIZ_DATA[CURRUNT_QUESTION_INDEX].type;
      quizTitle.textContent = QUIZ_DATA[CURRUNT_QUESTION_INDEX].q;
      quizAns0.textContent = QUIZ_DATA[CURRUNT_QUESTION_INDEX].a_0;
      userAllAns[0].setAttribute('value', QUIZ_DATA[CURRUNT_QUESTION_INDEX].a_0);
      quizAns1.textContent = QUIZ_DATA[CURRUNT_QUESTION_INDEX].a_1;
      userAllAns[1].setAttribute('value', QUIZ_DATA[CURRUNT_QUESTION_INDEX].a_1);
      quizAns2.textContent = QUIZ_DATA[CURRUNT_QUESTION_INDEX].a_2;
      userAllAns[2].setAttribute('value', QUIZ_DATA[CURRUNT_QUESTION_INDEX].a_2);
      quizAns3.textContent = QUIZ_DATA[CURRUNT_QUESTION_INDEX].a_3;
      userAllAns[3].setAttribute('value', QUIZ_DATA[CURRUNT_QUESTION_INDEX].a_3);

      // Add questions data
      nextQ.addEventListener('click', e => {
        e.preventDefault();

        let ra = QUIZ_DATA[CURRUNT_QUESTION_INDEX].ra;

        checkAnswer(ra);

        CURRUNT_QUESTION_INDEX++;
        getNextQuestion(CURRUNT_QUESTION_INDEX, QUIZ_DATA);
      });
    }
  };

  // get the q:
  req.open('GET', 'https://raw.githubusercontent.com/KareemAbo3id/alsourayia-acc-quiz/master/quiz-data.json', true);
  req.send();
}

getQuizData();

function getNextQuestion(questionIndex, questionData) {
  readQuizNum.textContent = questionIndex;
  readQuizType.textContent = questionData[questionIndex].type;
  quizTitle.textContent = questionData[questionIndex].q;
  quizAns0.textContent = questionData[questionIndex].a_0;
  quizAns1.textContent = questionData[questionIndex].a_1;
  quizAns2.textContent = questionData[questionIndex].a_2;
  quizAns3.textContent = questionData[questionIndex].a_3;
}

function checkAnswer(ra) {
  const userAllAns = document.getElementsByName('vbtn-radio');
  let ua;
  for (let i = 0; i < userAllAns.length; i++) {
    if (userAllAns[i].checked) {
      ua = userAllAns[i].checked.value;
    }
  }
  console.log('right: ' + ra);
  console.log('choose: ' + ua);
}

readUserName.textContent = USERS_ARRAY[USERS_ARRAY.length - 1].name;
readUserId.textContent = USERS_ARRAY[USERS_ARRAY.length - 1].iqama;
readUserPhone.textContent = USERS_ARRAY[USERS_ARRAY.length - 1].phone;
