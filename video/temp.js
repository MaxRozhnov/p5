var video;
var prev;
var vScale = 16;
function setup() {
  createCanvas(320,240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale,height/vScale);
  video.hide();
  prev = createImage(width/vScale,height/vScale);
  //prev = copy(video,0,0,video.width,video.height,video.width,video.height);
  frameRate(30);
}

function draw() {
  background(255);
  fill(0);
  //rect(0,0,100,100);
  // console.log(video.get(0,0));
  // console.log(prev.get(0,0));
  loadPixels();
  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){
        var index = y * video.width + x;
        var col = video.get(x,y);
        var pcol = prev.get(x,y);


        if (distSq(col[0],col[1],col[2],pcol[0],pcol[1],pcol[2]) > 1000) {
          fill(0);
          noStroke();
          // pixels[index+0] = 0;
          // pixels[index+1] = 0;
          // pixels[index+2] = 0;

          rect(x*vScale,y*vScale,vScle,vScale);
        }else{

        }

    }

  }
  updatePixels();
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
