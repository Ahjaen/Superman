
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg
var ball, ballImage

function preload(){
  ballImage = loadImage("images/Superhero-01.png")
  bg = loadImage("images/GamingBackground.png")
}


function setup() {
  var canvas = createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300,480,800,10)
  platform = new Ground(800,300,100,10)

  b1 = new Box(560,430,100,100)
  b2 = new Box(560,330,100,100)
  b3 = new Box(560,230,100,100)
  b4 = new Box(560,130,100,100)

  b5 = new Box(460,430,100,100)
  b6 = new Box(460,330,100,100)
  b7 = new Box(460,230,100,100)
  b8 = new Box(460,130,100,100)

  ball = new Ball(100,300,40)

  string = new Sling(ball.body,{x:250,y:50})

  monster = new Monster(800,250,40,40)

}

function draw() {
  background(bg);  
  Engine.update(engine)

  ground.display()
  fill("white")
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()

  fill("white")
  b6.display()
  b7.display()
  b8.display()

  string.display()

  noStroke()
  ball.display()
  monster.display()

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}