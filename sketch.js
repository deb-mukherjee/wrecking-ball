const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
var engine,world;



function setup() {
  createCanvas(1200,800);
  
  engine = Engine.create()
  world = engine.world;

  ground = new Ground(600,780,1200,20);
  
  ball = new Ball(500,400,50);

  box1 = new Box(100,20,50,50);
  box2 = new Box(1000,20,50,50);
  box3 = new Box(1000,20,50,50);
  box4 = new Box(1000,20,50,50);
  box5 = new Box(1000,20,50,50);
  box6 = new Box(1000,20,50,50);
  box7 = new Box(1000,20,50,50);
  box8 = new Box(1050,20,50,50);
  box9 = new Box(1060,20,50,50);
  box10 = new Box(1060,20,50,50);
  box11 = new Box(1060,20,50,50);
  box12 = new Box(1060,20,50,50);
  box13 = new Box(1060,20,50,50);
  box14 = new Box(1060,20,50,50);
}

function draw() {
  background("grey");
  Engine.update(engine) 
  
  ground.display();

  ball.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
}