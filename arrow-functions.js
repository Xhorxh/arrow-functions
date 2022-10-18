/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNummbers(a, b) {
//     // Code Block
//     return a + b;
// }
// let sum = addTwoNummbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNummbers = (a, b) => {
    // Code Block
    return a + b;
}
let sum = addTwoNummbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNummbers2 = (a, b) => (a + b); also valid
const addTwoNummbers2 = (a, b) => a + b;
let sum2 = addTwoNummbers2(6, 4)
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello form arrow!!');

const sayHello = () => console.log('Hello!');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiline string!
    </p>`
)
console.log(returnMultipleLines())
