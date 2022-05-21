/*
 * @name Load and "glitch" an image 
 * @description Load and draw multiple random copies of parts of an image.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>
 *
 * @author Evan Raskob <e.raskob@gold.ac.uk> 2021
 *
 */


/// Some inspiration from hellocatfood (Antonio Roberts)
/// https://www.hellocatfood.com/#basquiats-brain
///



//reference Adam image from in difference position
//modeled 1880 or 1881, cast 1910
//https://www.metmuseum.org/art/collection/search/191803
//Declare variable for adam images
var adamImage;
var adamImage1;
var adamImage2;

//declare blendmode array
var blendModeArray;






// Preload image first so we can draw in setup
//
function preload() {
  adamImage = loadImage('assets/Adam.jpeg'); // Load the image  
	adamImage1 = loadImage('assets/Adam1.jpg');// load the image
	adamImage2 = loadImage('assets/Adam2.jpg')//load the image
	
	

}


function setup() {
  createCanvas(720, 400);

  // Displays the original image at its actual size at point (0,0)
  image(adamImage, 0, 0);
	
	
	//declare blendmodearray lists
	blendModeArray = [
		BLEND, 
		ADD, 
		DARKEST, 
		LIGHTEST, 
		DIFFERENCE, 
		EXCLUSION, 
		MULTIPLY, 
		OVERLAY, 
		HARD_LIGHT, 
		SOFT_LIGHT, 
		DODGE, 
		BURN 	
	];
}



function draw() {

 	//set refresh update framerate to 2 ;
	frameRate(2);
	
	//random blendmoe for each glitch
	blendMode(random(blendModeArray));	

	//draw glitch
	drawRandomImageSection(adamImage);
	
	//random blendmoe for each glitch
	blendMode(random(blendModeArray));
	//draw glitch
	drawRandomImageSection(adamImage1);
	
	//random blendmoe for each glitch
	blendMode(random(blendModeArray));
	
	//draw glitch
	drawRandomImageSection(adamImage2);
}





/**
 * draw a random part of an image at a random place on the screen
 * {p5.Image} img Image to draw
 */
function drawRandomImageSection(img) {
  let dx = random(0,adamImage.width); //the x-coordinate of the destination rectangle in which to draw the source image
  let dy = random(0,adamImage.height); //the y-coordinate of the destination rectangle in which to draw the source image
  let dWidth = random(40,100); //the width of the destination rectangle
  let dHeight = random(40,200); //the height of the destination rectangle
  
  let sx = 0;//the x-coordinate of the subsection of the source image to draw into the destination rectangle
  let sy = 0;//the y-coordinate of the subsection of the source image to draw into the destination rectangle
  let sWidth = random(0,adamImage.width);//the width of the subsection of the source image to draw into the destination rectangle
  let sHeight = random(0,adamImage.height);//the height of the subsection of the source image to draw into the destination rectangle


  // Displays the image
	//reference from p5js :image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
  image(img,//image to display
		dx, dy, 
		dWidth, dHeight, 
		sx, sy, 
		sWidth, sHeight);
}