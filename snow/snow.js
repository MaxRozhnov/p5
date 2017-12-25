function Snow(x,y){

  this.pos = createVector(x,y);
  this.rMin = 5;
  this.rMax = 10;
  this.r = random(this.rMin, this.rMax);
  this.initialSpeed = map(this.r, this.rMin, this.rMax,0.125,1);
  this.opacity = map(this.r, this.rMin, this.rMax, 100, 255);
  this.vel = createVector(0,0.5);
  this.vel.setMag(this.speed);
  this.speed = this.initialSpeed;

  this.velAngle = random(0,180);
  this.angleModifier = -3;

  this.show = function(){
    fill(255,this.opacity);
    noStroke();
    ellipse(this.pos.x,this.pos.y,this.r,this.r);
  }

  this.update = function(){
    angleMode(DEGREES);

    this.vel.x = this.speed * cos(this.velAngle);
    this.vel.y = this.speed * sin(this.velAngle)/2;


    this.velAngle = this.velAngle + this.angleModifier;
    this.speed += 0.002;


    if (this.velAngle < 0 || this.velAngle > 180){
      this.velAngle = 90 + this.angleModifier * 15;
      this.angleModifier = -this.angleModifier;
      this.speed = this.initialSpeed;
    }



    this.pos.add(this.vel);
    if (this.pos.y > displayHeight + this.r * 2 ){
      this.pos.y = -this.r * 2;
    }
  }
}
