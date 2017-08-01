var video;
var prev;
var vScale = 16;
function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale,height/vScale);
  //video.hide();
  prev = createImage(width/vScale,height/vScale);
  //prev = copy(video,0,0,video.width,video.height,video.width,video.height);
  frameRate(30);
}

function draw() {
  background(255);
  console.log(video.get(0,0));
  console.log(prev.get(0,0));

  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){
        var index = y * video.width + x;
        var col = video.get(x,y);
        var pcol = prev.get(x,y);


        if (distSq(col[0],col[1],col[2],pcol[0],pcol[1],pcol[2]) > 1000) {
          fill(0);
          noStroke();
          point(x,y);
          console.log(distSq(col[0],col[1],col[2],pcol[0],pcol[1],pcol[2]));
        }else{

        }

    }

  }
  video.loadPixels();
  prev.loadPixels();
  prev.pixels = video.pixels;
  prev.updatePixels();
}

function distSq(a,b,c,x,y,z){
  return ((a-x)*(a-x) + (b-y)*(b-y) + (c-z)*(c-z));
}
