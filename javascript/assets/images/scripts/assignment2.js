// Exercise 1
let a = 3;
let b = 7;
let c = 12;

console.log("The largest number is: " + Math.max(a, b, c));
console.log("The smallest number is: " + Math.min(a, b, c));

// Exercise 2
let languages = ["C#", "Java", "Python", "JavaScript", "Ruby", "Perl"];

for (let i = 0; i = languages.length; i ++) {
    if (languages[i] == "JavaScript") {
        console.log(languages[i]);
    }
}

// Exercise 3

switch (grade) {
    case "A":
        mark = "Well Done";
        break;

    case "B":
        mark = "That’s fine";
        break;

    case "C":
        mark = "You passed, but I’m not happy";
        break;

    case "D":
        mark = "Bye-bye MITT";
        break;

    case "F":
        mark = "Rest in peace"
        break;
}

console.log(mark);

// Exercise 4
let organisms = prompt("Number of starting organisms", "2");

let growth = prompt("Percentage of growth daily", "50");

let days = prompt("How many days will they grow?", "7")

for (i = 1; i = days; i++) {
    organisms = organisms + ((organisms / 100) * growth);
// Exercise 6
let text = "My favourite programming lanugauges are javaScript, C# and Java.";

text = text.replace(text.slice(40, 41), "J");

console.log(text);