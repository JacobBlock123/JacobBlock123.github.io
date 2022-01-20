let randomNum = Math.round((Math.random() * 100) / 2);

let score = 1000;

let game = true;

function guess() {
    if (game == true) {
        let guess = document.getElementById('input1').value;

        if (guess == "") {
            document.getElementById('text1').innerText = "Please enter your guess.";
        }

        else if (isNaN(guess) == false) {
            if (guess < randomNum) {
                document.getElementById('text1').innerText = "Your guess was too low.";
                score = score - 100;
            }

            if (guess > randomNum) {
                document.getElementById('text1').innerText = "Your guess was too high.";
                score = score - 100;
            }

            if (guess == randomNum) {
                document.getElementById('text1').innerText = "Congratulations you are right! Your score was: " + score;
                document.getElementById('guess').innerText = "Reset";
                game = false;
                return;
            }

            document.getElementById('score').innerText = "Score: " + score;

            if (score == 0) {
                document.getElementById('text1').innerText = "Game Over.";
                document.getElementById('guess').innerText = "Reset";
                game = false;
                return;
            }
        }

        else {
            document.getElementById('text1').innerText = "That is not a number.";
        }
    }

    if (game == false) {
        randomNum = Math.round((Math.random() * 100) / 2);
        document.getElementById('input1').value = null;
        document.getElementById('guess').innerText = "Guess";
        document.getElementById('text1').innerText = "Start Guessing!";
        score = 1000;

        document.getElementById('score').innerText = "Score: " + score;

        game = true;
    }
}