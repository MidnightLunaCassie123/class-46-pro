var backgroundImg;
var Hana;
var ninja;
var OldMan;
var Flower;

var boundary1,boundary2,boundary3,boundary4,boundary5,boundary6,boundary7,boundary8,boundary9,boundary10;
var boundary11,boundary12,boundary13,boundary14,boundary15,boundary16,boundary17,boundary18,boundary19,boundary20;
var boundary21,boundary22,boundary23,boundary24,boundary25,boundary26,boundary27;

function preload(){
 backgroundImg=loadImage("background.png")
 Hana=loadImage("Hana.png")
 ninja=loadImage("Ninja.png")
 OldMan=loadImage("Oldman.png")
 Flower=loadImage("SakuraFlower.png")
 
}

function setup(){
  createCanvas(850,600)

//making Hana
Girl=createSprite(50,300,10,10);
Girl.addImage(Hana);
Girl.scale=0.35;
Girl.debug=true;
Girl.setCollider("rectangle",0,0,100,150)

//Making the old man
Man=createSprite(800,300,10,10);
Man.addImage(OldMan);
Man.scale=0.37;

//Making flowers
flower1=createSprite(440,330,20,20)
flower1.addImage(Flower)
flower1.scale=0.25

flower2=createSprite(420,80,20,20)
flower2.addImage(Flower)
flower2.scale=0.25

flower3=createSprite(440,415,20,20)
flower3.addImage(Flower)
flower3.scale=0.25

flower4=createSprite(330,485,20,20)
flower4.addImage(Flower)
flower4.scale=0.25

flower5=createSprite(750,70,20,20)
flower5.addImage(Flower)
flower5.scale=0.25

flower6=createSprite(250,75,20,20)
flower6.addImage(Flower)
flower6.scale=0.25

flower7=createSprite(250,485,20,20)
flower7.addImage(Flower)
flower7.scale=0.25

flower8=createSprite(160,410,20,20)
flower8.addImage(Flower)
flower8.scale=0.25

flower9=createSprite(680,420,20,20)
flower9.addImage(Flower)
flower9.scale=0.25

flower10=createSprite(680,250,20,20)
flower10.addImage(Flower)
flower10.scale=0.25
//Making outside boundarys of the game.

boundary1 = createSprite(420,30,760,5);
boundary1.shapeColor = "white";

boundary2 = createSprite(40,120,5,200);
boundary2.shapeColor = "white";

boundary3 = createSprite(95,220,220,5);
boundary3.shapeColor = "white";

boundary4 = createSprite(800,120,5,200);
boundary4.shapeColor = "white";

boundary5 = createSprite(825,220,100,5);
boundary5.shapeColor = "white";

boundary6 = createSprite(15,350,100,5);
boundary6.shapeColor = "white";

boundary7 = createSprite(40,440,5,180);
boundary7.shapeColor = "white";

boundary8 = createSprite(420,525,760,5);
boundary8.shapeColor = "white";

boundary9 = createSprite(800,440,5,175);
boundary9.shapeColor = "white";

boundary10 = createSprite(825,350,100,5);
boundary10.shapeColor = "white";

//Inside boundrys
boundary11 = createSprite(420,450,600,5);
boundary11.shapeColor = "white";

boundary12 = createSprite(205,375,5,150);
boundary12.shapeColor = "white";

boundary13 = createSprite(300,487,5,80);
boundary13.shapeColor = "white";

boundary14 = createSprite(390,370,180,5);
boundary14.shapeColor = "white";

boundary15 = createSprite(477,370,5,157);
boundary15.shapeColor = "white";

boundary16 = createSprite(392,290,170,5);
boundary16.shapeColor = "white";

boundary17 = createSprite(640,290,160,5);
boundary17.shapeColor = "white";

boundary18 = createSprite(560,370,170,5);
boundary18.shapeColor = "white";

boundary19 = createSprite(720,410,5,80);
boundary19.shapeColor = "white";

boundary20 = createSprite(500,210,170,5);
boundary20.shapeColor = "white";

boundary21 = createSprite(420,250,5,80);
boundary21.shapeColor = "white";

boundary22 = createSprite(210,110,170,5);
boundary22.shapeColor = "white";

boundary23 = createSprite(293,128,5,190);
boundary23.shapeColor = "white";

boundary24 = createSprite(720,162,5,260);
boundary24.shapeColor = "white";

boundary25 = createSprite(587,162,5,100);
boundary25.shapeColor = "white";

boundary26 = createSprite(370,82,5,100);
boundary26.shapeColor = "white";

boundary27 = createSprite(440,130,140,5);
boundary27.shapeColor = "white";









 
}

function draw(){
  background(backgroundImg)
 
  if(keyDown(UP_ARROW)){
    Girl.y-=3
  }

  if(keyDown(DOWN_ARROW)){
    Girl.y+=3
  }

  if(keyDown(RIGHT_ARROW)){
    Girl.x+=3
  }

  if(keyDown(LEFT_ARROW)){
    Girl.x-=3
  }

  //Bounce off

Girl.bounceOff(boundary1);
Girl.bounceOff(boundary2);
Girl.bounceOff(boundary3);
Girl.bounceOff(boundary4);
Girl.bounceOff(boundary5);
Girl.bounceOff(boundary6);
Girl.bounceOff(boundary7);
Girl.bounceOff(boundary8);
Girl.bounceOff(boundary9);
Girl.bounceOff(boundary10);
Girl.bounceOff(boundary11);
Girl.bounceOff(boundary12);
Girl.bounceOff(boundary13);
Girl.bounceOff(boundary14);
Girl.bounceOff(boundary15);
Girl.bounceOff(boundary16);
Girl.bounceOff(boundary17);
Girl.bounceOff(boundary18);
Girl.bounceOff(boundary19);
Girl.bounceOff(boundary20);
Girl.bounceOff(boundary21);
Girl.bounceOff(boundary22);
Girl.bounceOff(boundary23);
Girl.bounceOff(boundary24);
Girl.bounceOff(boundary25);
Girl.bounceOff(boundary26);
Girl.bounceOff(boundary27);
  

  

  
drawSprites()
}





