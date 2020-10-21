const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 300, 200);