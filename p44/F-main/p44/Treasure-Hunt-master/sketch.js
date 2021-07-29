var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
  code=new Code();
}

function draw() {
  background(bg);
  code.clues();
  security.display();
textSize(20)
fill("white")
text("Score:"+score,450,40)
  // Add code to display score in the middle of the screen


  // Add code to display the end screen
  if (score===3){
    clear()
    background(bg2)
    fill("red")
    textSize(40)
    text("TREASURE REVEAL",250,200)
  }
  drawSprites()
}