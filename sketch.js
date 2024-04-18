
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var radius = 50;
var groundobj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 850);

	var ball_options ={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200, 500, radius/2, ball_options)
	World.add(world, ball)
	groundobj = new ground(width/2,670,width,20);
	leftSide = new ground(1100,600, 20, 120);
	rightSide = new ground(1300,600, 20, 120);

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, radius, radius)
  groundobj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85, y:-85});
	}
}