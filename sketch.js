
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin;
var ball;
function setup(){
    var canvas = createCanvas(1200,400);
	engine = Engine.create();
    world = engine.world;

   ground = new Ground(600,height,1200,20);
   dustbin=new Dustbin(1080,275,20,180);
   dustbin2=new Dustbin(1000,380,180,20);
   dustbin3=new Dustbin(920,275,20,180);
   ball=new Ball(100,100,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    dustbin.display();
    dustbin2.display();
    dustbin3.display();
    ball.display();
    

}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-15});
    }
}

