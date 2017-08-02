function Cell(i,j){

  this.visited = false;

  this.i = i;
  this.j = j;
  this.x = this.i * cellD;
  this.y = this.j * cellD;

  this.wTop = true;
  this.wBot = true;
  this.wLeft = true;
  this.wRight = true;


  this.show = function(){
    var x = this.i * cellD;
    var y = this.j * cellD;


    noStroke();
    if (this.visited){

      fill(0,0,255,175);
      rect(x,y,cellD,cellD);
    }

    noFill();
    stroke(255);
    strokeWeight(2);

    if(this.wTop){
      line(x,y,x+cellD,y);
    }

    if(this.wBot){
      line(x, y + cellD ,x+cellD, y + cellD);
    }

    if(this.wLeft){
      line(x, y, x, y + cellD);
    }

    if(this.wRight){
      line(x + cellD, y, x + cellD, y + cellD);
    }
  }

  this.highlight = function(){
    var x = this.i * cellD;
    var y = this.j * cellD;
    fill(255,255,0,170);
    noStroke();
    rect(x+1,y+1,cellD-1,cellD-1);
  }

  this.check = function(){
    var toVisit = [];
    var top = cells[index(i,j-1)];
    var bot = cells[index(i,j+1)];
    var left = cells[index(i-1,j)];
    var right = cells[index(i+1,j)];

    if(top && !top.visited){
      toVisit.push(top);
      //top.highlight();
    }

    if(bot && !bot.visited){
      toVisit.push(bot);
      //bot.highlight();
    }

    if(left && !left.visited){
      toVisit.push(left);
      //left.highlight();
    }

    if(right && !right.visited){
      toVisit.push(right);
      //right.highlight();
    }

    if (toVisit.length > 0){

      var r = floor(random(0, toVisit.length));
      return toVisit[r];

    }else{
      return undefined;
    }
    console.log(toVisit);
  }
}
