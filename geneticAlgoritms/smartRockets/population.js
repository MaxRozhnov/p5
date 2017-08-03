function Population(){
  this.successful = false;

  this.period = 29;

  this.history =[];

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
    generation++;
    console.log(generation);
    this.successful = false;
    var maxfit = 0;
    for(var i = 0; i < this.size; i++){
      if (this.rockets[i].reached){
        this.successful = true;
        mutationRate = 1;
      }
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxfit){
        maxfit = this.rockets[i].fitness;
      }
    }

    this.history.push(maxfit);

    if(this.history.length > this.period){
      this.history.splice(0,1);
      if((this.history[this.period-1]/this.history[0]) - 1 < 1){
        if (!this.successful && mutationRate < 7){
          mutationRate += 2;

          this.history.splice(0,this.period);
          console.log("MutationUP");

        }
      }else if (mutationRate > 1){
        mutationRate += -2;
      }
    }




    for(var i = 0; i < this.size; i++){
        var mult = map(this.rockets[i].fitness,0,maxfit,5,1)
        this.rockets[i].fitness /= maxfit*mult;
    }
    this.matingPool =[];
    for(var i = 0; i < this.size; i++){
      var n = this.rockets[i].fitness * 150;
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
