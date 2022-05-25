const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
style = getComputedStyle(canvas);
canvas.width = style.width;
canvas.height = style.height;