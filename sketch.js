var garden,rabbit;
var gardenImg,rabbitImg;
var appleimage
var leaveimage

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage = loadImage("apple.png")
  leaveimage = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  spawnapples();
  spawnleave();
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  drawSprites();
}

function spawnapples(){
  // write your code here 
 if(frameCount %100 === 0)
 {
   apple = createSprite (350,40,10,10)
   apple.velocityY = 3
   apple.x = Math.round(random(10,350))
   apple.addImage(appleimage)
   apple.scale = 0.1
   apple.lifetime = 210
 }
 }
 function spawnleave(){
  // write your code here 
 if(frameCount %60 === 0)
 {
  leave = createSprite (350,40,10,10)
  leave.velocityY = 3
  leave.x = Math.round(random(10,350))
  leave.addImage(leaveimage)
  leave.scale = 0.1
  leave.lifetime = 210
 }
 }