const thumbs = document.querySelectorAll('.thumbs img');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popupClose');
const popupImg = document.querySelector('.popupImg');
const arrowLeft = document.querySelector('.popupArrowLeft');
const ArrowRight = document.querySelector('.popupArrowRight');

let currentImgIndex;

thumbs.forEach((thumbs, index) => {
  thumbs.addEventListener('click', e => {
    popup.classList.remove('hidden');
    popupImg.src = e.target.src;
    currentImgIndex = index;
  });
});

popupClose.addEventListener('click', () => {
  popup.classList.add('hidden');
});

ArrowRight.addEventListener('click', () => {
  if (currentImgIndex === thumbs.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  popupImg.src = thumbs[currentImgIndex].src;
});

arrowLeft.addEventListener('click', () => {
  if (currentImgIndex === 0) {
    currentImgIndex = thumbs.length - 1;
  } else {
    currentImgIndex--;
  }
  popupImg.src = thumbs[currentImgIndex].src;
});
