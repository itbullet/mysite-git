function playGuess2() {
		var answer = parseInt(Math.random() * 100);
		var userAnswer;
		var playerNum = 1;

		while (true) {
			userAnswer = prompt("Ходит игрок № " + playerNum +".\nНазовите число от 1 до 100.\nДля выхода нажмите q.");
			//По жеалнию игрока выходим
			if (userAnswer == "q") {
				window.alert("К сожалению вы не угадали. Было загадано число: " + answer);
				break;
			}
			
			if (userAnswer > answer) {
				window.alert("Ваш ответ слишком большой.");
			} else if (userAnswer < answer) {
				window.alert("Ваш ответ слишком маленький.");
			} else if (userAnswer == answer) {
				window.alert("Вы угадали число! Победил игрок №" + playerNum);
				break;
			} else {
				window.alert("Необходимо ввести число!");
			}
			//Смена игрока
			if (playerNum == 1) {
			playerNum = 2;
			} else if (playerNum == 2 ) {
			playerNum = 1;			
			}

		}
}

function playGuess() {
		var answer = parseInt(Math.random() * 100);
		var atempt = 1;
		var atemptCounts = 7;
		var userAnswer;

		while (atempt <= atemptCounts) {
			userAnswer = parseInt(prompt("Назовите число от 1 до 100. Попытка №" + atempt + "из " + atemptCounts));
			if (userAnswer > answer) {
				window.alert("Ваш ответ слишком большой.");
			} else if (userAnswer < answer) {
				window.alert("Ваш ответ слишком маленький.");
			} else if (userAnswer == answer) {
				window.alert("Вы угадали число!");
				break;
			} else {
				window.alert("Необходимо ввести число!");
			}
			atempt++;
		}

		if (atempt > atemptCounts) {
			window.alert("К сожалению вы не угадали. Было загадано число: " + answer);
		}
}

function askQuestion(textBoxId, answer, correctAnswersCount) {
	var userAnswer = document.getElementById(textBoxId).value;
	userAnswer = userAnswer.toLowerCase();
	if (userAnswer == answer) {
		correctAnswersCount++;
	}
	document.getElementById(textBoxId).value = '';
	return correctAnswersCount;
}

function playPuzzle() {
	var correctAnswersCount = 0;
	correctAnswersCount = askQuestion('userAnswer1', 'интернет',correctAnswersCount);
	correctAnswersCount = askQuestion('userAnswer2', 'хрен', correctAnswersCount);
	correctAnswersCount = askQuestion('userAnswer3', 'бомж', correctAnswersCount);
	correctAnswersCount = askQuestion('userAnswer4', 'кровать', correctAnswersCount);
	alert('Вы угадали ' + correctAnswersCount + ' загадок.');
	correctAnswersCount = 0;
}