var car;
var wall;
var speed;
var waight;



function setup() {
  createCanvas(1600,400);
  
  car=createSprite(50,200,60,60);
  wall=createSprite(1500,200,60,height/2);

  
  
  speed=random(55,90);
  weight=random(400,1500);

}

function draw() {
  background(55);  
  car.velocityX=speed;
  car.collide(wall);

if(wall.x-car.x <=(car.width+wall.width)/2){

car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22500;
if(deformation>180){
car.shapeColor=color(255.0,0);
}

if(deformation<180 && deformation>100){
  car.shapeColor=color(230,230,0);
}

if(deformation<100){
  car.shapeColor=color(0,255,0);
}

}

  drawSprites();
}