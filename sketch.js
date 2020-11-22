const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin,ground;
var counter;
var c = 0
var no,noImage;
function preload()
{
	noImage = loadImage("na.png")
}

function setup() {
	createCanvas(850, 400);
	engine = Engine.create();
	world = engine.world;
	no = createSprite(425,200,850,400)
	no.addImage(noImage)
	ball=new Ball(75,300);
	ground=new Ground(600,380,1200,20);
	side1=new Dustbin(600,310,20,100);
	side2=new Dustbin(800,310,20,100);
side3=new Dustbin(700,350,200,20);
counter = createSprite(20,20,50,15)

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  side1.display();
  side2.display();
  side3.display();
  ground.display();

  if(keyWentDown("c")&& counter.width < 100){

counter.width = counter.width + 10

  }

  
if(keyDown("Enter")){
no.visible = false

}


  
  drawSprites();
}
function keyPressed(){ 
	


		if(keyCode === UP_ARROW&&counter.width === 50){
			Body.applyForce(ball.body,ball.body.position,{x:22,y:-22}); 
			
		   } 
		   if(keyCode === UP_ARROW&&counter.width === 60){
			Body.applyForce(ball.body,ball.body.position,{x:35,y:-35}); 
			
		   } 

		   if(keyCode === UP_ARROW&&counter.width === 70){
			Body.applyForce(ball.body,ball.body.position,{x:42,y:-42}); 
			
		   } 
		   if(keyCode === UP_ARROW&&counter.width === 80){
			Body.applyForce(ball.body,ball.body.position,{x:55,y:-55}); 
			
		   } 

		   if(keyCode === UP_ARROW&&counter.width === 90){
			Body.applyForce(ball.body,ball.body.position,{x:65,y:-65}); 
			
		   } 
		   if(keyCode === UP_ARROW&&counter.width === 100){
			Body.applyForce(ball.body,ball.body.position,{x:75,y:-75}); 
			
		   } 
	}

