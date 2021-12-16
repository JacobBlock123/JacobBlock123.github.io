let text = "My favourite programming lanugauges are javaScript, C# and Java.";

word = text.slice(40, 50);

word = word.replace(text.slice(0, 1), "J");

text = text.replace(text.slice(40, 50), word);

console.log(text);