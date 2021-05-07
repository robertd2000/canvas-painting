const canvas = document.querySelector('#canvas'),
  widthOfLineInputField = document.querySelector('#width'),
  colorInput = document.querySelector('#color'),
  save = document.querySelector('.save'),
  clear = document.querySelector('#clear');

let widthOfLine = widthOfLineInputField.value;
let color = colorInput.value;
let isDraw = false;
let ctx = canvas.getContext('2d');

const mouseMove = (e) => {
  if (isDraw) {
    // let x = e.offsetX;
    // let y = e.offsetY;
    let x = e.pageX - canvas.offsetLeft;
    let y = e.pageY - canvas.offsetTop;
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  ctx.fillStyle = color;
  //   ctx.fillRect(x, y, widthOfLine, widthOfLine);
};

const start = (e) => {
  isDraw = true;
  ctx.beginPath();
  ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
};

const stop = () => {
  isDraw = false;
};

const download_img = (el) => {
  var image = canvas.toDataURL('image/jpg');
  el.href = image;
};

clear.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// save.addEventListener('click', () => download_img(this));

colorInput.addEventListener('change', (e) => {
  color = e.target.value;
  ctx.strokeStyle = color;
});

widthOfLineInputField.addEventListener('change', (e) => {
  widthOfLine = e.target.value;
  ctx.lineWidth = widthOfLine;
});

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', stop);
canvas.addEventListener('mousemove', mouseMove);
