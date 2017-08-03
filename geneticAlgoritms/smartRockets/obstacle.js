function Obstacle(x,y){
  this.pos = createVector(x,y);
  this.w = 100;
  this.h = 10;
  this.show = function() {
    push();
    rectMode(CENTER);
    rect(this.pos.x,this.pos.y,this.w,this.h);
  }

  this.hits = function(rocket){
    if (rocket.pos.x > this.pos.x - this.w/2 && rocket.pos.x < this.pos.x + this.w/2){
      if (rocket.pos.y > this.pos.y - this.h/2 && rocket.pos.y < this.pos.y + this.h/2){
        rocket.crashed = true;
      }
    }
  }

}
