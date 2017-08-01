function Pipe() {
    
    this.x = 450;
    this.width = 120;
    this.speed = -3;
    this.holeSize = 200;
    this.holeHeight = random(40 + this.holeSize/2, height - 40 - this.holeSize/2);
    this.alredyEvaded = false;
    
    this.update = function(){
        this.x += this.speed;
    }
    
    this.show = function(){
        fill(101,180,50);
        noStroke();
        rectMode(CORNERS);    
        rect(this.x, 0, this.x + this.width, this.holeHeight - this.holeSize/2);
        rect(this.x, this.holeHeight + this.holeSize/2, this.x + this.width, height);   
    }
    
    this.getX = function(){
        return(this.x);
    }
    
    this.getWidth = function(){
        return(this.width);
    }
    
    this.getHoleSize = function(){
        return(this.holeSize);
    }
    
    this.getHoleHeight = function(){
        return(this.holeHeight);
    }
    
    this.outOfScreen = function(){
        if (this.x < -this.width){
            return(true);
        }else{
            return(false);    
        }
    }
    
    this.evaded =function(){
        return(this.alredyEvaded);
    }
    
    this.gotEvaded =function(){
        this.alredyEvaded = true;
    }

} 