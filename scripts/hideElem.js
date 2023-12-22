const container = document.querySelector('.reviews__items_container');
const button = document.querySelector('.button__light-revs');


container.style.height = '1200px';
container.style.overflow = 'hidden';

button.addEventListener('click', function() {
  if (container.style.height === '1200px') {
    container.style.height = '2112px'; 
    container.classList.add('no-gradient');
    button.style.display = 'none'; 

  } else {
    container.style.height = '1000px'; 
    button.style.display = 'block'; 
    container.classList.remove('no-gradient');
  }
});
