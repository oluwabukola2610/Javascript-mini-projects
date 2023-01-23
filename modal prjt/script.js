'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// for(let i = 0; i < btnShowModal.length; i++){
//     console.log(btnShowModal[i].textContent)
// }

btnShowModal.forEach(function (btn) {
  btn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
