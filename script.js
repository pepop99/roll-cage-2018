function begin(){
	document.getElementsByClassName("main")[0].style.top = "0vh";
	console.log(1);
}

var c=0;
function ham(){
	if(c==0){
			document.getElementsByClassName("hamburger")[0].style.right = "0vw";
			document.getElementsByClassName("img")[0].style.transform = "rotateY(180deg)";
			c=1;
		}

	else{
		document.getElementsByClassName("hamburger")[0].style.right = "-70vw";
		document.getElementsByClassName("img")[0].style.transform = "rotateY(0deg)";
		c=0;
	}
}

document.getElementsByClassName("begin-button")[0].addEventListener("click", begin);
document.getElementsByClassName("back")[0].addEventListener("click", ham);