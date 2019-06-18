document.addEventListener('DOMContentLoaded', function(){
  signInBtn = document.querySelector('.signin');
  modal = document.querySelector('.modal');

  signInBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  })
});