var bullet,wall;
var speed,weight;


function setup() 
{
  createCanvas(1600,400);
  
  speed=random(30,180)
  weight=random(400,1500)

  thickness=random(22,83)

  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed;
  bullet.shapeColor=("white")

 
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color("white")
 
}


function draw() {
  background("black"); 

if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation=0.5
  var deformation=0.5 * weight * speed * speed/22509;}
    
    if (deformation>180)
    {
      bullet.shapeColor=color("red")
    }
      if(deformation <80)
      {
        bullet.shapeColor=color("green")
      }
       if(deformation <180 && deformation >100)
       {
        bullet.shapeColor=color("yellow")
       }

  drawSprites();
}