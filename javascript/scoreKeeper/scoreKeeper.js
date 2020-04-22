var scores = document.querySelector("h1");
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOneDisplay = document.querySelectorAll("span")[0];
var playerTwoDisplay = document.querySelectorAll("span")[1];
var maxPlay = 5;
var inputVal = document.querySelector("input");
var buttonOne = document.querySelectorAll("button")[0];
var buttonTwo = document.querySelectorAll("button")[1];
var resetClicked = document.querySelectorAll("button")[2];
var playingTo = document.querySelector("p");

inputVal.addEventListener("change", function(){
	maxPlay = Number(inputVal.value);
	playingTo.textContent = `Playing to ${maxPlay}`;
	reset();
}
)


resetClicked.addEventListener("click", reset);

function reset () {
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneDisplay.textContent = playerOneScore;
	playerTwoDisplay.textContent = playerOneScore;
	playerOneDisplay.classList.remove("winner");
    playerTwoDisplay.classList.remove("winner");
}

buttonOne.addEventListener("click", function(){
	if(Math.max(playerOneScore, playerTwoScore) < maxPlay){
		playerOneScore ++;
		if(playerOneScore === maxPlay){
			playerOneDisplay.classList.add("winner");
		}
		playerOneDisplay.textContent = `${playerOneScore}`;
	}

	})
buttonTwo.addEventListener("click", function(){
	if(Math.max(playerOneScore, playerTwoScore) < maxPlay){
		playerTwoScore ++;
		if(playerTwoScore === maxPlay){
			playerTwoDisplay.classList.add("winner");
		}
		playerTwoDisplay.textContent = `${playerTwoScore}`;
	}
})
	
