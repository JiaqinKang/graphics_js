//reference camera
//https://p5js.org/reference/#/p5/camera
//move slider to see changes!
//sliders control the first 6 parameters of camera()

function preload(){
	ground = loadImage('textures/ground.jpeg');
	snow = loadImage('textures/snow.png')
}
var images;


function setup() {
	createCanvas(500, 500, WEBGL);
	
	//array with images names for later to pick random texture to apply
	images = [ground,snow];
}

function draw() {
	frameRate(10);
  	background('blue');
  	noStroke();
	
	//reference camera
//https://p5js.org/reference/#/p5/camera
	cameraView();
	
	fill('Green');//fill a sphere as sky
	sphere(500);
	//set directional light from right to left
  	directionalLight(random(0,255),//r 
					 100, //g
					 random(0,255),//b
					 250, //x
					 250,//y
					 -1);//z
	
	//draw the landscape
	DrawBoxGronds(5);

}




function DrawBoxGronds(NumberOfGroundSize){
	
	var w = NumberOfGroundSize;
	
	translate(0,0,0);
	
	for (var x = -width/8; x <= width/4; x += w){//horizontal
		for (var y = -height/8 ; y <=height/4; y += w){//vertical
			push();
			texture(random(images));//random texture applied
			translate(x,y,random(-10,10));//translate the box horizontal, vertical and random hight
			box(w);
			pop();
		}
	}
}


//function that change the camraview with mouseX and mouseY
function cameraView(){
	let x = mouseX;
	let y = mouseY;
  	camera(-x,y, +y, 0, 0, 0, 0, 1, 0);
	//
}