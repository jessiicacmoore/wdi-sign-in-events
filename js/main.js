document.addEventListener('DOMContentLoaded', function(){
  const signInBtn = document.querySelector('.signin');
  const closeBtn = document.querySelector('.close');
  const submitBtn = document.querySelector('.submit');
  const modal = document.querySelector('.modal');
  const inputs = document.querySelectorAll('input');

  // When the user presses the .signin button, display the modal window
  signInBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // When the user presses the .close button, hide the modal window
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // When the user presses the .submit button, add an .error class to both input elements
  submitBtn.addEventListener('click', () => {
    inputs.forEach(input => {
      input.classList.add('error');
    })
  });
});