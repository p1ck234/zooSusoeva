// const container = document.querySelector('.reviews__items_container');
// const button = document.querySelector('.button__light-revs');


// container.style.height = '1200px';
// container.style.overflow = 'hidden';

// button.addEventListener('click', function() {
//   if (container.style.height === '1200px') {
//     container.style.height = '2112px'; 
//     container.classList.add('no-gradient');
//     button.style.display = 'none'; 

//   } else {
//     container.style.height = '1000px'; 
//     button.style.display = 'block'; 
//     container.classList.remove('no-gradient');
//   }
// });
const reviewsContainer = document.querySelector('.hero__reviews');
const reviewsElements = reviewsContainer.querySelectorAll('.reviews__item');
hideElement();

window.addEventListener('resize', function (e) {
  hideElement();
}, true);

function hideElement() {
  let lastEl = reviewsElements[reviewsElements.length - 1];
  if (window.screen.width <= 1080) {
    lastEl.style.display = 'none';
    lastEl.previousElementSibling.style.borderRight = '3px solid #FFB700';
  } else {
    lastEl.style.display = 'block';
    lastEl.previousElementSibling.style.borderRight = 'none';
  }
}
