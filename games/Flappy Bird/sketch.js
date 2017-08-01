var pipe;
var pipes = [];
var totalScore = 0;
function setup() {
    createCanvas(400,600);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    if(bird.lives()){
        background(116,197,204);
        bird.show();
        bird.update();
        for(var i = 0; i < pipes.length; i++){
            pipes[i].show();
            pipes[i].update();

            if (bird.hits(pipes[i])){
                console.log("HIT");
            } 
        }
        for(var i = 0; i < pipes.length; i++){
            if (pipes[i].outOfScreen()){
                console.log("OUT");
                pipes.splice(i,1);
                totalScore++;
            }
        }
                
        for(var i = 0; i < pipes.length; i++){
            if (pipes[i].outOfScreen()){
                bird.evaded(pipes[i]);
            }
        }
        displayScore();
        

        if(frameCount % 120 == 0){
            pipes.push(new Pipe());
        }
    }else{
        background(116,197,204);
        console.log(totalScore);
        textSize(100);
        textAlign(CENTER);
        noStroke();
        fill(241,185,43);
        text(totalScore,0,width/2 + 50,width + 25,200);
    }
}  

function keyPressed(){
    if (key == ' '){
        bird.flap();
        console.log("FLAP");
    }
    if (keyCode === ENTER && bird.lives() == false){
        //console.log("RRR");
        pipes.splice(0,2);
        bird.respawn();
    }
}

function displayScore(){
    
    textSize(60);
    textAlign(CENTER);
    stroke(0);
    strokeWeight(7);
    fill(255);
    text(totalScore,0,0,width + 25,200);   
}