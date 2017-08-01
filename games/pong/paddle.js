function Paddle(a){
  this.x = a;
  this.y = height/2;
  this.height = 90;
  this.width = 5;
  this.ySpeed = 0;


  this.show = function(){
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
  }

  this.update = function(num){
    if (num == 1){
      if (keyIsDown(87)){

        this.y += -10;
        this.y = constrain(this.y, this.height/2 + 10, height - this.height/2 - 10);

      }
      if (keyIsDown(83)){
        this.y += 10;
        this.y = constrain(this.y, this.height/2 + 10, height - this.height/2 - 10);
      }
    }else{
      if (keyIsDown(38)){
        this.y += -10;
        this.y = constrain(this.y, this.height/2 + 10, height - this.height/2 - 10);
      }
      if (keyIsDown(40)){
        this.y += 10;
        this.y = constrain(this.y, this.height/2 + 10, height - this.height/2 - 10);
      }
    }
  }

  this.hits = function(Ball, a){
    if(Ball.y > this.y - this.height /2 - Ball.r && Ball.y < this.y + this.height /2 + Ball.r){

      if (a == 1 && Ball.x - Ball.r < this.x + this.width/2 && Ball.x + Ball.r > this.x - this.width/2){
        var angle = map(Ball.y, this.y + this.height/2, this.y - this.height/2, 45,-45 );
        Ball.xSpeed =Ball.speed*cos(radians(angle));
        Ball.ySpeed =Ball.speed*sin(radians(angle));
      }

      if (a == 2 && Ball.x + Ball.r > this.x - this.width/2 && Ball.x - Ball.r < this.x + this.width/2){
        var angle = map(Ball.y, this.y + this.height/2, this.y - this.height/2, 135,225 );
        Ball.xSpeed =Ball.speed*cos(radians(angle));
        Ball.ySpeed =Ball.speed*sin(radians(angle));
      }
    }
  }


}
