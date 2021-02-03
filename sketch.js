var fixr 
var movingr

function setup() {
  createCanvas(800,400);
  fixr = createSprite(400, 200, 50, 50);
  fixr.velocityX =5
  fixr.shapeColor=("lime")
movingr = createSprite(800,200,50,80)
movingr.shapeColor=("red")
movingr.velocityX=-5
}

function draw() {
  background(0);  
  drawSprites();

//  movingr.x = mouseX
//movingr.y = mouseY
  
if(movingr.x - fixr.x <= fixr.width/2 + movingr.width/2 
  && fixr.x - movingr.x <= fixr.width/2 + movingr.width/2 &&
  movingr.y - fixr.y <= fixr.height/2 + movingr.height/2 
  && fixr.y - movingr.y <= fixr.height/2 + movingr.height/2 ){
    //movingr.shapeColor="blue"
    movingr.velocityX = movingr.velocityX*-1
    fixr.velocityX = fixr.velocityX*-1
  }else
  movingr.shapeColor="red"

}