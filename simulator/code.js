'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const checkbox = document.getElementById('grid');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wp = 600;
const hp = 400;
const xp = (canvas.width / 2) - (wp / 2);
const yp = (canvas.height / 2) - (hp / 2);

const bg = {
  linelength: 40,
  draw() {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'green';
    ctx.fillRect(xp, yp, wp, hp);
    ctx.fillStyle = 'darkgreen';
    for (let i = 0; i < wp; i += 80) {
      ctx.fillRect(xp + i, yp, this.linelength, hp);
    }
  }
};

const lines = {
  draw() {
    ctx.fillStyle = 'white';
    ctx.arc(canvas.width / 2, canvas.height / 2, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI * 2);
    ctx.moveTo(canvas.width / 2, yp);
    ctx.lineTo(canvas.width / 2, yp + hp);
    ctx.rect(xp, yp, wp, hp);
    ctx.closePath();
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
};

const penaltyAreas = {
  xpa1: xp,
  ypa1: canvas.height / 2 - 110,
  xpa2: xp + wp - 130,
  ypa2: canvas.height / 2 - 110,
  xga1: xp,
  yga1: canvas.height / 2 - 40,
  xga2: xp + wp - 45,
  yga2: canvas.height / 2 - 40,
  wpa: 130,
  hpa: 220,
  wga: 45,
  hga: 80,
  draw() {
    ctx.beginPath();
    ctx.ellipse(xp + 130, canvas.height / 2, 30, 40, 0, -Math.PI / 2, Math.PI / 2);
    ctx.closePath();
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(xp + wp - 130, canvas.height / 2, 30, 40, 0, Math.PI / 2, -Math.PI / 2);
    console.log(this.xpa1, this.ypa1, this.wpa, this.hpa);
    ctx.rect(this.xpa1, this.ypa1, this.wpa, this.hpa);
    ctx.rect(this.xga1, this.yga1, this.wga, this.hga);
    ctx.rect(this.xpa2, this.ypa2, this.wpa, this.hpa);
    ctx.rect(this.xga2, this.yga2, this.wga, this.hga);
    ctx.closePath();
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
};

const cornerAreas = {
  draw() {
    ctx.beginPath();
    ctx.arc(xp, yp, 6, 0, Math.PI / 2, false);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xp + wp, yp, 6, Math.PI, Math.PI / 2, true);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xp, yp + hp, 6, 0, -Math.PI / 2, true);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(xp + wp, yp + hp, 6, -Math.PI / 2, Math.PI, true);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
};

// -------------

const getRandom = (min, max) => min + Math.random() * (max - min + 1);

const grid = [];

const goalkeeper1 = {
  x: xp + 17,
  y: canvas.height / 2,
};

const ball = {
  x: xp + 19,
  y: canvas.height / 2 - 5,
};

const players1 = [
  goalkeeper1,
];

const players2 = [
  {
    x: canvas.width / 2 + 280,
    y: canvas.height / 2,
    a: getRandom(0, 2 * Math.PI)
  },
];

const gridGenerator = () => {
  for (let i = 0; i < wp; i += 20) {
    for (let k = 0; k < hp; k += 20) {
      grid.push({ x: xp + i, y: yp + k, w: 20, l: 20 });
    }
  }
};

const gridDraw = () => {
  ctx.beginPath();
  ctx.fillStyle = 'green';
  const grid = [];
  for (let i = 0; i < wp; i += 20) {
    for (let k = 0; k < hp; k += 20) {
      ctx.fillRect(xp + i, yp + k, 20, 20);
      ctx.strokeStyle = 'black';
      ctx.rect(xp + i, yp + k, 20, 20);
      ctx.stroke();
      grid.push({ x: xp + i, y: yp + k, w: 20, l: 20 });
    }
  }
  ctx.closePath();
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].x < goalkeeper1.x && grid[i].x + grid[i].w > goalkeeper1.x) {
      if (grid[i].y > goalkeeper1.y && grid[i].y - grid[i].l < goalkeeper1.y) {
        ctx.beginPath();
        ctx.fillStyle = 'grey';
        ctx.fillRect(grid[i - 1].x, grid[i - 1].y, 20, 20);
        ctx.strokeStyle = 'black';
        ctx.rect(grid[i - 1].x, grid[i - 1].y, 20, 20);
        ctx.stroke();
        console.log(grid[i - 1].x, grid[i - 1].y);
      }
    }
  }
};

const pitch = () => {
  bg.draw();
  lines.draw();
  penaltyAreas.draw();
  cornerAreas.draw();
};

const drawPlayers1 = () => {
  for (let i = 0; i < players1.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(players1[i].x, players1[i].y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.arc(players1[i].x, players1[i].y, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }
};

const drawPlayers2 = () => {
  for (let i = 0; i < players2.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(players2[i].x, players2[i].y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.arc(players2[i].x, players2[i].y, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }
};

const drawBall = () => {
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(ball.x, ball.y, 5, 0, 2 * Math.PI);
  ctx.fill();
};

const tick = () => {
  pitch();
  drawBall();
  if (checkbox.checked) gridDraw();
  drawPlayers1();
  drawPlayers2();
  drawBall();
  requestAnimationFrame(tick);
};

tick();
