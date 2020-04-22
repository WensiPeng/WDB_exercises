var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;
console.log(button);
// button.addEventListener("click", function(){
// 	if(!isPurple){
// 		body.style.background = "purple";
// 		isPurple = true;
// 	}
// 	else{
// 		body.style.background="white";
// 		isPurple = false;
// 	}
	
// })

button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
})