var ball;
var lPaddle,rPaddle;
var leftScore = 0 , rightScore = 0;

function setup() {
    createCanvas(640,320);
    ball = new Ball();
    lPaddle = new Paddle(10);
    rPaddle = new Paddle(width-10);
}

function draw() {
  background(0);
  lPaddle.hits(ball,1);
  rPaddle.hits(ball,2);
  lPaddle.show();
  rPaddle.show()
  ball.show();
  ball.update();
  ball.edges();
  console.log(ball.dir);

  lPaddle.update(1);
  rPaddle.update(2);
  fill(255);
  strokeWeight(0);
  textSize(30);
  text(leftScore,40,40);
  text(rightScore,width-50 ,40);
}
