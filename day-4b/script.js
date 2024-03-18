// Functions
// immediately invoked function expressions 

function add(num1,num2) //parameters
{
console.log(num1+num2);
}
add(5,10) //arguments


// Default params
function register(user = 'manisha'){
    return user +' is registered'
}
console.log(register());


// Rest params
function sum(...numbers){
    let result = 0;
    for (const num of numbers){
        result += num;
    }
    return result
}
console.log(sum(7,8,9,79,100));

// objects as parameters
function registerUser(user){
    console.log(`${user.name} has logged in`);
}
const user = {
    name: 'manisha'
}
console.log(registerUser(user));



// Arrays as params
function getRandom(...arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    items = arr[randomIndex]
    console.log(items);
}
console.log(getRandom(75,67,86,42,534));

getRandom(56,78,34,232)

// Global and Function Scope
console.log(innerHeight);
const x = 120;
console.log(x);
function add1(){
    const x =1;
    const y = 50;
    console.log(x+y); //51 variable shadowing
}
add1();


// Block scope
// var is not block scope in loops statements
// var is a function scope (block)

if (true){
    const a = 500;
    let b = 600;
    var c = 700;
}
console.log(c);

console.log(addDollarSign(200));   //hoisting
// hoisting moves the code to top before the execution

// Function declaration
function addDollarSign(value){
    return '$' + value
}

// Function expression
const func = function (value){
    return '+' + value
}
console.log(func(45));   // no hoisting

// Arrow Functions () => {}
function add2(a,b){
    return a+b;
}
console.log(add2(5,6));

// Arrow function syntax
const add3 = (a,b) =>{
    return a+b
}

// implicit return
const sum2 = (a,b) =>{console.log(a+b)}
sum2(4,5);

const mul = a =>{console.log(a*2);}
mul(4)

// Returning an object
const createObj = () => ({
    name :'manisha'
})


// Challenge
const getCelsius = (fval) =>((fval - 32) * 5/9)
console.log(`the temp is ${getCelsius(100)} \xB0C`);

const minMax = (...arr5) =>{
    const min = Math.min(...arr5);
    const max = Math.max(...arr5);
    console.log(`{min: ${min}  max:${max}}`);
}
minMax(16,2,3,64,45);


// Execution Context
// Javascript is synchronous and single threaded
// Memory phase , Execution phase





