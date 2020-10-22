'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let speed = 1;

// Pitch params:

const wp = 600;
const hp = 400;
const xp = (canvas.width / 2) - (wp / 2);
const yp = (canvas.height / 2) - (hp / 2);

// -------------

const getRandom = (min, max) => min + Math.random() * (max - min + 1);

const players1 = [
  {
    x: canvas.width / 2 + 40,
    y: canvas.height / 2,
    a: getRandom(0, 2 * Math.PI)
  },
];

const players2 = [
  {
    x: canvas.width / 2 - 40,
    y: canvas.height / 2,
    a: getRandom(0, 2 * Math.PI)
  },
];

const pitch = () => {
  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'green';
  ctx.fillRect(xp, yp, wp, hp);
  ctx.fillStyle = 'darkgreen';
  for (let i = 0; i < wp; i += 80) {
    ctx.fillRect(xp + i, yp, 40, hp);
  }
  ctx.fillStyle = 'white';
  ctx.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2);
  ctx.moveTo(canvas.width / 2, yp + 1);
  ctx.lineTo(canvas.width / 2, yp + 400);
  ctx.rect(xp + 1, yp + 1, wp, hp);
  ctx.strokeStyle = 'white';
  ctx.stroke();
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
  ctx.arc(canvas.width / 2 + 45, canvas.height / 2 + 5, 5, 0, 2 * Math.PI);
  ctx.fill();
};

const movePlayers1 = () => {
  for (let i = 0; i < players1.length - 1; i++) {
    if (players1[i].x + speed * Math.cos(players1[i].a) > canvas.width) {
      speed = -speed;
    }
    if (players1[i].x + speed * Math.cos(players1[i].a) < canvas.width / 2) {
      speed = -speed;
    }
    players1[i].x += speed * Math.cos(players1[i].a);
    players1[i].y += speed * Math.sin(players1[i].a);
  }
};

const movePlayers2 = () => {
  for (let i = 0; i < players2.length - 1; i++) {
    if (players2[i].x + speed * Math.cos(players2[i].a) > canvas.width) {
      speed = -speed;
    }
    if (players2[i].x + speed * Math.cos(players2[i].a) < canvas.width / 2) {
      speed = -speed;
    }
    players2[i].x += speed * Math.cos(players2[i].a);
    players2[i].y += speed * Math.sin(players2[i].a);
  }
};


const tick = () => {
  pitch();
  movePlayers1();
  movePlayers2();
  drawPlayers1();
  drawPlayers2();
  drawBall();
  requestAnimationFrame(tick);
};

tick();
