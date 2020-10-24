'use strict';

const bg = {
  linelength: 40,
  color1: 'green',
  color2: 'darkgreen',
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = this.color1;
    ctx.fillRect(xp, yp, wp, hp);
    ctx.fillStyle = this.color2;
    for (let i = 0; i < wp; i += 80) {
      ctx.fillRect(xp + i, yp, this.linelength, hp);
    }
  }
};

const lines = {
  xc: canvas.width / 2,
  yc: canvas.height / 2,
  cpr: 4,
  car: 60,
  startAngle: 0,
  endAngle: Math.PI * 2,
  color: 'white',
  draw() {
    ctx.fillStyle = this.color;
    ctx.arc(this.xc, this.yc, this.cpr, this.startAngle, this.endAngle);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.xc, this.yc, this.car, this.startAngle, this.endAngle);
    ctx.moveTo(this.xc, yp);
    ctx.lineTo(this.xc, yp + hp);
    ctx.rect(xp, yp, wp, hp);
    myStroke(this.color);
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
  xpae1: xp + 130,
  xpae2: xp + wp - 130,
  ypae: canvas.height / 2,
  startAngle: -Math.PI / 2,
  endAngle: Math.PI / 2,
  xr: 30,
  yr: 40,
  wpa: 130,
  hpa: 220,
  wga: 45,
  hga: 80,
  draw() {
    ctx.beginPath();
    ctx.ellipse(this.xpae1, this.ypae, this.xr, this.yr, 0, this.startAngle, this.endAngle);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(this.xpae2, this.ypae, this.xr, this.yr, 0, this.endAngle, this.startAngle);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(this.xpa1, this.ypa1, this.wpa, this.hpa);
    ctx.rect(this.xga1, this.yga1, this.wga, this.hga);
    ctx.rect(this.xpa2, this.ypa2, this.wpa, this.hpa);
    ctx.rect(this.xga2, this.yga2, this.wga, this.hga);
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }
};

const cornerAreas = {
  r: 6,
  color: 'white',
  draw() {
    ctx.beginPath();
    ctx.arc(xp, yp, this.r, 0, Math.PI / 2, false);
    myStroke(this.color);
    ctx.beginPath();
    ctx.arc(xp + wp, yp, this.r, Math.PI, Math.PI / 2, true);
    myStroke(this.color);
    ctx.beginPath();
    ctx.arc(xp, yp + hp, this.r, 0, -Math.PI / 2, true);
    myStroke(this.color);
    ctx.beginPath();
    ctx.arc(xp + wp, yp + hp, this.r, -Math.PI / 2, Math.PI, true);
    myStroke(this.color);
  }
};
