'use strict';

// user data
const sign1Name = document.querySelector('#sign1Name');
const sign2Name = document.querySelector('#sign2Name');
const signIqama = document.querySelector('#signIqama');
const signPhone = document.querySelector('#signPhone');
const signAlert = document.querySelector('#signAlert');
const registSubmit = document.querySelector('#signSubmit');

// EVENT: submit user data
registSubmit.addEventListener('click', e => {
  e.preventDefault();

  if (
    sign1Name.value.length < 1 ||
    sign2Name.value.length < 1 ||
    signIqama.value.length !== 10 ||
    signPhone.value.length !== 10
  ) {
    signAlert.classList.remove('hide');
    signAlert.innerHTML = `
    ${sign1Name.value.length < 1 ? '<span>- الرجاء إدخال الإسم الأول.</span><br>' : ''}
    ${sign2Name.value.length < 1 ? '<span>- الرجاء إدخال الإسم الأخير.</span><br>' : ''}
    ${signIqama.value.length !== 10 ? '<span>- الرجاء التأكد من صحة رقم الهوية/الإقامة.</span><br>' : ''}
    ${signPhone.value.length !== 10 ? '<span>- الرجاء التأكد من صحة رقم الجوال.</span><br>' : ''}
    `;
  } else {
    const signFullName = `${sign1Name.value} ${sign2Name.value}`;
    addNewUser(signFullName, signIqama.value, signPhone.value);
    sign1Name.value = '';
    sign2Name.value = '';
    signIqama.value = '';
    signPhone.value = '';

    setTimeout(() => {
      window.open(`../quiz/accounting-quiz.html`, '_blank');
    }, 100);
  }
});
