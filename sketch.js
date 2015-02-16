var ball = {};
var paddle = {speed: 10, pWidth: 10, pHeight: 50, pX:0, pY: 0, pWallDistance: 5};
var paddles = {};
var A_KEY = 65;  // http://api.jquery.com/event.which/
var Z_KEY = 90;



function setup() {
  // put setup code here
  createCanvas(640, 480);
  
  ball.x = width/2;
  ball.y = height/2;
  ball.diameter = 20;
  ball.speedX = random(-3,3);
  ball.speedY = random(-3,3);
  ball.draw = function (){ellipse(ball.x, ball.y, ball.diameter, ball.diameter);};
  
  paddle.draw = function () {rect(this.pX, this.pY, this.pWidth, this.pHeight)};
  paddle.pY = height/2;
  paddles.paddle1 = Object.create(paddle);
  paddles.paddle2 = Object.create(paddle);
  paddles.paddle1.pX = paddles.paddle1.pWallDistance;
  paddles.paddle2.pX = width - paddles.paddle2.pWidth - paddles.paddle2.pWallDistance;
  paddles.draw = function (){paddles.paddle1.draw();paddles.paddle2.draw()};
}

function draw() {
  // put drawing code here

  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY;
  
  if (keyIsDown(A_KEY)) paddles.paddle1.pY = paddles.paddle1.pY - paddles.paddle1.speed ;
  if (keyIsDown(Z_KEY)) paddles.paddle1.pY = paddles.paddle1.pY + paddles.paddle1.speed ;
  
  if (keyIsDown(UP_ARROW))    paddles.paddle2.pY = paddles.paddle2.pY - paddles.paddle2.speed ;
  if (keyIsDown(DOWN_ARROW))  paddles.paddle2.pY = paddles.paddle2.pY + paddles.paddle2.speed ;

  clear();
  ball.draw();
  paddles.draw();

}

//Thanks http://lauren-mccarthy.com/about/
