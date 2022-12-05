//https://bobbyhadz.com/blog/javascript-change-button-color-onclick

function displayNextImage() {
	var bkX = x;
	x = Math.floor(Math.random() * images.length + 1) 
  
  //If new X is the same as old X and is not the last image, incremnt to avoid the same image twice in a row
  if (bkX === x && x !== images.length)
  	x++;
  //If new X is the same as old X, but is the last image, decrement
  else if (bkX === x && x === images.length)
  x--;
  console.log("x " + x);
  
	document.getElementById("img").src = images[x];
}
function startTimer() {
  setInterval(displayNextImage, 4000);
}
var trans=[]; 
var images = [
  "https://wallpaperset.com/w/full/8/4/8/392892.jpg" ,
  "https://wallpaperset.com/w/full/b/4/7/93428.jpg" ,
  "https://wallpaperset.com/w/full/6/e/0/93440.jpg" ,
  "https://wallpaperset.com/w/full/e/f/9/93471.jpg" ,
  "https://wallpaperset.com/w/full/8/f/1/93477.jpg" ,
   "https://wallpaperset.com/w/full/0/4/f/93499.jpg" ,
   "https://wallpaperset.com/w/full/b/9/6/93512.jpg" ,
   "https://wallpaperset.com/w/full/6/2/0/93540.jpg" ,
   "https://wallpaperset.com/w/full/8/2/c/93552.jpg"
], 
x = -1;