const gameBotFunction = function () {
    function randomGenerate(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let mysteryNumber = randomGenerate(1, 100); 
    let tries = 5; 

    function isNumber(value) {
        return !isNaN(value) && value.trim() !== '';
    }

    function getResult() {
        if (tries <= 0) {
            if (confirm('Попытки закончились! Хотите попробовать снова?')) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Вы завершили игру');
                return;
            }
        }

        let userInput = prompt(`Угадайте число от 1 до 100. Осталось попыток: ${tries}`);
        
        if (userInput === null) {
            alert('Вы завершили игру');
            return;
        }

        let answerNum = userInput.trim();
        if (!isNumber(answerNum)) {
            alert('Пожалуйста, введите корректное число.');
            getResult();
            return;
        }

        let userGuess = Number(answerNum);

        if (userGuess === mysteryNumber) {
            if (confirm('Поздравляем! Вы угадали число! Хотите сыграть еще раз?')) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Спасибо за игру!');
                return;
            }
        } else if (userGuess > mysteryNumber) {
            alert('Загаданное число меньше.');
        } else {
            alert('Загаданное число больше.');
        }

        tries--;
        getResult();
    }

    getResult();
};

gameBotFunction();