'use strict';

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
