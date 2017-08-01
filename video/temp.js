var video;
var vScale = 16;
function setup() {
  createCanvas(640,480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale,height/vScale);
  //video.hide();
  prev = createImage(video.width,video.height*8);

  frameRate(30);
}

function draw() {
  background(0);
  for (var y = 0; y < video.height; y++){
    for (var x = 0; x < video.width; x++){

    }
  }
//  video.loadPixels();
//  prev.loadPixels();
  // loadPixels();
  // for (var y = 0; y < video.height; y++) {
  //   for (var x = 0; x < video.width; x++) {
  //     var index = (video.width - x + 1 + (y * video.width))*4;
  //
  //     var r1 = video.pixels[index+0];
  //     var g1 = video.pixels[index+1];
  //     var b1 = video.pixels[index+2];
  //
  //     var r2 = prev.pixels[index+0];
  //     var g2 = prev.pixels[index+1];
  //     var b2 = prev.pixels[index+2];
  //
  //     if (distSq(r1,g1,b1,r2,g2,b2) > threshold){
  //       pixels[index+0] = 0;
  //       pixels[index+1] = 0;
  //       pixels[index+2] = 0;
  //
  //     }else{
  //        pixels[index+0] = 255;
  //        pixels[index+1] = 255;
  //        pixels[index+2] = 255;
  //        pixels[index+3] = 255;
  //
  //     }
  //
  //     prev.pixels[index+0] = r1;
  //     prev.pixels[index+1] = g1;
  //     prev.pixels[index+2] = b1;
  //     prev.pixels[index+3] = 255;
  //   }
  // }
  // updatePixels();
  // prev.updatePixels();

}

function distSq(a,b,c,x,y,z){
  return ((a-x)*(a-x) + (b-y)*(b-y) + (c-z)*(c-z));
}
