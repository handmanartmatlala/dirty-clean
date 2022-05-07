let pumpkin; 
var shirt = [];  
var index = 0
let knife;
let wood; 
let tree; 
let s = '"Click to clean the shirt"';


function setup() {
  createCanvas(windowWidth, windowHeight);
 // pumpkin = loadImage("pump.png"); 
  //wood = loadImage("wood-2045379_960_720.jpg");
  //tree = loadImage("tree-2773505_960_720.png");
 // faces = loadImage("face1.png","happy face.gif", "face2.png","suspscious.gif", "face3.png"); 
  shirt[0] = loadImage("dirty shirt.png");
  shirt[1] = loadImage("bubble.gif");
  shirt[2] = loadImage("clean shirt.png");
  shirt[3] = loadImage("clock.gif");
  
  idx = 0;
  washing = loadImage("washing.gif"); 
 
}

function draw() {
  background(227, 255, 252);
  noCursor();
  
  //pumpkin face
  //image(tree,650,-1000,windowWidth+1000, windowHeight+1000)

  //image(wood,0, 800,windowWidth+800,windowHeight+800);
 // image(pumpkin,0,0); 
  
  image(shirt[idx],1350,950, -800 , -800 );
  
  textSize(70);
  fill(0);
  textFont('Georgia');
  text(s, 50, 50, 400, 700); 

//  image(faces[index], 20, 200);
  
  scale(0.5);
  image(washing, mouseX, mouseY);
  

}
  
function mouseClicked() {
  idx++;
  if (idx > shirt.length - 1) {
    idx = 0;
  }
}
 // function mousePressed() {
   // index = Math.floor(random(0, faces.length));
//}