var video;
var prev;
var vScale = 16;
function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale,height/vScale);
  video.hide();
  prev = createImage(video.width,video.height);
  prev = copy(video,0,0,video.width,video.height,video.width,video.heigth);
  frameRate(30);
}

function draw() {
  background(255);
  //loadPixels();
  video.loadPixels();
  prev.loadPixels();
  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){
        var index = y * video.width + x;
        var col = video.get(x,y);
        var pcol = prev.get(x,y);
        console.log(pcol);
        if (distSq(col[0],col[1],col[2],pcol[0],pcol[1],pcol[2]) > 1000) {
          fill(0);
          noStroke();
          point(x,y);
        }else{

        }

    }

  }
  prev = copy(video,0,0,video.width,video.height,video.width,video.heigth);
}

function distSq(a,b,c,x,y,z){
  return ((a-x)*(a-x) + (b-y)*(b-y) + (c-z)*(c-z));
}
