function Plane(){
  this.pos = createVector(width/2,height - 40);
  this.vel = createVector(0,0);
  this.w = 20;
  this.h = 32;
  this.hp = 100;
  this.maxSpeed = 6;
  this.mousePos = createVector(0,0);
  this.bulletOffset = 6;

  this.show = function(){
    // rectMode(CENTER);
    // fill(255);
    // noStroke();
    // rect(this.pos.x,this.pos.y,this.w,this.h);
    imageMode(CENTER);
    image(planePic,this.pos.x,this.pos.y,planePic.width,planePic.height);
  }

  this.update = function(){
    var mouseDist = sqrt((plane.pos.x - mouseX)*(plane.pos.x - mouseX) + (plane.pos.y - mouseY)*(plane.pos.y - mouseY));

    if (mouseIsPressed){

      this.mousePos = createVector(mouseX,mouseY);
      this.vel = this.mousePos.sub(this.pos);

      if (mouseDist > 4 ){
        this.vel.setMag(this.maxSpeed);
      }

    }else{
      this.vel.setMag(0);
    }

    var newPos = createVector(0,0);

    newPos.add(this.pos);
    newPos.add(this.vel);

    var outOfHBorders = false;
    var outOfVBorders = false;

    if (newPos.x + this.w/2 > width){
      outOfHBorders = true;
    }
    if (newPos.x - this.w/2 < 0){
      outOfHBorders = true;
    }

    if (newPos.y + this.h/2 > height){
      outOfVBorders = true;
    }
    if (newPos.y - this.h/2 < 0){
      outOfVBorders = true;
    }

    if(!outOfHBorders){
      this.pos.x += this.vel.x;
    }

    if(!outOfVBorders){
      this.pos.y += this.vel.y;
    }



  }

  this.shoot = function(){
    if (frameCount % 10 == 0) {
        bullets.push(new PBullet(plane.pos.x + this.bulletOffset,plane.pos.y - this.h/2 ));
        this.bulletOffset = -this.bulletOffset;
    }
  }

  this.checkCollisions = function(){
    for(var i = 0; i < enemies.length; i++){
      if ((abs(enemies[i].pos.x - this.pos.x) < enemies[i].w/2 + this.w/2) && (abs(enemies[i].pos.y - this.pos.y) < enemies[i].h/2 + this.h/2)){
          this.hp -= 20;
          enemies[i].alive = false;
          console.log(this.hp);
      }

    }
  }

  this.hits = function(bullet){
    //return true;
    if((abs(bullet.frontX - this.pos.x) < this.w/2 + 2) && (abs(bullet.frontY - this.pos.y) < this.h/2 + 2)){
      return true;
    }else{
      return false;
    }
  }

}
