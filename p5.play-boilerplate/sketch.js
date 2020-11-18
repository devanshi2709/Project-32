const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var ground,base1,base2;
var box1,box2,box3,box4,box5,box6;
var hitter,hitterImg,sling;
var sling2;

var score= 0;

function preload(){

hitterImg= loadImage("th.jpeg")
//hitter.addImage("hitter",hitterImg);
}


function setup() {
  createCanvas(1200,700);

  engine= Engine.create();
  world = engine.world;

  ground= new Ground(600,680,1200,20);
  base1= new Ground(500,425,250,20);
  base2= new Ground(800,225,250,20);
  
  box1= new Box(410,400,30,30);
  box2= new Box(440,400,30,30);
  box3= new Box(470,400,30,30);
  box4= new Box(500,400,30,30);
  box5= new Box(530,400,30,30);
  box6= new Box(560,400,30,30);
  box7= new Box(590,400,30,30);
  
  box8= new Box(440,370,30,30);
  box9= new Box(470,370,30,30);
  box10= new Box(500,370,30,30);
  box11= new Box(530,370,30,30);
  box12= new Box(560,370,30,30);

  box13= new Box(470,340,30,30);
  box14= new Box(500,340,30,30);
  box15= new Box(530,340,30,30);

  box16= new Box(500,310,30,30);


  box17= new Box(710,200,30,30);
  box18= new Box(740,200,30,30);
  box19= new Box(770,200,30,30);
  box20= new Box(800,200,30,30);
  box21= new Box(830,200,30,30);
  box22= new Box(860,200,30,30);
  box23= new Box(890,200,30,30);
  
  box24= new Box(740,170,30,30);
  box25= new Box(770,170,30,30);
  box26= new Box(800,170,30,30);
  box27= new Box(830,170,30,30);
  box28= new Box(860,170,30,30);

  box29= new Box(770,140,30,30);
  box30= new Box(800,140,30,30);
  box31= new Box(830,140,30,30);

  box32= new Box(800,140,30,30);


  hitter= Bodies.circle(50,200,20,{density:20});
  World.add(world,hitter);

  
  sling= new Slingshot(this.hitter,{x:100,y:200});
 
}

function draw() {
  background(0,255,210);
  Engine.update(engine);

  text("SCORE :  "+score,750,40);
  
  ground.display(); 

  base1.display();
  base2.display();

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
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();

  box24.display();
  box25.display();
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();

  box31.display();

  box32.display();
 

  sling.display();


  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();

  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();

  box13.score();
  box14.score();
  box15.score();

  box16.score();


  
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();

  box24.score();
  box25.score();
  box26.score();
  box27.score();

  box28.score();
  box29.score();
  box30.score();

  box31.score();

  box32.score();  

  imageMode(CENTER);
  image(hitterImg, hitter.position.x,hitter.position.y,40,40);

//console.log(box1);

  drawSprites();

  strokeWeight(5);
  text("Press space to unleash a new invisible sling",800,400);
}


function mouseDragged(){
  
  Matter.Body.setPosition(hitter,{x:mouseX,y:mouseY});
  

}


function mouseReleased(){
  sling.fly();
  sling2.fly();
}

function keyPressed(){

  if(keyCode===32){

   sling2 = new Slingshot(this.hitter,{x:100,y:200});
    //World.add(world,sling1);

   sling.attach(hitter);

  }

}

async function getTime(){

    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;

    var hour= datetime.slice(11,13);

    if(hour>=06 && hour<= 18){

      background(0,255,215);

    }else{

      background(0);
    }

}