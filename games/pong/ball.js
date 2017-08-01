function Ball(){
  this.trail = [];
  this.x = width/2
  this.y = height/2;
  this.speed = 7;
  this.trailWidth = 0;
  this.dir = random(0,360);
  this.bounceTimer = 3;
  this.r = 5;

  if(this.dir  > 70 && this.dir < 110){
    this.dir = 110;
  }
  if(this.dir  > 250 && this.dir < 290){
    this.dir += 290;
  }

  this.xSpeed = this.speed * cos(radians(this.dir));
  this.ySpeed = this.speed * sin(radians(this.dir));



  this.show = function(){
    stroke(255);
    fill(255);
    ellipse(this.x,this.y,this.r*2,this.r*2);
    for(var i =1; i < this.trail.length; i++){
      fill(255);
      this.trailWidth = map(i,0,this.trail.length-1,0,3);
      strokeWeight(this.trailWidth);
      line(this.trail[i].x,this.trail[i].y,this.trail[i-1].x,this.trail[i-1].y);
    }
  }

  this.update = function(){

    this.x += this.xSpeed;
    this.y += this.ySpeed;



    this.trail.push(createVector(this.x,this.y));
     if (this.trail.length > 30){
       this.trail.splice(0,1);
     }
  }

  this.respawn = function(){
    this.x = width/2;
    this.y = height/2;
    this.dir = random(0,360);
    if(this.dir  > 70 && this.dir < 110){
      this.dir = 110;
    }
    if(this.dir  > 250 && this.dir < 290){
      this.dir += 290;
    }
    this.xSpeed = this.speed * cos(radians(this.dir));
    this.ySpeed = this.speed * sin(radians(this.dir));
    this.trail.splice(0,30);
    this.bounceTimer = 3;
  }

  this.edges = function(){
    if(this.y >= height || this.y <= 0){
     this.ySpeed = -this.ySpeed;
     console.log("EDGE");
   }
    if (this.x < 0){
      rightScore++;
      this.respawn();

    }
    if (this.x > width){
      leftScore++;
      this.respawn();
    }
  }


}
