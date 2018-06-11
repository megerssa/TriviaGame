var answers = ["The Black Death", "Ethiopia", "Yuri A. Gagari", "1776", "Leonardo da Vinci", "Pacific Ocean"], 
 	data = $("input"), 
 	correctAnswers = 0, 
 	incorrectAnswers = 0, 
 	unanswrd = 0,
 	timer = 60;


function start() {
	$(".data").css("display", "none");

	for (var i = 0; i < data.length; i++) {

		if (data[i].checked) {

			if (answers.indexOf(data[i].value) !== -1) {
				correctAnswers++;
			}

			else {
				incorrectAnswers++;
			}
		} 
	} 

	var sum = correctAnswers + incorrectAnswers;


	if (sum !== 4) {
		unanswrd = 4 - sum; 

	}

	$(".correct").html("Correct Answers: " + correctAnswers);
	$(".incorrect").html("Incorrect Answers: " + incorrectAnswers);
	$(".unanswered").html("Unanswered: " + unanswrd +);
	$(".sum p").addClass("stylish");

} 


$(".start").on("click", function() {
	$(".start").css("display", "none");
	$(".data").css("display", "block");


	var startTimer = setInterval(function() {
		timer--;
		

		if (timer > 59) {
			$(".timer").html("You have " + "00:" + timer + " remaining");
		}

		else if (timer <= 59) {
			$(".timer").html("You have " + "00:" + timer + " remaining");
		}


		if (timer <= 0) {
			clearInterval(startTimer); 
			startGame(); 

		}
	}, 60000); 


	$(".done").on("click", function() {
		clearInterval(startTimer); 
		startGame(); 
	});
}); 