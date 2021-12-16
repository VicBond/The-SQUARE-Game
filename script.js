/* eslint-disable no-undef */
/* eslint-disable func-style */
let $start = document.querySelector('#start');
let $game = document.querySelector('#game');

let score = 0;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);

function startGame() {
  $game.style.backgroundColor = '#fff';
  $start.classList.add('hide');
  score ++;
  renderBox();
}

function handleBoxClick(event) {
  if (event.target.dataset.box) {
    renderBox();
  }
}

function renderBox() {
  $game.innerHTML = '';
  let box = document.createElement('div');
  // console.log(getRandom(30, 100));
  let boxSize = getRandom(30, 100);
  let gameSize = $game.getBoundingClientRect();
  // console.log(gameSize);
  let maxTop = gameSize.height - boxSize;
  let maxLeft = gameSize.width - boxSize;

  box.style.height = box.style.width = `${boxSize}px`;
  box.style.position = 'absolute';
  box.style.backgroundColor = '#000';
  box.style.top = `${getRandom(0, maxTop)}px`;
  box.style.left = `${getRandom(0, maxLeft)}px`;
  box.style.cursor = 'pointer';
  box.setAttribute('data-box', 'true');

  $game.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}