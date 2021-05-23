const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup(){
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground();
  box1 = new Box(300,250);
  box2 = new Box(300,250);
  box3 = new Box(300,250);
  box4 = new Box(300,250);
  box5 = new Box(300,250);
  box6 = new Box(100,250);
  box7 = new Box(100,250);
  box8 = new Box(100,250);
  box9 = new Box(100,250);
  box10 = new Box(100,250);
  ball = new Ball(500,275,30);
  rope1=new Rope(ball.body,{x:700, y:50});
  
  Engine.run(engine);
}

function draw(){
  background("green");
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  ball.display();
  rope1.display();

}