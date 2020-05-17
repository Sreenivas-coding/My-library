var object1, object2, object3, object4
function setup() {
  createCanvas(800,400);
   object1 = createSprite(100,200, 60, 60);
  object1.shapeColor="green"
  object1.velocityX=2
   object2 = createSprite(200,200,60,60);
  object2.shapeColor="blue"
  object2.velocityX=-2
  object3 = createSprite(300,200,60,60);
  object3.shapeColor="yellow"
  object3.velocityY=-3
  object4 = createSprite(400,200,60,60);
  object4.shapeColor="purple"
}

function draw() {
  background(255,255,255);
  object4.x=mouseX;
  object4.y=mouseY;
  bounceOff(object1,object2);
  bounceOff(object3,object4);
  bounceOff(object1,object3);
  bounceOff(object1,object4);
  if(isTouching(object1,object2)){
  object1.shapeColor="black"
  }
  drawSprites();
}
