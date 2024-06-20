const clickBtn = document.getElementById('btn');
const newText = document.getElementById('text');

clickBtn.addEventListener('click', () => {
  setTimeout( () => {
    newText.textContent = 'ボタンをクリックしました';
  },2000);
})