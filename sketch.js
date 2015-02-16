var ball = {};
var paddle = {speed: 10, pWidth: 10, pHeight: 50, pX:0, pY: 0};
var paddles = {};



function setup() {
  // put setup code here
  createCanvas(640, 480);
  
  ball.x = width/2;
  ball.y = height/2;
  ball.diameter = 20;
  ball.speedX = 1;
  ball.speedY = 1;
  ball.draw = function (){ellipse(ball.x, ball.y, ball.diameter, ball.diameter);};
  
  paddle.draw = function () {rect(this.pX, this.pY, this.pWidth, this.pHeight)};
  paddles.paddle1 = Object.create(paddle);
  paddles.paddle2 = Object.create(paddle);
  paddles.draw = function (){paddles.paddle1.draw();paddles.paddle2.draw()};
}

function draw() {
  // put drawing code here
  ball.draw();
  paddles.draw();
  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY;
  
  if (keyIsDown(UP_ARROW)) paddles.paddle2.pY = paddles.paddle2.pY - paddles.paddle2.speed ;

  if (keyIsDown(DOWN_ARROW))paddles.paddle2.pY = paddles.paddle2.pY + paddles.paddle2.speed ;

  clear();

}

//Thanks http://lauren-mccarthy.com/about/
