/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumber(number1, number2){
//     return number1+number2;
// }
// let sum = addTwoNumber(3,5)
// console.log(sum)

// Arrow Function With Parameters

// const addTwoNumber = (number1, number2) => {
//     return number1+number2;
// };

// let sum2 = addTwoNumber(3,5);
// console.log(sum2);

// Single Line Arrow Function With Parameters

// const addThreeNumbers = (num1,num2,num3) => num1+num2+num3;
// let sum2 = addThreeNumbers(3,4,1);
// console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hi There!");

const sayHello = () => console.log("hello!");
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multiple line!
    </p>`
)

console.log(returnMultipleLines());