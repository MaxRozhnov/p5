function Star(x,y){
  this.pos = createVector(x,y);

  this.speed = random(0.2,0.5)*sizeScale;
  this.vel = createVector(0,this.speed);

  this.size = map(this.speed,0.2,0.5,0.,2);
  this.show = function(){
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(this.pos.x,this.pos.y,this.size,this.size);
  }
  this.update = function(){

    this.pos.add(this.vel);
    if (this.pos.y > height + this.size){
      this.pos.y = -this.size;
    }

  }

}
