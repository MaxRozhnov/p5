var video;
var prev;
var threshold = 100;
function setup() {

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320,240);
  //video.hide();
  prev = createImage(video.width,video.height);
  createCanvas(320,240);
  frameRate(25);
}

function draw() {
  console.log(pixels[1]);
  background(255);
  video.loadPixels();
  prev.loadPixels();
  loadPixels();
  for (var index = 0; index < video.pixels.length; index++) {

    var r1 = video.pixels[index+0];
    var g1 = video.pixels[index+1];
    var b1 = video.pixels[index+2];

    var r2 = prev.pixels[index+0];
    var g2 = prev.pixels[index+1];
    var b2 = prev.pixels[index+2];

    pixels[index+0] = r2;
    pixels[index+1] = g2;
    pixels[index+2] = b2;
    pixels[index+3] = 255;
    // console.log(r1);
    // console.log(r2);

    if (distSq(r1,g1,b1,r2,g2,b2) > threshold){
       pixels[index+0] = 0;
       pixels[index+1] = 0;
       pixels[index+2] = 0;
       pixels[index+3] = 255;
    }
      //
      // }else{
      //    pixels[index+0] = 255;
      //    pixels[index+1] = 255;
      //    pixels[index+2] = 255;
      //    pixels[index+3] = 255;
      //
      // }
      //
    prev.pixels[index+0] = r1;
    prev.pixels[index+1] = g1;
    prev.pixels[index+2] = b1;
    //}
  }
  updatePixels();
  prev.updatePixels();

}

function distSq(a,b,c,x,y,z){
  return ((a-x)*(a-x) + (b-y)*(b-y) + (c-z)*(c-z));
}
