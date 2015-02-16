var ball = {};
var paddles = {p1: {}, p2: {}};

function setup() {
  // put setup code here
  createCanvas(640, 480);
  ball.x = width/2;
  ball.y = height/2;
  ball.diameter = 20;
  ball.speedX = 1;
  ball.speedY = 1;
  ball.draw = function (){ellipse(ball.x, ball.y, ball.diameter, ball.diameter);};
}

function draw() {
  // put drawing code here
  ball.draw()
  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY;
}

//Thanks http://lauren-mccarthy.com/about/
