var cols, rows;
var cellD;
var cells = [];
var stack = [];

var current;

function setup(){
  cellD = 20;

  createCanvas(800,800);

  background(0);

  cols = floor(width/cellD);
  rows = floor(height/cellD);
  for (var j = 0; j < rows; j++){
    for (var i = 0; i < cols; i++){
      var cell = new Cell(i,j);
      cells.push(cell);
    }
  }
  current = cells[0];
  frameRate(30);
}

function draw(){
  background(0);

  current.visited = true;
  for (var i = 0; i < cells.length; i++){
    cells[i].show();
  }
  var next = current.check();
  if (stack.length > 0){
    current.highlight();
  }
  if(next){
    //current.removeWall(next);
    next.visited = true;

    stack.push(current);

    removeWall(current,next);

    current = next;
  }else if(stack.length > 0){

    current = stack.pop();
  }
}


function index(i,j){

  if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1){
    return(-1);
  }else{
    return(i + j * cols);
  }
}

function removeWall(a,b){
  var x =a.i-b.i;
  if (x === 1){
    a.wLeft = false;
    b.wRight = false;
  }
  if (x === -1){
    a.wRight = false;
    b.wLeft = false;
  }
  var y =a.j-b.j;
  if (y === 1){
    a.wTop = false;
    b.wBot = false;
  }
  if (y === -1){
    a.wBot = false;
    b.wTop = false;
  }

}
