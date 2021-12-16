// Exercise 1
let stock = 21.75;

let stocks = stock * 300;

let commission = stocks * 0.02;

let total = stocks + commission;

console.log("Stock Price: " + stocks);

console.log("Commission Fee: " + commission);

console.log("Total: " + total);

// Exercies 2
function fToC (temp) {
    console.log((temp - 32) * 5 / 9);
}

function cToF (temp) {
    console.log(temp * 1.8 +32);
}

// Exercise 3
let balance = prompt("Bank Balance", "0.00");

let years = 0;

const million = 1000000;
while (balance < million) {
    balance = balance * 2;
    years++;
}

console.log(years);

// Exercise 4
const student = {
    name: "Kyle Cook",
    grade1: 65,
    grade2: 62,
    grade3: 71,
    finalGrade: (grade1 + grade2 + grade3) / 3
};

// Exercise 5
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Exercise 6
let num = prompt("Number", "1282");

if (num % 3 == 0) {
    console.log("This number is a multiple of 3");
}

if (num % 7 == 0) {
    console.log("This number is a mutliple of 7");
}

else if (num % 3 != 0 && num % 7 != 0) {
    console.log("This number isn't a mutliple of 7 or 3");
}