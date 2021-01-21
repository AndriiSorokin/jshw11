const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let bodyColor;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startColor = () => {
  bodyColor = setInterval(() => {
    const color = randomIntegerFromInterval(0, colors.length - 1)
    body.style.backgroundColor = colors[color]
  }, 1000)
  startBtn.disabled = true
}

const stopColor = () => {
  clearInterval(bodyColor)
  startBtn.disabled = false
}

startBtn.addEventListener('click', startColor);
stopBtn.addEventListener('click', stopColor)

