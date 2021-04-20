
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var elephant, elephantImg
var poacher, poacherImg
var backgroundImg
var groundImg
var fh, fhImg
var invisibleGround 
function preload(){
	
elephantImg = loadAnimation("sprites/0.png","sprites/1.png","sprites/2.png","sprites/3.png","sprites/4.png","sprites/5.png")
fhImg = loadImage("sprites/FH.png")
backgroundImg = loadImage("sprites/BG.png")
groundImg = loadImage("sprites/ground.webp")
poacherImg = loadImage("sprites/poacher.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    invisibleGround = createSprite(400,826,900,100)
	invisibleGround.scale = 1.5
	invisibleGround.x = invisibleGround.width/2
	invisibleGround.visible = true 
	
	fh = createSprite(200,529,50,50);
	fh.scale = 0.125
    elephant = createSprite(300,550,50,50)
	
    poacher = createSprite(350,520,80,140)	 
	
	poacher.addImage("pacher", poacherImg) 
	poacher.scale =  1.5

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  
 invisibleGround.velocityX = -1
 background.velocityX = -1

 if(keyDown("RIGHT_ARROW")){
 elephant.x = elephant.x + 4 

 }

elephant.velocityY += 10
 if(keyDown("LEFT_ARROW")){
	elephant.x = elephant.x - 4 
   
	}

 
	if(keyWentDown("UP_ARROW")){
		elephant.y += -200
	   
		}

 if(invisibleGround.x < 350){
	 invisibleGround.x = invisibleGround.width/2
 }
 
  fh.addImage("fhImg",fhImg)
   elephant.addAnimation("elephant",elephantImg)
 elephant.collide(invisibleGround)
 
 invisibleGround.addImage('ground', groundImg)


 drawSprites();
 
}



