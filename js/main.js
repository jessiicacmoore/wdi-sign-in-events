document.addEventListener('DOMContentLoaded', function(){
  const signInBtn = document.querySelector('.signin');
  const closeBtn = document.querySelector('.close');
  const submitBtn = document.querySelector('.submit');
  const modal = document.querySelector('.modal');
  const signInForm = document.querySelector('.getstarted')
  const inputs = document.querySelectorAll('input');

  // When the user presses the .signin button, display the modal window
  signInBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // When the user presses the .close button, hide the modal window
  closeBtn.addEventListener('click', (e) => {
    modal.style.display = 'none';
    e.stopPropagation();
  });

  // When the user presses the .submit button, add an .error class to both input elements
  submitBtn.addEventListener('click', (e) => {
    inputs.forEach(input => {
      input.classList.add('error');
    });
    e.stopPropagation();
  });

  // When the user puts their cursor in one of the input fields, remove the .error class
  inputs.forEach(input => input.addEventListener('focus', () => {
    if (input.classList.contains('error')) {
      input.classList.remove('error');
    };
  }));  

  // (Bonus) Allow the user to click the .modal to close itself
  modal.addEventListener('click', (e) => {
    if (!(e.target.form)) {
      modal.style.display = 'none';
    };
  });

});