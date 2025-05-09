const click = document.querySelector('.click');
const giftBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const text = document.querySelector('.text');
const button = document.getElementById('text');
button.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'rose/index.html';
  }, 1000);
});

click.addEventListener('click', () => {
  if (click.className === 'click') {
    click.classList.add('active');
    giftBox.classList.add('active');
    shadow.classList.add('active');
    giftContainer.classList.add('active');
    text.classList.add('active');
    text.classList.remove('active2');
    text.classList.add('active3');
  } else {
    click.classList.remove('active');
    giftBox.classList.remove('active');
    shadow.classList.remove('active');
    giftContainer.classList.remove('active');
    text.classList.remove('active');
    text.classList.add('active2');
    text.classList.remove('active3');
  }
});
