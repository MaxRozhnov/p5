var video;
var prev;
function setup() {

  //pixelDensity(1);
  video = createCapture(VIDEO);
  video.hide();
  prev = createImage(640,480);
  createCanvas(320,240);
  frameRate(30);
}

function draw() {
  background(0);
  video.loadPixels();
  prev.loadPixels()
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;

      var r1 = video.pixels[index+0];
      var g1 = video.pixels[index+1];
      var b1 = video.pixels[index+2];

      var r2 = prev.pixels[index+0];
      var g2 = prev.pixels[index+1];
      var b2 = prev.pixels[index+2];

      if (distSq(r1,g1,b1,r2,g2,b2) > 2000){
        pixels[index+0] = 0;
        pixels[index+1] = 0;
        pixels[index+2] = 0;
        //pixels[index+3] = 255;

      }else{
         pixels[index+0] = r1;
         pixels[index+1] = g1;
         pixels[index+2] = b1;
         pixels[index+3] = 255;

      }

      prev.pixels[index+0] = 255;
      prev.pixels[index+1] = 255;
      prev.pixels[index+2] = 255;
      prev.pixels[index+3] = 255;
    }
  }
  updatePixels();
  prev.updatePixels();

}

function distSq(a,b,c,x,y,z){
  return ((a-x)*(a-x) + (b-y)*(b-y) + (c-z)*(c-z));
}
