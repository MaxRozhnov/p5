var video;
var prev;
var vScale = 8;
function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale,height/vScale);

  prev = createImage(width/vScale,height/vScale);

  frameRate(30);
}

function draw() {
  background(255);
  fill(0);
  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){
        var index = y * video.width + x;
        var col = video.get(x,y);
        var pcol = prev.get(x,y);

        if (distSq(col[0],col[1],col[2],pcol[0],pcol[1],pcol[2]) > 1000) {
          fill(0);
          noStroke();
          rect(x*vScale,y*vScale,vScale,vScale);

        }else{

        }

    }

  }
  video.loadPixels();
  prev.loadPixels();
  for (var i = 0; i < video.pixels.length; i++){
      prev.pixels[i] = video.pixels[i];
  }
  prev.updatePixels();

}

function distSq(a,b,c,x,y,z){
  return ((a-x)*(a-x) + (b-y)*(b-y) + (c-z)*(c-z));
}
