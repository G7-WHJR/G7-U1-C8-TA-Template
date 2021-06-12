var ball;
var topEdge, bottomEdge, leftEdge, rightEdge;

function setup() {
  createCanvas(450, 400);

  //ball
  ball = createSprite(150, 250, 15, 15);
  ball.shapeColor = "orange";

  //Bottom Edge
  bottomEdge = createSprite(225, 400, 450, 5);
  bottomEdge.shapeColor = "gray";
  bottomEdge.immovable = true;

  //Left Edge
  leftEdge = createSprite(0, 200, 5, 400);
  leftEdge.shapeColor = "gray";
  leftEdge.immovable = true;

  //Right Edge
  rightEdge = createSprite(450, 200, 5, 400);
  rightEdge.shapeColor = "gray";
  rightEdge.immovable = true;
}

function draw() {
  background("honeydew");

  drawSprites();
}
