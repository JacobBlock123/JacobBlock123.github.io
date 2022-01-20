"use strict";

//array of all input buttons
let all = document.getElementsByClassName("buttons");

//screen element in html
let screen = document.getElementById("screen");

//loop through the array of buttons
for (let i of all) {

    //add event listener
    i.addEventListener('click', clicked);

    //clicked function called by the event listener
    function clicked() {

        //if any button is pressed other then equals or clear add that buttons value to the screen
        if (i.value != "=" && i.value !== "Clear") {
            screen.value += i.value;
        }
    
        //if clear is clicked set the screens value to be empty
        if (i.value == "Clear") {
            screen.value = "";
        }
    
        //if equals is clicked evaluate the current value of the screen and print the answer
        if (i.value == "=") {
            screen.value = eval(screen.value);
        }
    }
}