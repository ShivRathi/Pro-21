var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    //create 4 different surfaces      

    canvas = createCanvas(800,600);
    surface1=createSprite(75,580,175,20);
    surface1.shapeColor="blue";
    surface2=createSprite(275,580,175,20);
    surface2.shapeColor="orange";
    surface3=createSprite(475,580,175,20);
    surface3.shapeColor="red";
    surface4=createSprite(675,580,175,20);
    surface4.shapeColor="green";
    box=createSprite(random(20,750),500,20,20);
    box.shapeColor="white";
    box.velocityY=1;
   



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    
   


    drawSprites();
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
     box.shapeColor="blue";
    }
}
