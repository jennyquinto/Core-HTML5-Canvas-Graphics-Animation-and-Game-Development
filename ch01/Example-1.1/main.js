const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.font = '38pt Arial';
context.fillStyle = 'cornflowerblue';
context.strokeStyle = 'black';

context.fillText('Hello, world!', canvas.width / 2 - 150, canvas.height / 2 + 15);
context.strokeText('Hello, world!', canvas.width / 2 - 150, canvas.height / 2 + 15);
