var seconds = 30 ;
function secondPassed(){
	var minutes = Math.round(( seconds - 30) / 60);
	var remainingSeconds = seconds % 60;

	if  (remainingSeconds < 10){
		remainingSeconds = "0" + remainingSeconds ;
	}

	document.getElementById("timer").innerHTML = minutes + ":" + remainingSeconds ;

	if  (seconds === 0 ) {
		clearInterval(countdownTimer);
		document.getElementById("timer").innerHTML = "SHOT CLOCK EXPIRED";
		showScore();
	
	} else {

		seconds -- ;

	}

}

var countdownTimer = setInterval('secondPassed()',100);
