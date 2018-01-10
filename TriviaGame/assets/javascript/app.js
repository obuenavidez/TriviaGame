


function populate(){
		
		if (quiz.isEnded() ) {

			showScore();

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




function guess (id, guess) {
	var guessempty = 1
	var button = document.getElementById(id);

	button.onclick = function() {
		//alert("im called");
		quiz.guess(guess);
		populate();
	}

}

function restart (id) {

	var button = document.getElementById(id);

	button.onclick = function() {
		
		populate();
	}

}
function showProgress() {
	var currentquestionNumber =quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML =" Question " + currentquestionNumber + " of " + quiz.questions.length;


}

var x = "btn6";
function showScore () {
	var gameOverHtml = "<h1> Result </h1>";
	gameOverHtml += " <h2 id = 'score' > Correct Answer : " + quiz.score + "</h2>";
	gameOverHtml += " <h2 id = 'score1' > Incorrect Answer : " + quiz.score1 + "</h2>";
	skipcounter2 = (quiz.score + quiz.score1 ) - skipcounter ;

	gameOverHtml += " <h2 id = 'score2' > Unanswered : " + skipcounter + "</h2>";
	
	gameOverHtml += " <br>";
	gameOverHtml += " <br>";
	gameOverHtml += " <br>";
	gameOverHtml += " <hr>";
	

	gameOverHtml += " <center><button id = 'btn6'  > BEAT THE BULLS AGAIN ? </button></center>";
	
	
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml ;
	//var btn6 = document.getElementById("btn6").;
	//btn6.onclick  =


}




var questions = [
	new Question ("Who is the Chicago Bull player that wore jersey # 23 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Phil Jackson"], 
		                "Michael Jordan"),
	new Question ("Who is the Chicago Bull player that wore jersey # 33 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Phil Jackson"], 
		                "Scottie Pippen"),
	new Question ("Who is the Chicago Bull player that wore jersey # 1 ? ", 
		               ["Michael Jordan", "Derick Rose", "Steve Kerr", "Phil Jackson"], 
		                "Derick Rose"),
	new Question ("Who is the Chicago Bull player that wore jersey # 4 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Jerry Sloan"], 
		                "Jerry Sloan"),
	new Question ("Who is the Chicago Bull player that wore jersey # 7 ? ", 
		               ["Tony Kukoc", "Bob Love", "Steve Kerr", "Phil Jackson"], 
		                "Tony Kukoc"),
	new Question ("Who is the Chicago Bull player that wore jersey # 25 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Phil Jackson"], 
		                "Steve Kerr"),
	new Question ("Who is the Chicago Bull player that wore jersey # 9 ? ", 
		               ["Michael Jordan", "Ron Harper", "Steve Kerr", "Phil Jackson"], 
		                "Ron Harper"),
	new Question ("Who is the Chicago Bull player that wore jersey # 91 ? ", 
		               ["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Dennis Rodman"], 
		                "Dennis Rodman"),
	
	new Question ("Who coached the  Chicago Bulls into two-3-peat? ", 
						["Michael Jordan", "Scottie Pippen", "Steve Kerr", "Phil Jackson"], 
		                "Phil Jackson")
	
];

var quiz = new Quiz(questions);

populate();





