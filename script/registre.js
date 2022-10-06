const registrer1Name = document.querySelector('#registrer1Name');
const registrer2Name = document.querySelector('#registrer2Name');
const registrerIqama = document.querySelector('#registrerIqama');
const registrerPhone = document.querySelector('#registrerPhone');
const registrerAlert = document.querySelector('#registrerAlert');
const registSubmit = document.querySelector('#registSubmit');

registSubmit.addEventListener('click', e => {
  e.preventDefault();

  if (
    registrer1Name.value.length < 1 ||
    registrer2Name.value.length < 1 ||
    registrerIqama.value.length !== 10 ||
    registrerPhone.value.length !== 10
  ) {
    registrerAlert.classList.remove('hide');
    registrerAlert.innerHTML = `
    ${registrer1Name.value.length < 1 ? '<span>- الرجاء إدخال الإسم الأول.</span><br>' : ''}
    ${registrer2Name.value.length < 1 ? '<span>- الرجاء إدخال الإسم الأخير.</span><br>' : ''}
    ${registrerIqama.value.length !== 10 ? '<span>- الرجاء التأكد من صحة رقم الهوية/الإقامة.</span><br>' : ''}
    ${registrerPhone.value.length !== 10 ? '<span>- الرجاء التأكد من صحة رقم الجوال.</span><br>' : ''}
    `;
  } else {
    const registrerFullName = `${registrer1Name.value} ${registrer2Name.value}`;
    addNewUser(registrerFullName, registrerIqama.value, registrerPhone.value);
    registrer1Name.value = '';
    registrer2Name.value = '';
    registrerIqama.value = '';
    registrerPhone.value = '';

    setTimeout(() => {
      window.open(`../quiz/MCQ.html`, '_blank');
    }, 100);
  }
});
