var block1,block2,block3,block4,block5;
function setup() {
  createCanvas(800,400);
  block1 = createSprite(400, 200, 50, 50);
  block2 = createSprite(400,200,50,50);
  block3=createSprite(230,200,30,30);
  block4 = createSprite(530,200,30,30);
  block5= createSprite(650,200,40,40);
  block1.shapeColor="green";
  block2.shapeColor="red";
  block3.shapeColor="green";
  block4.shapeColor="green";
  block5.shapeColor="green";
}

function draw() {
  background(0);
    block2.y = mouseY;
    block2.x = mouseX;

    if(isTouching(block1,block2)){
  block1.shapeColor="yellow";

    }
    else if(isTouching(block2,block3)){
      block3.shapeColor="yellow";
      
    }
    else if(isTouching(block2,block4)){
      block4.shapeColor="yellow";
      
    }
    else if(isTouching(block2,block5)){
      block5.shapeColor="yellow";
      
    }
    else{
      block1.shapeColor="green";
      block4.shapeColor="green";
      block3.shapeColor="green";
      block5.shapeColor="green";
    }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object1.width/2+object2.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object1.height/2+object2.height/2){
    return true;
  }
  else {
    return false;
  }

}