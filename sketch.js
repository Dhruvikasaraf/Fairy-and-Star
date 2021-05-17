var starImg,bgImg;
var star, starBody;
var fairy;
var fairyImage;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImage=loadImage("images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);
	fairy=createSprite(400,400);
	fairy.addImage(fairyImage);
	fairy.scale=0.4;
     fairy.debug=true;
	 fairy.setCollider("rectangle",500,-17,50,50);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
if(fairy.isTouching(star)){
	Matter.Body.setStatic(starBody,true);	
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-10;
	}
	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+10;
	}
	
}
