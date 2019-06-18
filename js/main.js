document.addEventListener('DOMContentLoaded', function(){
  signInBtn = document.querySelector('.signin');
  closeBtn = document.querySelector('.close');
  modal = document.querySelector('.modal');

  // When the user presses the .signin button, display the modal window
  signInBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  })

  // When the user presses the .close button, hide the modal window
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  })


});