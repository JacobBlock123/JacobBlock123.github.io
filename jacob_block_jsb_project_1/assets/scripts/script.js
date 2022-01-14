function cToF() {
    let answer = (document.getElementById('cToF').value * 9 / 5) + 32;
    answer = Math.round(answer);
    if (isNaN(answer) == false) {
        document.getElementById('answ1').innerText = answer;
    }

    else {
        document.getElementById('answ1').innerText = "That is not a number. Try again.";
    }
}

function fToC() {
    let answer2 = (document.getElementById('fToC').value - 32) * 5 / 9;
    answer2 = Math.round(answer2);

    if (isNaN(answer2) == false) {
        document.getElementById('answ2').innerText = answer2;
    }

    else {
        document.getElementById('answ2').innerText = "That is not a number. Try again.";
    }
}

darkMode = false;

function modeSwitch() {
    if (darkMode == false) {
        document.getElementById('background').style.backgroundColor = "#222";
        document.getElementById('head1').style.color = "#fff";
        document.getElementById('head2').style.color = "#fff";
        document.getElementById('heading').style.backgroundColor = "#111";
        document.getElementById('cToF').style.backgroundColor = "#333";
        document.getElementById('fToC').style.backgroundColor = "#333";
        document.getElementById('answ1').style.backgroundColor = "#333";
        document.getElementById('answ2').style.backgroundColor = "#333";
        document.getElementById('btn1').style.backgroundColor = "#333";
        document.getElementById('btn2').style.backgroundColor = "#333";
        document.getElementById('cToF').style.color = "#fff";
        document.getElementById('fToC').style.color = "#fff";
        document.getElementById('answ1').style.color = "#fff";
        document.getElementById('answ2').style.color = "#fff";
        document.getElementById('mode').innerText = "Light Mode";
        document.getElementById('mode').style.backgroundColor = "#444"
        darkMode = true;
        return;
    }

    if (darkMode == true) {
        document.getElementById('background').style.backgroundColor = "#fff";
        document.getElementById('head1').style.color = "#000";
        document.getElementById('head2').style.color = "#000";
        document.getElementById('heading').style.backgroundColor = "#222";
        document.getElementById('cToF').style.backgroundColor = "#fff";
        document.getElementById('fToC').style.backgroundColor = "#fff";
        document.getElementById('answ1').style.backgroundColor = "#fff";
        document.getElementById('answ2').style.backgroundColor = "#fff";
        document.getElementById('btn1').style.backgroundColor = "#222";
        document.getElementById('btn2').style.backgroundColor = "#222";
        document.getElementById('cToF').style.color = "#000";
        document.getElementById('fToC').style.color = "#000";
        document.getElementById('answ1').style.color = "#000";
        document.getElementById('answ2').style.color = "#000";
        document.getElementById('mode').innerText = "Dark Mode";
        document.getElementById('mode').style.backgroundColor = "#222"
        darkMode = false;
        return;
    }
}