var bullet,wall;

var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  bullet=createSprite(50, 200, 60, 8);
  bullet.shapeColor=color("white");

  weight=random(30,52);
  speed=random(223,321);
  thickness=random(22,83);

  wall=createSprite(1200,height/2,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);

  
}

function draw() {
  background("black");  

  
  bullet.velocityX=speed;

  if(hasCollided(bullet,wall)){

    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    
      bullet.velocityX=0;

      if(damage>10){
        wall.shapeColor=color(255,0,0);
      } 
      if(damage<10){
        wall.shapeColor=color(0,255,0);
      }
 
  }

  drawSprites();
}

function hasCollided(bullet,wall){
  var bulletRightEdge=bullet.x+bullet.width;
  var wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}