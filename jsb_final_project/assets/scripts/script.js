function modal() {
    document.getElementById("modal").style.opacity = 1;
    document.getElementById("heading").style.opacity = 0.5;
    document.getElementById("container").style.opacity = 0.5;
}

function exitModal() {
    document.getElementById("modal").style.opacity = 0;
    document.getElementById("heading").style.opacity = 1;
    document.getElementById("container").style.opacity = 1;
    document.getElementById("warning").innerText = "";
}

let password = "jsb2021!";

let email = "jsb2021@gmail.com";

let lettersOnly = /[a-zA-Z]+/;

let date = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

function submit() {
    if (document.getElementById("fname").value == "" || document.getElementById("lname").value == "" || document.getElementById("bday").value == "" || document.getElementById("email").value == "" || document.getElementById("passwd").value == "") {
        document.getElementById("alert-text").innerText = "Please fill in everything.";
    }

    else if (document.getElementById("passwd").value.length < 8) {
        document.getElementById("alert-text").innerText = "Your password must be at least 8 characters long.";
    }

    else if (lettersOnly.test(document.getElementById("fname").value) == false || lettersOnly.test(document.getElementById("lname").value) == false) {
        document.getElementById("alert-text").innerText = "First Name and Last Name can only contain letters.";
    }

    else if (date.test(document.getElementById("bday").value) == false) {
        document.getElementById("alert-text").innerText = "Enter a valid date";
    }

    else {
        window.location.href = "index.html";
    }
}

function login() {
    if (document.getElementById("log-email").value === email && document.getElementById("log-passwd").value === password) {
        document.getElementById("modal").style.opacity = 0;
        document.getElementById("bing").disabled = false;
        document.getElementById("google").disabled = false;
        document.getElementById("heading").style.opacity = 1;
        document.getElementById("container").style.opacity = 1;
        document.getElementById("warning").innerText = "";
    }

    else {
        document.getElementById("warning").innerText = "Email or passsword incorrect";
    }
}

function google() {
    window.location.href = "https://www.google.com/search?q=" + document.getElementById("search").value;
}


function bing() {
    window.location.href = "https://www.bing.com/search?q=" + document.getElementById("search").value;
}