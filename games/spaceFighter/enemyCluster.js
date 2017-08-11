function CreateEnemyCluster(type){
  console.log(type);
  if (type == 1){
    for(var i = 1; i < 3; i++){
      for(var j = 1; j < 9; j++){
        w = width/9;
        console.log();
        h = -40;
        enemies.push(new Enemy(w*j,h*i));
      }

    }
  }

  if (type == 2){
    for(var i = 1; i < 4; i++){
      for(var j = 1; j < 9; j++){
        w = width/9;
        console.log();
        h = -40;
        if (j!=4 && j!= 5){
          enemies.push(new Enemy(w*j,h*i));
        }
      }

    }
  }


}
