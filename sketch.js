var canvas;
var music;
var box1
var box2
var box3
var box4
var box5
var jb
var e

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1 = createSprite(700,550,150,10)
  box1.shapeColor = "green" 
  box2 = createSprite(550,550,150,10)
  box2.shapeColor = "pink"
  box3 = createSprite(400,550,150,10)
  box3.shapeColor = "yellow" 
  box4 = createSprite(250,550,150,10)
  box4.shapeColor = "blue"
  box5 = createSprite(100,550,150,10)
  box5.shapeColor = "black" 
  jb = createSprite(400,300,40,40)
  jb.shapeColor = "cyan" 
  jb.velocityX = 6
    jb.velocityY = 10 
}

function draw() {
    background(rgb(169,169,169));
    drawSprites()
    e = createEdgeSprites()
    
    jb.bounceOff(e)
    if(box1.isTouching(jb)&& jb.bounceOff(box1)){
jb.shapeColor = "green"

    }
    if(box2.isTouching(jb)&& jb.bounceOff(box2)){
        jb.shapeColor = "pink"
        
            }
            if(box3.isTouching(jb)&& jb.bounceOff(box3)){
                jb.shapeColor = "yellow"
                
                    }
                    if(box4.isTouching(jb)&& jb.bounceOff(box4)){
                        jb.shapeColor = "blue"
                        
                            }
                            if(box5.isTouching(jb)&& jb.bounceOff(box5)){
                                jb.shapeColor = "black"
                                
                                    }
}
