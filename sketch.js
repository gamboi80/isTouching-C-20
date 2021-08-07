var FixRect, MovingRect

function setup() {
  createCanvas(800,400);
  
  FixRect = createSprite(200,200,50,50);
  FixRect.shapeColor="red"
  MovingRect = createSprite(400,200,80,80);
  MovingRect.shapeColor="red"
}

function draw() {
  background(255,255,255);

  console.log(MovingRect.y-FixRect.y);
  MovingRect.y=World.mouseY;
  MovingRect.x=World.mouseX;

  

  
  isTouching();

  drawSprites();
}


  function isTouching(){
    if(MovingRect.x-FixRect.x<FixRect.width/2+MovingRect.width/2 && FixRect.x-MovingRect.x<FixRect.width/2+MovingRect.width/2 &&
      MovingRect.y-FixRect.y<FixRect.height/2+MovingRect.height/2 && FixRect.y-MovingRect.y<FixRect.height/2+MovingRect.width/2){
      MovingRect.shapeColor="green";
      FixRect.shapeColor="green";
    }else{
      MovingRect.shapeColor="red";
      FixRect.shapeColor="red";
    }
  }
