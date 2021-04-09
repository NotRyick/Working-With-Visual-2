var fixedRectangle , movingRectangle


function setup() {
  createCanvas(800,400);
  
  fixedRectangle = createSprite(400,200,30,20)
  fixedRectangle.shapeColor=("magenta")

  movingRectangle = createSprite(200,300,20,30)
  movingRectangle.shapeColor=("magenta")
  
}

function draw() {
  background("black");  

movingRectangle.x = mouseX
movingRectangle.y = mouseY

console.log(movingRectangle.x-fixedRectangle.x)

if (movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2 &&
  fixedRectangle.x-movingRectangle.x<movingRectangle.width/2+fixedRectangle.width/2 &&
  movingRectangle.y-fixedRectangle.y<fixedRectangle.height/2+movingRectangle.height/2 &&
  fixedRectangle.y-movingRectangle.y<movingRectangle.height/2+fixedRectangle.height/2 ){
  movingRectangle.shapeColor=("white")
  fixedRectangle.shapeColor=("white")
}
else {
  fixedRectangle.shapeColor=("magenta")
  movingRectangle.shapeColor=("magenta")

}
  drawSprites();
} 