var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 o1 = createSprite(200, 600, 30, 30);
 o1.shapeColor="white";
 o2 = createSprite(400, 600, 30, 30);
 o2.shapeColor="white";
 o3 = createSprite(200, 150, 30, 30);
 o3.shapeColor="white";
 o4 = createSprite(200, 450, 30, 30);
 o4.shapeColor="white";



}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, o4)){

    movingRect.shapeColor = "red";
    o4.shapeColor = "red";

  } else{  
    movingRect.shapeColor = "green";
    o4.shapeColor = "green";
  }

  

  drawSprites();
}

function isTouching( p1, p2){


  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
  return true;
}
else {
  return false;
}


}