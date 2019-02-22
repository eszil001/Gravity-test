//s simple gravity ball simulation lab6,part A
var x = 300;   // x 
var y = 200;     // y l

var speed = 2;   // speed 

var gravity = 0.02;  

function setup() {
 createCanvas(480, 400);
}

function draw() {
  background(255);

  fill(255,0,0);
  ellipse(x, y, 60, 60);

  // Add speed to location.
  y = y + speed;

  // Add gravity to speed.
  speed = speed + gravity;

  
  // Reverse speed
  if (y > height) {
    speed = speed * -0.95;
    y = height;
  }
}