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

  time = document.getElementsByClassName('time')[0];
  time.innerHTML='00:00';
  time_total = 60;
  time_elapsed = 0;
  function timer() {
  	sec = 0;
  	min = 0;
  	setInterval(function() {
  		sec++;
  		if(sec==60)
  		{
  			time_elapsed++;
  		}
  		sec = sec%60;
  		min = time_elapsed;
  		sec = sec.toString();
  		min = min.toString();
  		if(sec.length<2)
  			sec='0'+sec;
  		if(min.length<2)
  			min='0'+min;
  		time.innerHTML=min+':'+sec;
  		sec=parseInt(sec);
  		min=parseInt(min);
  	}, 1000);
  }

document.getElementsByClassName("begin-button")[0].addEventListener("click", begin);
document.getElementsByClassName("begin-button")[0].addEventListener("click", timer);
document.getElementsByClassName("back")[0].addEventListener("click", ham);
