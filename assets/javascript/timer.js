function blink() {
	//alert("blink");
				document.getElementById("timer").innerHTML = "";
				setTimeout("appear()", 500);

}

			function appear() {
				document.getElementById("timer").innerHTML = "SHOT CLOCK EXPIRED";
				setTimeout("blink()", 500);

}




var seconds = 60 ;

function secondPassed(){
	var minutes = Math.round(( seconds - 30) / 60);
	var remainingSeconds = seconds % 60;

	if  (remainingSeconds < 10){
		remainingSeconds = "0" + remainingSeconds ;
	}

	document.getElementById("timer").innerHTML = minutes + ":" + remainingSeconds ;

	if  (seconds === 0 ) {
		clearInterval(countdownTimer);
		blink();
		
		document.getElementById("timer").innerHTML = "SHOT CLOCK EXPIRED";
			
		var  skip = this.questions.length ;
		setTimeout( function() {
			showScore(skip);

		}, 3000);
	
	} else {

		seconds -- ;

	}

	populate();

}

var countdownTimer = setInterval('secondPassed()',1000);


// function blink() {

// 	document.getElementById("timer").innerHTML = "";
// 	setTimeout(appear(),500);
// }

// function appear() {

// 	document.getElementById("timer").innerHTML = "SHOT CLOCK EXPIRED";
// 	setTimeout(blink(),500);
// }

