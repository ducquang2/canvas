
const tile = (ctx, columnPosition, rowPosition, height, color) => {
  const halfHeight = height/ 2 ;
  // Draw tile "2"
  // I'm just going to draw a path for simplicity, rather than
  // worrying about drawing a rectangle with rotation and translates
  ctx.beginPath();
  ctx.moveTo(columnPosition - halfHeight, rowPosition - halfHeight);
  ctx.lineTo(columnPosition, rowPosition - height);
  ctx.lineTo(columnPosition + height, rowPosition);
  ctx.lineTo(columnPosition + halfHeight, rowPosition + halfHeight);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
};

const tileCurve = (ctx, columnPosition, rowPosition, height, color) => {
  const halfHeight = height/ 2 ;
  // Draw tile "2"
  // I'm just going to draw a path for simplicity, rather than
  // worrying about drawing a rectangle with rotation and translates
  ctx.beginPath();
  ctx.moveTo(columnPosition - halfHeight, rowPosition - halfHeight);
  ctx.lineTo(columnPosition, rowPosition - height);
  // ctx.lineTo(columnPosition + height, rowPosition);
  ctx.quadraticCurveTo(columnPosition + halfHeight, rowPosition -height,
                       columnPosition + height, rowPosition);
  ctx.lineTo(columnPosition + halfHeight, rowPosition + halfHeight);
  ctx.quadraticCurveTo(columnPosition, rowPosition - 10,
     columnPosition - halfHeight, rowPosition - halfHeight);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
};

const tileReflective = (ctx, columnPosition, rowPosition, height, color) => {
  const width = height * 2;
  const halfHeight = height/ 2 ;
  ctx.beginPath();
  ctx.moveTo(columnPosition + halfHeight, rowPosition + halfHeight);
  ctx.lineTo(columnPosition + width - halfHeight, rowPosition - halfHeight);
  ctx.lineTo(columnPosition + width +5, rowPosition -5);
  ctx.lineTo(columnPosition + height, rowPosition + height);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
};

const tileReflectiveCurve = (ctx, columnPosition, rowPosition, height, color) => {
  const width = height * 2;
  const halfHeight = height/ 2 ;
  ctx.beginPath();
  ctx.moveTo(columnPosition + halfHeight, rowPosition + halfHeight -18);
  // ctx.lineTo(columnPosition + width - halfHeight, rowPosition - halfHeight);
  ctx.quadraticCurveTo(columnPosition + width - halfHeight, rowPosition,
    columnPosition + width - halfHeight, rowPosition - halfHeight-18);
  ctx.lineTo(columnPosition + width, rowPosition);
  ctx.quadraticCurveTo(columnPosition + width, rowPosition +halfHeight,
    columnPosition + height, rowPosition + height);
  // ctx.lineTo(columnPosition + height, rowPosition + height);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
};

// and we can leave the drawing of some tiles to later rows and columns
// we are drawing the pattern blocks from left to right and top to bottom
// Loop through the pattern block rows
//   const a = 60;
//   const b = 120;
const canvas = document.getElementById("herringbone");
canvas.height = 1600;
canvas.width = 2000;
const ctx = canvas.getContext("2d");
const h = 50 * Math.sqrt(2);
const w = h * 2;
const h2 = h / 2; // How far tile 1 sticks out to the left of the pattern block
// Set a universal stroke colour and width
// ctx.strokeStyle = "black";
// ctx.lineWidth = 4;

for (var y = 0, i=0; y < canvas.height + h; y += h, i++) {
  // Loop through the pattern block columns
  for (var x = 0; x < canvas.width + w; x += w) {
    // Draw tile "3"
    console.log(x, y);
    // tile(ctx, x, y, h, i%2===0? 'blue': 'blue')
    tileCurve(ctx, x, y, h, i%2===0? 'white': 'white')
    tileReflective(ctx, x, y, h , i%2===0? 'white': 'white')
    // tileReflectiveCurve(ctx, x, y, h , i%2===0? 'green': 'yellow')

  }
}
