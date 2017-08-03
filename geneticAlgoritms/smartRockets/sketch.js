
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
  ellipse(target.x,target.y,10,10);
  population.update();
  lived++;
  if (lived == life) {
    lived = 0;
    population.evolve();
    population.selection();
  }

}

function mousePressed(){
  target.x = mouseX;
  target.y = mouseY;
}
