let car = document.getElementById("player").style;

let enemy = document.getElementById("ai").style;

let levelText = document.getElementById("level");

let distance = 0;

let enemySpeed = 0;

let level = 1;

let levelNum = 1;

let start = false;

let menu = true;

let music = false;

let lose = false;

const backgroundMusic = new Audio('assets/music/background.mp3');

const engineSound = new Audio('assets/music/car_engine.mp3');

backgroundMusic.volume = 0.05;

engineSound.volume = 0.1;

const finish = 1250;

function clicked() {
    if (lose == true) {
        lose = false;
        levelText.innerText = "Level: " + levelNum;
    }

    if (music == false) {
        backgroundMusic.play();
        music = true;
    }

    if (menu == true) {
        document.getElementById("clickButton").value = "Rapidly Click Here";
        menu = false;
        engineSound.play();
        return;
    }

    if (menu == false) {
        distance += 25;
        car.left = distance + "px";
        start = true;
        if (distance >= finish) {
            start = false;
            level += 0.25;

            distance = 0;
            enemySpeed = 0;

            enemy.left = 0;
            car.left = 0;

            levelNum += 1;

            levelText.innerText = "Level: " + levelNum;
        }
    }
}

setInterval(enemyMove, 100);

function enemyMove() {
    if (start == true) {
        enemySpeed += 10 * level;
        enemy.left = enemySpeed + "px";
    }

    if (enemySpeed >= finish) {
        start = false;
        menu = true;

        distance = 0;
        enemySpeed = 0;

        enemy.left = 0;
        car.left = 0;

        levelNum = 1;
        level = 1;

        levelText.innerText = "You Lost on level " + levelNum;

        lose = true;
    }
}