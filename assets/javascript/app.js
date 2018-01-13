
var guessempty = 0 ;

function populate(){


		
		if (quiz.isEnded() ) {
			var x = quiz.isEnded();
		
			showScore();
			//x = !x;

			//alert(x);

			// var gameOverHtml = "<h1> Result </h1>";
			// // gameOverHtml += " <h2 id = 'score' > Correct Answer : " + quiz.score + "</h2>";
			// // gameOverHtml += " <h2 id = 'score1' > Incorrect Answer : " + quiz.score1  + "</h2>";
			// // //skipcounter2 = (quiz.score + quiz.score1 ) - skipcounter ;

			// // gameOverHtml += " <h2 id = 'score2' > Unanswered : " + guessempty + "</h2>";
			
			// // gameOverHtml += " <br>";
			// // gameOverHtml += " <br>";
			// // gameOverHtml += " <br>";
			// // gameOverHtml += " <hr>";

			// var gameOverHtml = "<center><button id = 'btn6' > BEAT THE BULLS AGAIN ? </button></center>";
			
			

			//  var element = document.getElementById("quiz");
			//  element.innerHTML = gameOverHtml ;
			// //  alert(btn6);



		}
		else {
			//showQuestion
		     var element = document.getElementById("question");
		     element.innerHTML=quiz.getQuestionIndex().text;

		//show choices

		    var choices = quiz.getQuestionIndex().choices;
			for (var i = 0; i < choices.length ; i++) {
				var element = document.getElementById("choice" + i);
				element.innerHTML = choices[i];
				guess("btn" + i , choices[i] );
			}
			showProgress();

		}
		


};



var guessempty = 0;
var guessincorrect = 0;

	
function guess (id, guess) {
	var button = document.getElementById(id);

	button.onclick = function() {
			//alert("im called");
		quiz.guess(guess);
		
		if ((guess === "SKIP") ||  (guess == " ")) {
			//alert ("no answer");
			guessempty++;

		}
		


		populate();
	}

}



function showProgress() {
	var currentquestionNumber =quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML =" Question " + currentquestionNumber + " of " + quiz.questions.length;


}

var x = "btn6";
function showScore (skip) {
	var skip = 9;
	var skip2 = skip - (guessempty + quiz.score + quiz.score1);
	var gameOverHtml = "<h1> Result </h1>";
	gameOverHtml += " <h2 id = 'score3' > Total Questions : " + skip + "</h2>";
	
	gameOverHtml += " <h2 id = 'score' > Correct Answer : " + quiz.score + "</h2>";
	gameOverHtml += " <h2 id = 'score2' > Incorrect Answer : " + quiz.score1  + "</h2>";
	//skipcounter2 = (quiz.score + quiz.score1 ) - skipcounter ;
	gameOverHtml += " <h2 id = 'score3' > Skipped : " + guessempty + "</h2>";
	
	gameOverHtml += " <h2 id = 'score3' > Unanswered : " + skip2 + "</h2>";
	
	gameOverHtml += " <br>";
	gameOverHtml += " <br>";
	gameOverHtml += " <br>";
	gameOverHtml += " <hr>";


	gameOverHtml += "<center><button id = " + 'btn6' + "> Thats All Folks ... Thank You !!! </button></center>";
	
	
	var elementGrid = document.getElementById("grid");
	//gameOverHtmlGrid= " <img src =" + 'assets/images/bulls3.jpg' + ">";
	
	
	var element = document.getElementById("quiz");
	//elementGrid.innerHTML = gameOverHtmlGrid ;
	
	element.innerHTML = gameOverHtml ;
	//alert(btn6);
	//var btn6 = document.getElementById('x');

	//x.innerHTML = "BEAT THE BULLS AGAIN ?";
	// x.addEventListener ("click", function { 
	//   alert ();
	//   	});
	
 	// document.getElementById("btn6").addEventListener("click", function() {
 	// 	var x = quiz.isEnded();
		// document.getElementById("btn6").innerHTML = "Hello World";
		// // quiz ended is already false at this point
		//alert(x);

		//populate();
 	//});

//     document.getElementById("btn6").innerHTML = "Hello World";
// });
	
	
//
//var btn6 = document.getElementById('btn6');
	//btn6.addEventListener("click", alert());
	


	// ************************************
	// document.getElementById("btn6").addEventListener("click", function() {
 // 	// 	var x = quiz.isEnded();

	// //document.getElementById("btn6").innerHTML = "Hello World";
	
	// });	
	// //restart3();
}

function restart3() {
	var x = quiz.isEnded();

	this.questions.length === 0;
	populate();
	 
}


var questions = [
	new Question ("Who is the Chicago Bull player that wore jersey # 23 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Phil Jackson","SKIP"], 
		                "Michael Jordan"),
	new Question ("Who is the Chicago Bull player that wore jersey # 33 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Phil Jackson","SKIP"], 
		                "Scottie Pippen"),
	new Question ("Who is the Chicago Bull player that wore jersey # 1 ? ", 
		               ["Michael Jordan", "Derick Rose", "Steve Kerr", "Phil Jackson","SKIP"], 
		                "Derick Rose"),
	new Question ("Who is the Chicago Bull player that wore jersey # 4 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Jerry Sloan","SKIP"], 
		                "Jerry Sloan"),
	new Question ("Who is the Chicago Bull player that wore jersey # 7 ? ", 
		               ["Tony Kukoc", "Bob Love", "Steve Kerr", "Phil Jackson","SKIP"], 
		                "Tony Kukoc"),
	new Question ("Who is the Chicago Bull player that wore jersey # 25 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Phil Jackson","SKIP"], 
		                "Steve Kerr"),
	new Question ("Who is the Chicago Bull player that wore jersey # 9 ? ", 
		               ["Michael Jordan", "Ron Harper", "Steve Kerr", "Phil Jackson","SKIP"], 
		                "Ron Harper"),
	new Question ("Who is the Chicago Bull player that wore jersey # 91 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Dennis Rodman","SKIP"], 
		                "Dennis Rodman"),
	
	new Question ("Who coached the  Chicago Bulls into two-3-peat? ", 
						["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Phil Jackson","SKIP"], 
		                "Phil Jackson")
	
];

var quiz = new Quiz(questions);
//var btn6 = "x";
populate();






