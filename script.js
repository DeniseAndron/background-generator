var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
//generate a random number (num) using math.random function
//convert this into a hexadecimal (base 16) string
//set up as a function otherwise you will only get one value
function randomHex () {
	var num = Math.floor(Math.random() * 0xFFFFFF <<0);
	var hex = "#" + num.toString(16);
	return hex;
}

//function to generate random gradient
function randomGradient() {
	color1.value = randomHex ();
	color2.value = randomHex ();
	setGradient()
}

//sets gradient on initial load according to input default value
setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);