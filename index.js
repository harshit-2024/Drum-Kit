
function clicked(){
	var button = this.innerHTML;
	makeSound(button);
	buttonAnimation(button);
}


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}

document.addEventListener("keypress", function(evt){
	var button = evt.key;
	buttonAnimation(button);
	makeSound(button);
})

function buttonAnimation(key){
	var a = document.querySelector("."+key);
	a.classList.add("pressed");
	setTimeout(function(){
		a.classList.remove("pressed");
	}, 100);
}

function makeSound(key){
	switch(key){
		case "w":
			var audio = new Audio("./sounds/tom-1.mp3");
			audio.play();
			break;
		case "a":
			var audio = new Audio("./sounds/tom-2.mp3");
			audio.play();
			break;
		case "s":
			var audio = new Audio("./sounds/tom-3.mp3");
			audio.play();
			break;
		case "d":
			var audio = new Audio("./sounds/tom-4.mp3");
			audio.play();
			break;
		case "j":
			var audio = new Audio("./sounds/snare.mp3");
			audio.play();
			break;
		case "k":
			var audio = new Audio("./sounds/crash.mp3");
			audio.play();
			break;
		case "l":
			var audio = new Audio("./sounds/kick-bass.mp3");
			audio.play();
			break;
	}
}