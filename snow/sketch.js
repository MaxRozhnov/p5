var flake;
var flakes =[];
function setup(){

  createCanvas(displayWidth,displayHeight);
  flake = new Snow(100,100);
  for (var i = 0; i < 1000; i++){
    flakes.push(new Snow(random(0,displayWidth),random(0,displayHeight)));
  }



}

function draw(){
  background(0);
  flake.show();
  flake.update();
  for (var i = 0; i < flakes.length; i++){
    flakes[i].show();
    flakes[i].update();
  }

}

function keyPressed(){
  if (key == ' '){

  }
}

function keyPressed(){

  if (key == ' '){
    var fs = fullscreen();
    fullscreen(!fs);
    noCursor();
  }

}


function mousePressed(){
  for (var i = 0; i < 10; i++){
    flakes.push(new Snow(mouseX + random(-10,10),mouseY + random(-10,10)));
  }


}
