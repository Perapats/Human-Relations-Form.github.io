const form = document.getElementById('surveyForm');
const popup = document.getElementById('thankyouPopup');

form.addEventListener('submit', function(e) {

  popup.style.display = 'flex';

  setTimeout(() => {
    form.submit();
  }, 100);
});
