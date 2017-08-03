function Rocket(dna){
  if (dna){
      this.dna = dna ;
  }else{
      this.dna = new DNA();
  }
  this.time = 0;
  //this.trail =[];
  this.reached = false;
  this.crashed = false;
  this.pos = createVector(width/2,height);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);



  this.fitness = 0;

  this.lived = 0;

  this.applyForce = function(force){
    this.acc.add(force);
  }

  this.update = function(){
    var d = dist(this.pos.x,this.pos.y,target.x,target.y);
    if (d < 10){
      this.reached = true;
    }

    if (this.pos.x > width || this.pos.x < 0){
      this.crashed = true;
    }
    if(this.pos.y > height || this.pos.y < 0){
      this.crashed = true;
    }
    for(var i = 0; i < walls.length; i++){
      walls[i].hits(this);
    }


    this.applyForce(this.dna.genes[lived]);

    if(!this.reached && !this.crashed){
    this.time++;
    //this.trail.push(this.pos);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    }
  }

  this.show = function(){
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.vel.heading());
    fill(255);
    noStroke();
    triangle(10,  0, -5 , -5 , -5, +5);
    pop();
  }

  this.calcFitness = function(){
    d = dist(this.pos.x,this.pos.y,target.x,target.y);
    this.fitness = map(d,0,width,width,0);
    if (this.reached){
      var speedMult = map(this.time,life,0,1,10);
      this.fitness *= 10 + speedMult;
    }
    if(this.crashed){
      this.fitness /= 15;
    }
  }


}
