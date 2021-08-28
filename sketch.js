var form;
var hallway

function preload(){

  hallway = loadImage("hallway.jpg")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);
  form = new Form();

}

function draw() {
  background(hallway);  
  drawSprites();
  form.display();
}