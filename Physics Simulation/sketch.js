var balls = [];
var loc = new p5.Vector(0,0);
function setup() {

  createCanvas(400,600);
  //ball = new Ball(width/2,height/2);
}

function draw() {

  background(0);
  for(var i = 0; i < balls.length; i++){
    balls[i].show();
    balls[i].update();
    if(mouseIsPressed){
      var mouse = createVector(mouseX,mouseY);
      balls[i].applyForce(mouse.sub(balls[i].pos));
    }
  }

}

function keyPressed(){
  for(var i = 0; i < 100; i++){
    balls.push(new Ball(mouseX,mouseY));
  }
}
