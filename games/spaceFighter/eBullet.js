function EBullet(x,y,enemy){
  this.w = 4;
  this.h = 20;
  this.speed = 3;
  this.alive = true;
  this.pos = createVector(x,y);
  this.vel = createVector(plane.pos.x,plane.pos.y);
  this.vel.sub(this.pos);
  this.vel.setMag(this.speed);
  this.vel.add(enemy.vel);
  this.frontX = this.pos.x + (this.h/2)*cos(this.vel.heading());
  this.frontY = this.pos.y + (this.h/2)*sin(this.vel.heading());
  console.log(this.vel.heading());

  this.show = function(){

    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.vel.heading()+PI/4);
    // rectMode(CENTER);
    // fill(255);
    // noStroke();
    // rect(0,0,this.h,this.w);
    imageMode(CENTER);
    image(eBulletPic,0,0,eBulletPic.width,eBulletPic.height);
    pop();
  }

  this.update = function(){
    this.pos.add(this.vel);
    this.frontX = this.pos.x + (this.h/2)*cos(this.vel.heading());
    this.frontY = this.pos.y + (this.h/2)*sin(this.vel.heading());
  }


//TODO: ADD BULLETS DISAPPEAR BELOW


  this.visible = function(){
    if (!(this.pos.y + this.h/2 < height)) {
      this.alive = false;
    }
    // if (!(this.pos.x + this.w/2 > 0)) {
    //   this.alive = false;
    // }
  }



}
