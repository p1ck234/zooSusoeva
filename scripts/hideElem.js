const container = document.querySelector('.reviews__items_container');
const button = document.querySelector('.button__light-revs');
container.style.overflow = 'hidden';

if (this.window.screen.width <= 480) {
  container.style.height = '2975px';
} else if (window.screen.width <= 1080) {
  container.style.height = '1370px';
} else {
  container.style.height = '1200px';
}

window.addEventListener('resize', function () {
  if (this.window.screen.width <= 480) {
    container.style.height = '2975px';
  } else if (window.screen.width <= 1080) {
    container.style.height = '1370px';
  } else {
    container.style.height = '1200px';
  }

});




button.addEventListener('click', function () {
  if (container.style.height === '1200px') {
    container.style.height = '2112px';
    container.classList.add('no-gradient');
    button.style.display = 'none';

  } else if (container.style.height === '1370px') {
    container.style.height = '100%';
    container.classList.add('no-gradient');
    button.style.display = 'none';
  } else if (container.style.height === '2975px') {
    container.style.height = '100%';
    container.classList.add('no-gradient');
    button.style.display = 'none';
  }
  else {
    container.style.height = '1000px';
    button.style.display = 'block';
    container.classList.remove('no-gradient');
  }
});