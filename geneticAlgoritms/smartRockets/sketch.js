var speed = 0.2;
var walls =[];
var target;
var life = 200;
var lived = 0;
var population;
function setup(){
  frameRate(100);

  createCanvas(400,300);
  target = createVector(width/2,50);
  population = new Population();


}

function draw(){
  background(0);

  population.update();
  lived++;
  if (lived == life) {
    lived = 0;
    population.evolve();
    population.selection();
  }
  for(var i = 0; i < walls.length; i++){
    walls[i].show();
  }
  fill(255);
  noStroke();
  ellipse(target.x,target.y,15,15);
  fill(0,0,255);
  ellipse(target.x,target.y,10,10);
  fill(255,0,0);
  ellipse(target.x,target.y,6,6);

}

function mousePressed(){

    target.x = mouseX;
    target.y = mouseY;

}

function keyPressed(){
  if (key == ' '){
    walls.push(new Obstacle(mouseX,mouseY));
  }
}
