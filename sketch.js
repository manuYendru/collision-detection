var fixedRect, movingRect;
var gobj1, gobj2, gobj3;

function setup() {
  createCanvas(1200,800);
 
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.debug = true;
  gobj1 = createSprite(100,200,50,50);
  gobj1.shapeColor = "green";
  gobj2 = createSprite(200,200,50,50);
  gobj2.shapeColor = "green";
 
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

   if (isTouching(movingRect, gobj1))
   {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
   }
   else 
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}
function isTouching(gobj1,gobj2){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  return true;
}
else {
  return false;
}

}