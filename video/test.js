var slider;
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
  slider = createSlider(1,9000,3000);
  frameRate(20);
  background(100,0,200);
  prev.loadPixels();
}

function draw() {
  threshold = slider.value();
  background(255);
  video.loadPixels();
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

    if (distSq(r1,g1,b1,r2,g2,b2) > threshold){
        pixels[index+0] = 0;
        pixels[index+1] = 0;
        pixels[index+2] = 0;
        pixels[index+3] = 255;

    }
  }

  updatePixels();
}

function distSq(a,b,c,x,y,z){
  return ((a-x)*(a-x) + (b-y)*(b-y) + (c-z)*(c-z));
}
