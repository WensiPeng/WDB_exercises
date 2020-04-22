var numOfSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var reset = document.querySelector("#newColor");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;
hard.classList.add("selected");

init();
resetColor();

function init() {
	//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "EASY"){
				numOfSquares = 3;
			}else{
				numOfSquares = 6;
			}
			resetColor();
		})
	};

	for(var i = 0; i < squares.length; i++){
		//happens when click on the square
		squares[i].addEventListener("click", function (){
			//grad color of clicked color and compare with picked color
			if(this.style.backgroundColor === pickedColor){
				message.textContent = "Correct!";
				h1.style.backgroundColor = pickedColor;
				changeColors(pickedColor);
				reset.textContent = "PLAY AGAIN?"
			}
			else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		})
	};
	reset.addEventListener("click", function(){
		resetColor();
	})
}

function resetColor(){
	//generate a new set of random colors;
	colors = generateRandomColor(numOfSquares);
	//reset colors of squares;
	for(var i = 0; i < numOfSquares; i++){
		//add initial colors to squares
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}
	//in EASY mode, set the rest of the square to background color
	for (var i = numOfSquares; i < 6; i++) {
		squares[i].style.display = "none";
	};

	//reset picked color;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	reset.textContent = "NEW COLORS";
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

function pickColor() {
	var index = Math.floor(Math.random() * (colors.length));
	return colors[index];
}

function generateRandomColor(n){
	var colors = [];
	for (var i = 0; i < n; i++) {
		var red = Math.floor(Math.random() * 255);
		var green = Math.floor(Math.random() * 255);
		var blue = Math.floor(Math.random() * 255);
		colors[i] = `rgb(${red}, ${green}, ${blue})`;
	};
	return colors;
}

function changeColors(color) {
	for(var i = 0 ; i < numOfSquares; i++) {
		squares[i].style.backgroundColor = color;
	}
}