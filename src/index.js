import './sass/main.scss';

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', startChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor() {
        timerId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
    }, 1000);
}
    
function stopChangeColor() {
  clearInterval(timerId);
  refs.body.style.backgroundColor = "";
}

//method #2

// refs.startBtn.addEventListener('click', () => {
//     timerId = setInterval(() => {
//         refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
//     }, 1000);
// });

// refs.stopBtn.addEventListener('click', () => {
//     clearInterval(timerId);
//     refs.body.style.backgroundColor = "";
// });

