var video;
var prev;
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
  //prev.updatePixels();
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
