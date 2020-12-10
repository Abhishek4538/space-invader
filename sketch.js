function setup() {
  createCanvas(windowWidth,windowHeight);
  invader=new Invader()
}

function draw() {
  background(0);  
  invader.initialiseAliens()
  invader.drawAliens();
  
}