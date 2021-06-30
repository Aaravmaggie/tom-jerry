var Canvas, bg;
var cat1,cat2,cat3,cat4,mouse1,mouse2,mouse3,mouse4;
function preload() {
    //load the images here
bg=loadImage("images/garden.png");
cat1=loadAnimation("images/cat1.png");
cat2=loadAnimation("images/cat2.png","images/cat3.png");
cat3=loadAnimation("images/cat4.png");

mouse1=loadAnimation("images/mouse1.png");
mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
mouse3=loadAnimation("images/mouse4.png");
}



function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat4=createSprite(870,600);
    cat4.addAnimation("tomSleeping",cat1)
    cat4.scale=0.2;

    mouse4=createSprite(200,600);
    mouse4.addAnimation("jerryStanding",mouse1);
    mouse4.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat4.x-mouse4.x<(cat4.width-mouse4.width)/2){
    cat4.velocityX=0;
    cat4.addAnimation("tomLastImage",cat3);
    cat4.x=300;
    cat4.scale=0.2;
    cat4.changeAnimation("tomLastImage");

    mouse4.addAnimation("jerryLastImage",mouse3);
    mouse4.scale=0.15;
    jerry.changeAnimation("jerryLastImage");
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(KeyCode===DOWN_ARROW){
      cat4.velocityX=-5;
      tom.addAnimation("tomRunning",cat2);
      tom.changeAnimation("tomRunning");
      mouse4.addAnimation("jerryTeasing",mouse2);
      mouse4.frameDelay=25;
      mouse4.changeAnimation("jerryteasing");
  }


}
