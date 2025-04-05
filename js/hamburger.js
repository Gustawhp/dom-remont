const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('active');
});

document.querySelectorAll('.navigation li').forEach(index =>
  index.addEventListener('click', () => {
    hamburger.classList.remove('active');
  })
);
