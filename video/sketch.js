var video
function setup() {
  //cameras = Capture.list();
  //console.log(cameras);
  var video = createCapture(VIDEO);
  video.hide();
  createCanvas(320,240);
}

function draw() {
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      pixels[index+0] = r;
      pixels[index+1] = g;
      pixels[index+2] = b;
      pixels[index+3] = 255;
  }
}

}
