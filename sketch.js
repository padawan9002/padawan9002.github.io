var ball = {};

function setup() {
  // put setup code here
  createCanvas(640, 480);
  ball.x = width/2;
  ball.y = height/2;
  ball.diameter = 20;
}

function draw() {
  // put drawing code here
  ellipse(ball.x, ball.y, ball.diameter, ball.diameter);
  ball.x += 1;
  ball.y += 1;
}

//Thanks http://lauren-mccarthy.com/about/
