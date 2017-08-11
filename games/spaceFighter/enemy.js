function Enemy(x,y){
  this.pos = createVector(x,y);
  this.vel = createVector(0,1);
  this.w = 32;
  this.h = 20;
  this.alive = true;
  this.frameOffset = floor(random(60));

  this.show = function(){
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(this.pos.x,this.pos.y,this.w,this.h);
  }

  this.update = function(){
    this.pos.add(this.vel);
    if (this.pos.y - this.h/2 > height){
      this.alive = false;
    }
    if ((frameCount + this.frameOffset) % 90 == 0 && random(1) > 0.9 && this.pos.y > 0){
      this.shoot();
    }
  }

  this.hits = function(bullet){
    if((abs(bullet.pos.x - this.pos.x) < this.w/2 + bullet.w/2) && (abs(bullet.pos.y - this.pos.y) < this.h/2 + bullet.h/2)){
      return true;
    }else{
      return false;
    }
  }

  this.shoot = function(){
    enemyBullets.push(new EBullet(this.pos.x,this.pos.y,this));

  }


}