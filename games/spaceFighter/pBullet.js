function PBullet(x,y){
  this.w = 4;
  this.h = 20;
  this.speed = 8*scale;
  this.alive = true;
  this.pos = createVector(x,y);
  this.vel = createVector(0,-this.speed);

  this.show = function(){
    // rectMode(CENTER);
    // fill(255);
    // noStroke();
    // rect(this.pos.x,this.pos.y,this.w,this.h);
    imageMode(CENTER);
    image(pBulletPic,this.pos.x,this.pos.y,pBulletPic.width,pBulletPic.height);
  }

  this.update = function(){
    this.pos.add(this.vel);
  }

  this.visible = function(){
    if (!(this.pos.y + this.h/2 > 0)) {
      this.alive = false;
    }
  }



}
