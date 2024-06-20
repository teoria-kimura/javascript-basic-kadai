const btnClick = document.getElementById('btn');
const textH = document.getElementById('text');
btnClick.addEventListener('click', () => {
  textH.textContent = 'ボタンをクリックしました';
})