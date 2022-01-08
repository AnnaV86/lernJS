let number = 0;
// number++ при следующем обращении к переменной она прибавит 1
// ++number сразу прибавит 1
number = number + 1; // number++
number = number + 1; // ++number

let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = (number) => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
console.log(num);
// console.log(number); // ReferenceError: number is not defined
