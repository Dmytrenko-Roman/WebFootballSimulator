'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 540;
canvas.height = 360;

let speed = 1;

const getRandom = (min, max) => min + Math.random() * (max - min + 1);

const players1 = [
  {
    x: canvas.width / 2,
    y: canvas.height / 2,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 70,
    y: canvas.height / 2,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 + 70,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 40,
    y: canvas.height / 2 - 70,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 120,
    y: canvas.height / 2 + 30,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 120,
    y: canvas.height / 2 - 30,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 170,
    y: canvas.height / 2 + 25,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 170,
    y: canvas.height / 2 - 25,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 150,
    y: canvas.height / 2 - 80,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 150,
    y: canvas.height / 2 + 80,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 + 240,
    y: canvas.height / 2,
    a: 0
  },
];

const players2 = [
  {
    x: canvas.width / 2 - 40,
    y: canvas.height / 2,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 70,
    y: canvas.height / 2,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 40,
    y: canvas.height / 2 + 70,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 40,
    y: canvas.height / 2 - 70,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 120,
    y: canvas.height / 2 + 30,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 120,
    y: canvas.height / 2 - 30,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 170,
    y: canvas.height / 2 + 25,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 170,
    y: canvas.height / 2 - 25,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 150,
    y: canvas.height / 2 - 80,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 150,
    y: canvas.height / 2 + 80,
    a: getRandom(0, 2 * Math.PI)
  },
  {
    x: canvas.width / 2 - 240,
    y: canvas.height / 2,
    a: 0
  },
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
