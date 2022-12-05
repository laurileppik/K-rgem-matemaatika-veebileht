//Kood võetud lehelt https://stackoverflow.com/questions/64183534/javascript-random-image-random-transition-slideshow
//Funktsioon järgmise pildi näitamiseks.
function displayNextImage() {
	var bkX = x;
	x = Math.floor(Math.random() * images.length + 1) 
  
  //Väldib sama pilti 2 korda järjest.
  if (bkX === x && x !== images.length)
  	x++;
 
  else if (bkX === x && x === images.length)
  x--;
  console.log("x " + x);
  
	document.getElementById("img").src = images[x];
}
//Funktsioon jätab 4 sekundit iga pildi vahele.
function startTimer() {
  setInterval(displayNextImage, 4000);
}
//Piltide hoiustamiseks loodav järjend.
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