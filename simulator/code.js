'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 540;
canvas.height = 360;

const players1 = [
  { x: canvas.width / 2, y: canvas.height / 2 },
  { x: canvas.width / 2 + 70, y: canvas.height / 2 },
  { x: canvas.width / 2 + 40, y: canvas.height / 2 + 70 },
  { x: canvas.width / 2 + 40, y: canvas.height / 2 - 70 },
  { x: canvas.width / 2 + 120, y: canvas.height / 2 + 30 },
  { x: canvas.width / 2 + 120, y: canvas.height / 2 - 30 },
  { x: canvas.width / 2 + 170, y: canvas.height / 2 + 25 },
  { x: canvas.width / 2 + 170, y: canvas.height / 2 - 25 },
  { x: canvas.width / 2 + 150, y: canvas.height / 2 - 80 },
  { x: canvas.width / 2 + 150, y: canvas.height / 2 + 80 },
  { x: canvas.width / 2 + 240, y: canvas.height / 2 },
];
const players2 = [
  { x: canvas.width / 2 - 40, y: canvas.height / 2 },
  { x: canvas.width / 2 - 70, y: canvas.height / 2 },
  { x: canvas.width / 2 - 40, y: canvas.height / 2 + 70 },
  { x: canvas.width / 2 - 40, y: canvas.height / 2 - 70 },
  { x: canvas.width / 2 - 120, y: canvas.height / 2 + 30 },
  { x: canvas.width / 2 - 120, y: canvas.height / 2 - 30 },
  { x: canvas.width / 2 - 170, y: canvas.height / 2 + 25 },
  { x: canvas.width / 2 - 170, y: canvas.height / 2 - 25 },
  { x: canvas.width / 2 - 150, y: canvas.height / 2 - 80 },
  { x: canvas.width / 2 - 150, y: canvas.height / 2 + 80 },
  { x: canvas.width / 2 - 240, y: canvas.height / 2 },
];

const pitch = () => {
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, canvas.width, canvas.width);
};

const drawPlayers1 = () => {
  for (let i = 0; i < players1.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.arc(players1[i].x, players1[i].y, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
};

const drawPlayers2 = () => {
  for (let i = 0; i < players2.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(players2[i].x, players2[i].y, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
};

const drawBall = () => {
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(canvas.width / 2 + 5, canvas.height / 2 + 5, 5, 0, 2 * Math.PI);
  ctx.fill();
};

pitch();
drawPlayers1();
drawPlayers2();
drawBall();
