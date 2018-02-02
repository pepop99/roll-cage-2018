function begin(){
	document.getElementsByClassName("main")[0].style.top = "0vh";
	console.log(1);
}

var c=0;
function ham(){
	if(c==0){
			document.getElementsByClassName("hamburger")[0].style.right = "0vw";
			document.getElementsByClassName("img")[0].style.transform = "rotateY(180deg)";
      setTimeout(function() {
        for(i=0;i<13;i++){
          document.getElementsByClassName("ham-numbers")[i].style.height = "30px";
          document.getElementsByClassName("ham-numbers")[i].style.width = "30px";
          document.getElementsByClassName("ham-numbers")[i].style.opacity = "1";
          document.getElementsByClassName("ham-numbers")[i].style.margin = "10px";
        }
      }, 300);
      c=1;
		}

	else{
		document.getElementsByClassName("hamburger")[0].style.right = "-70vw";
		document.getElementsByClassName("img")[0].style.transform = "rotateY(0deg)";
    setTimeout(function () {
        for(j=0;j<13;j++){
          document.getElementsByClassName("ham-numbers")[j].style.height = "0px";
          document.getElementsByClassName("ham-numbers")[j].style.width = "0px";
          document.getElementsByClassName("ham-numbers")[j].style.opacity = "0";
          document.getElementsByClassName("ham-numbers")[j].style.margin = "25px";
        }
      }, 300);
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
      if(min==time_total)
        alert("time up")
  	}, 1000);
  }

document.getElementsByClassName("begin-button")[0].addEventListener("click", begin);
document.getElementsByClassName("begin-button")[0].addEventListener("click", timer);
document.getElementsByClassName("back")[0].addEventListener("click", ham);
