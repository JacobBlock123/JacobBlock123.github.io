const [name, course, institute] = values;

























const moreNumbers = [11, 12, 13, 14, 15];
const [first, ...rest] = moreNumbers;

const arrayA = ["Cat", "Dog", "Bird", "Fish"];
const arrayB = arrayA;
console.log(arrayA.join(", "));
console.log(arrayB.join(", "));

arrayA[1] = "Dinosaur";
console.log(arrayA.join(", "));
console.log(arrayB.join(", "));

const arrayC = [...arrayA];
console.log(arrayC.join(", "));