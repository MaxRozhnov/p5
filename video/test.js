var video;
var prev;
var threshold = 3000;
function setup() {

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320,240);
  //video.hide();
  prev = createImage(video.width,video.height);
  createCanvas(320,240);
  frameRate(20);
  background(100,0,200);
}

function draw() {
  background(255);
  video.loadPixels();
  prev.loadPixels();
  loadPixels();
  for (var i = 0; i < video.pixels.length/4; i++) {
    var index = i*4;
    var r1 = video.pixels[index+0];
    var g1 = video.pixels[index+1];
    var b1 = video.pixels[index+2];

    var r2 = prev.pixels[index+0];
    var g2 = prev.pixels[index+1];
    var b2 = prev.pixels[index+2];

    prev.pixels[index+0] = r1;
    prev.pixels[index+1] = g1;
    prev.pixels[index+2] = b1;

    pixels[index+0] = prev.pixels[index+0];
    pixels[index+1] = prev.pixels[index+1];
    pixels[index+2] = prev.pixels[index+2];

    //
    // if (distSq(r1,g1,b1,r2,g2,b2) > threshold){
    //     pixels[index+0] = 0;
    //     pixels[index+1] = 0;
    //     pixels[index+2] = 0;
    //     pixels[index+3] = 255;
    // }else{
    //       pixels[index+0] = 255;
    //       pixels[index+1] = 255;
    //       pixels[index+2] = 255;
    //       pixels[index+3] = 255;
    // }

  }
  prev.updatePixels();
  updatePixels();


}

function distSq(a,b,c,x,y,z){
  return ((a-x)*(a-x) + (b-y)*(b-y) + (c-z)*(c-z));
}
