var iss;
var spacecraft;
var hasDocked = false;
var getbackgroundImg;
var issimg, craft1, bgimg, craft1img, craft2img,craft3img, craft4img

function preload() {
 
  issimg = loadImage("images/iss.png")
  bgimg = loadImage("images/spacebg.jpg")
  craft1img = loadImage("images/spacecraft1.png")
  craft2img = loadImage("images/spacecraft2.png")
  craft3img= loadImage("images/spacecraft3.png")
  craft4img = loadImage("images/spacecraft4.png")
}

function setup() {
  var canvas = createCanvas(600,350);
  createCanvas(800,400);
  spacecraft = createSprite(200, 240)
  spacecraft.addImage(craft1img)
  spacecraft.scale = 0.25

  iss = createSprite(300, 140)
 iss.addImage(issimg)
  iss.scale = 0.45
}
function draw() {
  background(bgimg);  
  spacecraft.addImage(craft1img)

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1, 1)
if(keyDown(UP_ARROW)){
spacecraft.y = spacecraft.y-2
}
if(keyDown(DOWN_ARROW)){
spacecraft.addImage(craft2img)
}
if(keyDown(LEFT_ARROW)){
  spacecraft.addImage(craft4img)
  spacecraft.x = spacecraft.x-1
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(craft3img)
    spacecraft.x = spacecraft.x+2
    }
  }
  if(spacecraft.y<=(iss.y+70)&&(spacecraft.x<=(iss.x - 10))){
hasDocked = true
textSize(25)
fill ("red")
text("DOCKING SUCCESSFUL", 200, 300)
  }
  drawSprites();
}