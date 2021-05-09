const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);


  //level one
  box1 = new Box(630,175,30,40);
  box2 = new Box(660,175,30,40);
  box3 = new Box(690,175,30,40);
  box4 = new Box(720,175,30,40);
  box5 = new Box(750,175,30,40);
  //level two
  box6 = new Box(645,135,30,40);
  box7 = new Box(675,135,30,40);
  box8 = new Box(705,135,30,40);
  box9 = new Box(735,135,30,40);
  //level three
  box10 = new Box(660,95,30,40);
  box11 = new Box(690,95,30,40);
  box12 = new Box(720,95,30,40);
  //top level
  box13 = new Box(690,55,30,40);
  
  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  //polygon.addImage("polygon.png");
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Drag the Polygon to crash the Tower!",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);


  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("pink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("white");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("skyblue");
  block16.display();
 
  strokeWeight(2);
  stroke(15);
  fill("skyblue")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  fill("turquoise")
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  fill("white")
  box10.display();
  box11.display();
  box12.display();
  fill("pink")
  box13.display();
  imageMode(CENTER)
  imageMode(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged()
{
  Matter.Body.setPosition(this.polygon,{x:mouseX, y:mouseY});
}
function mouseReleased()
{
  slingShot.fly();
}
