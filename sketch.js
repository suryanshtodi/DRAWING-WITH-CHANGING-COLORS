let r = 255;
let g = 255;
let b = 255;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  noStroke();
  fill(r, g, b, 90);
  circle(mouseX, mouseY, 20);
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}
