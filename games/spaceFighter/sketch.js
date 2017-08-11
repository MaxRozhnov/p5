var plane;
var stars = [];
var enemies = [];
var planePic;
var eBulletPic;
var pBulletPic;
var enemyPic;
var mouseDist;
var bullets = [];
var enemyBullets = [];
var scale = 2.5;

function preload(){
  planePic = loadImage("sprites/planeFly.png");
  eBulletPic = loadImage("sprites/EBullet.png");
  pBulletPic = loadImage("sprites/PBullet.png");
  enemyPic = loadImage("sprites/enemy.png");

}
function setup() {
  createCanvas(360,640);
  CreateEnemyCluster(2);


  plane = new Plane();
  for(var i = 0; i < 50; i++){
    stars.push(new Star(random(width),random(height)));
  }
}

function draw() {

  background(0);
  if (frameCount % 280 == 0){
    CreateEnemyCluster(floor(random(2))+1);
  }
  for(var i = 0; i < stars.length; i++){
    stars[i].show();
    stars[i].update();
  }

  showBullets();
  showEnemyBullets();
  plane.show();
  plane.update();
  plane.shoot();
  plane.checkCollisions();

  checkPlaneHits();

  checkEnemyHits();

  destroyEnemies();
  destroyBullets();
  destroyEBullets();

  for(var i = 0; i < enemies.length; i++){
    if (enemies[i].alive){
      enemies[i].show();
      enemies[i].update();
    }
  }
}

function mousePressed(){

}

function checkPlaneHits(){

    for(var i = 0; i < enemyBullets.length; i++){
      if (enemyBullets[i].alive && plane.hits(enemyBullets[i])){
        plane.hp -= 10;
        enemyBullets[i].alive = false;

        console.log(plane.hp);
      }
    }
}

function showBullets(){
  for(var i = 0; i < bullets.length; i++){
    bullets[i].show();
    bullets[i].update();
    bullets[i].visible()
  }
}

function showEnemyBullets(){
  for(var i = 0; i < enemyBullets.length; i++){
    enemyBullets[i].show();
    enemyBullets[i].update();
    enemyBullets[i].visible()
  }
}

function checkEnemyHits(){
  for(var i = 0; i < enemies.length; i++){
    for(var j = 0; j < bullets.length; j++){
      if (enemies[i] && enemies[i].hits(bullets[j])){
        enemies[i].alive = false;
        bullets[j].alive = false;
      }
    }
  }
}

function destroyEnemies(){
  var i = 0;
  while (i < enemies.length){
    if(!enemies[i].alive){
      enemies.splice(i,1);
    }else{
      i++;
    }
  }
}

function destroyBullets(){
  var i = 0;
  while (i < bullets.length){
    if(!bullets[i].alive){
      bullets.splice(i,1);
    }else{
      i++;
    }
  }
}

function destroyEBullets(){
  var i = 0;
  while (i < enemyBullets.length){
    if(!enemyBullets[i].alive){
      enemyBullets.splice(i,1);
    }else{
      i++;
    }
  }
}
