function Ball(a,b)  {
  this.pos = new p5.Vector(a,b);
  this.vel = new p5.Vector(0,0);
  this.acc = new p5.Vector(0,0);

  this.r = 2;

  this.show = function(){
    fill(255,100,0);
    noStroke();
    ellipse(this.pos.x,this.pos.y,this.r*2);
  }

  this.update = function(){
    //var mouse = createVector(mouseX,mouseY);
    //this.acc = mouse.sub(this.pos);
    this.pos.add(this.vel);
    this.vel.add(this.acc)
    this.vel.limit(random(5,10));
    this.acc.mult(0);
    this.vel.mult(0.99)
  }
  this.applyForce = function(a){
    this.acc.add(a);
  }

}
