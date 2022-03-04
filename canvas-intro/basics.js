const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillRect(100, 100, 100, 100);

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(250, 100);
ctx.lineTo(150, 50);
ctx.lineTo(50, 100);
ctx.strokeStyle = "blue";
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

ctx.fillStyle = "green";
ctx.fillRect(50, 100, 50, 100);

ctx.beginPath();
ctx.arc(300, 300, 70, 0, Math.PI * 2, false);
ctx.stroke();

const colors = ["green", "red", "blue", "orange", "pink"];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

for (let j = 0; j < 20; j++) {
  const x = j * 10 + 400;
  const y = Math.random() * canvas.height;
  ctx.beginPath();
  ctx.arc(x, y, 70, 0, Math.PI * 2, false);

  ctx.fillStyle = getRandomColor();
  ctx.strokeStyle = getRandomColor();
  Math.round(Math.random()) ? ctx.stroke() : ctx.fill();
}
