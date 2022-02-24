let car = document.getElementById("player").style;

let enemy = document.getElementById("ai").style;

let levelText = document.getElementById("level");

let distance = 0;

let enemySpeed = 0;

let level = 1;

let levelNum = 1;

let start = false;

const finish = 1250;

function clicked() {
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

setInterval(enemyMove, 100);

function enemyMove() {
    if (start == true) {
        enemySpeed += 10 * level;
        enemy.left = enemySpeed + "px";
    }

    if (enemySpeed >= finish) {
        document.getElementById("clickButton").disabled = true;

        start = false;

        distance = 0;
        enemySpeed = 0;

        enemy.left = 0;
        car.left = 0;

        levelText.innerText = "You Lost on level " + levelNum;
    }
}