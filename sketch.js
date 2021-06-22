const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerbase = new ComputerBase(1100,random(450,height-380),180,150);
   computerplayer = new ComputerPlayer(1095,computerbase.body.position.y-145,50,180);

   playerbase = new PlayerBase(300,random(450,height-300),180,150);
   player = new Player(305,playerbase.body.position.y-145,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
   playerbase.display();
   //display Player and computerplayer
   computerplayer.display();
   player.display();

}
