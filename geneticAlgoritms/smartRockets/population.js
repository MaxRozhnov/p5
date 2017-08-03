function Population(){
  this.rockets =[];
  this.matingPool =[];
  this.size = 100;
  for(var i = 0; i < this.size; i++){
    this.rockets.push(new Rocket);
  }

  this.update = function(){
    for(var i = 0; i < this.size; i++){
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }

  this.evolve = function(){
    var maxfit = 0;
    for(var i = 0; i < this.size; i++){
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxfit){
        maxfit = this.rockets[i].fitness;
      }
    }
    for(var i = 0; i < this.size; i++){
        this.rockets[i].fitness /= maxfit;
    }
    this.matingPool =[];
    for(var i = 0; i < this.size; i++){
      var n = this.rockets[i].fitness * 100;
      for(var j = 0; j < n; j++){
        this.matingPool.push(this.rockets[i]);
      }
    }

  }

  this.selection = function(){
    var children =[];
    for (var i =0; i < this.rockets.length; i++){
      var parentA = random(this.matingPool).dna;
      var parentB = random(this.matingPool).dna;
      var child = parentA.crossover(parentB);
      child.mutation();
      children.push(new Rocket(child));
    }
    this.rockets = children;
  }
}
