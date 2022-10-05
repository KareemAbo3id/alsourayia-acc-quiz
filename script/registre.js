const registrerName = document.querySelector('#registrerName');
const registrerIqama = document.querySelector('#registrerIqama');
const registrerPhone = document.querySelector('#registrerPhone');
const registrerAlert = document.querySelector('#registrerAlert');
const registSubmit = document.querySelector('#registSubmit');

registSubmit.addEventListener('click', e => {
  e.preventDefault();

  if (registrerName.value.length < 1 || registrerIqama.value.length !== 10 || registrerPhone.value.length !== 10) {
    registrerAlert.classList.remove('hide');
    registrerAlert.innerHTML = `
    ${registrerName.value.length < 1 ? '<span>- الرجاء إدخال الإسم.</span><br>' : ''}
    ${registrerIqama.value.length !== 10 ? '<span>- الرجاء التأكد من صحة رقم الهوية/الإقامة.</span><br>' : ''}
    ${registrerPhone.value.length !== 10 ? '<span>- الرجاء التأكد من صحة رقم الجوال.</span><br>' : ''}
    `;
  } else {
    addNewUser(registrerName.value, registrerIqama.value, registrerPhone.value);
    registrerName.value = '';
    registrerIqama.value = '';
    registrerPhone.value = '';

    setTimeout(() => {
      window.open(`../quiz/MCQ.html`, '_blank');
    }, 1000);
  }
});
