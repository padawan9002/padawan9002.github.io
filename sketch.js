var x = 0;

function setup() {
  // put setup code here
  createCanvas(640, 480);
}

function draw() {
  // put drawing code here
  ellipse(x, height/2, 20, 20);
  x = x + 1;
}

//Thanks http://lauren-mccarthy.com/about/
