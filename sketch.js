var canvas;
var music;
var rect,rect2,rect3,rect4;
var ball;
var Edges;

function preload(){
    music = loadSound("pink.wav");
    music2 = loadSound("blue.wav");
    music3 = loadSound("yellow.wav");
    music4 = loadSound("green.wav");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
 rect=createSprite(190,10,100,20);
 rect.shapeColor="pink";

 rect2=createSprite(190,390,100,20);
 rect2.shapeColor="yellow";

 rect3=createSprite(10,190,20,100);
 rect3.shapeColor="green";

 rect4=createSprite(390,190,20,100);
 rect4.shapeColor="blue";
    //create box sprite and give velocity
 ball=createSprite(200,200,30,30,);
 ball.shapeColor="white";
}

function draw() {
    background("black");

    if(rect.isTouching(ball) && ball.bounceOff(rect)) {
        ball.shapeColor = "pink";
      //  ball.velocityY=0;
        music.play();
       
      }
      
      

      if(rect2.isTouching(ball) && ball.bounceOff(rect2)) {
        ball.shapeColor = "yellow";
       // ball.velocityY=0;
        music3.play();
        
      }
      
      if(rect3.isTouching(ball) && ball.bounceOff(rect3)) {
        ball.shapeColor = "green";
        //ball.velocityX=0;
        music4.play();
        
      }
     
    

      if(rect4.isTouching(ball) && ball.bounceOff(rect4)) {
        ball.shapeColor = "blue";
        //ball.velocityX=0;
        music2.play();
        
      }
     
      
    //create edgeSprite
    Edges=createEdgeSprites();
   // ball.collide(Edges);
   if(Edges.isTouching(ball) && ball.bounceOff(Edges)){
      
    }

drawSprites();

    //add condition to check if box touching surface and make it box
}

/*function isTouching(rect, ball)
 { 
     if (ball.x - rect.x < rect.width/2 + ball.width/2 &&
     rect.x - ball.x < rect.width/2 + ball.width/2 &&
     ball.y - rect.y < rect.height/2 + ball.height/2 &&
     rect.y - ball.y < rect.height/2 + ball.height/2) 
     { 
           return true;
     }
      else
       { 
           return false;
         } 

    /*if(rect.isTouching(ball)){
      ball.shapeColor="pink";
      ball.velocity=0,0;
      music.play();
    }
 }*/

 function keyPressed(){
  if(keyCode===LEFT_ARROW){
     ball.velocityX=-2;
    }

  if(keyCode===RIGHT_ARROW){
     ball.velocityX=2;
    }
       
  if(keyCode===UP_ARROW){
     ball.velocityY=-2;
    }

  if(keyCode===DOWN_ARROW){
     ball.velocityY=2;
    }
}