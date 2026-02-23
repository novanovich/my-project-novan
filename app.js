const trigger = document.getElementById("trigger");
const subtitle = document.getElementById("subtitle");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class HeartParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 4;
    this.speedY = Math.random() * 1 + 0.5;
    this.opacity = 1;
  }

  update() {
    this.y -= this.speedY;
    this.opacity -= 0.01;
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = "#ff4d6d";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

let particles = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.opacity <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();

trigger.addEventListener("click", () => {
  subtitle.textContent =
    "I don't just love you. I choose you. Every single day.";

  for (let i = 0; i < 60; i++) {
    particles.push(
      new HeartParticle(
        Math.random() * canvas.width,
        canvas.height
      )
    );
  }
});
