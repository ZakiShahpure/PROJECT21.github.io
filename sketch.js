
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var left, right, ground;

function preload()
{
	
}

function setup() {
	createCanvas(2500, 1100);
    
	engine = Engine.create();
	world = engine.world;
	
	groundObj = new Ground(width/2,670,width,20);
	left = new Ground(2300,600,20,120);
	right = new Ground(2000,600,20,120);
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,200,20,ball_options);
	World.add(world, ball);


	Engine.run(engine);
	
	
	}


function draw() {
  background(0);
  drawSprites();
  groundObj.show();
  left.show();
  right.show();
  ellipse(ball.position.x, ball.position.y, 100);

}

function keyPressed(){

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {
			x:85, y:-85
		})
	}
}




