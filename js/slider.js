const sliders = document.querySelectorAll('.slider');

let index = 0;

setInterval(function () {
  sliders[index].classList.add('hidden');
  if (index === sliders.length -1 ) {
    index = 0;
  } else {
    index++;
  }
  sliders[index].classList.remove('hidden');
}, 3000);



