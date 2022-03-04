const canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = (Math.random() - 0.5) * 5;
    this.dy = (Math.random() - 0.5) * 5;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0)
      this.dx = -this.dx;
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0)
      this.dy = -this.dy;

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

const circles = [];
for (let j = 0; j < 100; j++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 50;
  circles.push(new Circle(x, y, radius));
}

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach((circle) => circle.update());
};

animate();
