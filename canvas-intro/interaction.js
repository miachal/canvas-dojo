const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const mouse = {
  x: 0,
  y: 0,
};

const getDistance = (x1, y1, x2, y2) => {
  const dx = Math.abs(x1 - x2);
  const dy = Math.abs(y1 - y2);
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};

class Circle {
  constructor() {
    this.x = 300;
    this.y = 300;
    this.radius = 40;
    this.dx = 0;
    this.dy = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = "green";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.strokeStyle = "red";
    ctx.stroke();
  }

  update() {
    if (this.distanceToMouse() > 0) {
      mouse.x > this.x ? (this.dx += 0.04) : (this.dx -= 0.04);
      mouse.y > this.y ? (this.dy += 0.04) : (this.dy -= 0.04);
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

  changePosition(x, y) {
    this.x = x;
    this.y = y;
    this.dy = 0;
    this.dx = 0;
  }

  distanceToMouse() {
    return getDistance(this.x, this.y, mouse.x, mouse.y);
  }

  distanceToMouseX() {
    return this.x - mouse.x;
  }

  distanceToMouseY() {
    return this.y - mouse.y;
  }
}

const magicCircle = new Circle();

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
window.addEventListener("mousedown", (e) =>
  magicCircle.changePosition(e.x, e.y)
);

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillText(`X: ${mouse.x}`, 40, 40, 400);
  ctx.fillText(`Y: ${mouse.y}`, 40, 60, 400);
  ctx.fillText(`Distance: ${magicCircle.distanceToMouse()}`, 40, 80, 400);
  ctx.fillText(
    `DistanceX: ${magicCircle.distanceToMouseX()} (${Math.abs(
      magicCircle.distanceToMouseX()
    )})`,
    40,
    100,
    400
  );
  ctx.fillText(`DistanceY: ${magicCircle.distanceToMouseY()}`, 40, 120, 400);

  magicCircle.update();
};

animate();
