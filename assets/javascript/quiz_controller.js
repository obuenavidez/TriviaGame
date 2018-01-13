function Quiz(questions) {
	this.score = 0;
	this.score1= 0;
	this.score2= 0;
	this.questions = questions;
	this.questionIndex = 0;


}

Quiz.prototype.getQuestionIndex = function() {

	return this.questions[this.questionIndex];
	//alert(this.questionIndex);

}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
	alert();

}
Quiz.prototype.guess = function(answer) {
	// testing values :)
	//var x =  this.questionIndex().correctAnswer(choice) ;
	
	
	 

	
	

	
	if(this.getQuestionIndex().correctAnswer(answer)) {

		this.score++;
		
	}
	else  if ((!this.getQuestionIndex().correctAnswer(answer)) && (answer !== "SKIP")  ){

		this.score1++;
		

	}
	
	this.questionIndex++;
}
