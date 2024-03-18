const d = new Date(2024,1,1,12,30,0);
const hours = d.getHours();

if(hours <= 12){
    console.log("Good Morning");
}else if(hours === 6){
    console.log("Wake up");
}else if(hours >= 13){
    console.log("Good Evening");
}else{
    console.log("Good Night");
}

// Switches
const month = d.getMonth();
switch (month) {
    case 1:
        console.log("It's January");
        break;
    case 2:
        console.log("It's February");
        break;
    case 3:
        console.log("It's March");
        break;
    default:
        console.log("It's not jan or march");
}

// Challenge
const num1 = 0;
const num2 = 0;
const op = '';

function calci(num1,num2,op){
    switch (op) {
        case '+':
            console.log(`${num1} + ${num2} = ${num1+num2}`);
            break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1-num2}`);
            break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1*num2}`);
            break;
        case '/':
            console.log(`${num1} / ${num2} = ${num1/num2}`);
            break;
        default:
            console.log("Invalid Key");
            
    }
}
calci(5,4,'*')
calci(7,8,'+')
calci(6,30,'/')
calci(4,5,'?')

// Truthy & Falsy Values

const email = 'ravi@mail' //type coersion js converts to true ( for any value assigned)
if (email) {
    console.log("This is truthy ");
}

// Falsy Values
// false
// 0
// "" or '' (empty string)
// null
// undefined
// NaN

// Truthy values
// true
// '0' (0 in a string)
// ' '(space in a string)
// 'false'(false in a string)
// [](empty array)
// {}(empty object)
// function () {} (empty function)

// Caveats
const children = 0;

if(children !== undefined || !isNaN(children)){
    console.log(`You have ${children} children`);
}else{
    console.log("please enter");
}

// Checking for empty arrays

const posts = [];
if(posts.length > 0){
    console.log("List posts");
}else{
    console.log("no posts");
}

// Checking for empty objects
const user = {}

if (Object.keys(user).length > 0) {
    console.log("List user");
}else{
    console.log("no user");
}

// Loose Equality

console.log(false === 0);
console.log(false === '');
console.log(null === undefined);

// Logical Operators

//  && - will return first falsy value or last value

let a;
a = 10 && 20;
a = 10 && '' && 0 && 30;
console.log(a);

const post1 = ['post 1'];
post1.length > 0 && console.log(post1[0]);

// || - will return first truthy value or last value

let b;
b = 10 || 20;  //10
b = 0 || 20;   //0

console.log(b);

// ?? - will return right side operand when left is null or undefined

let c;

c = 10 ?? 20;   //10
c = null ?? 20;  //20
c = undefined ?? 30; //30
console.log(c);

// Logical Assignment

//  ||= assigns the right side value only if the left is a falsy value

a = a || 10
a ||= 10

//  &&= assign the right side value only if the left is a truthy value

b = b && 120
b &&= 120

//  ??= assign the right side operand when left is null or undefined
let co;
co = co ?? 50
c ??= 50
console.log(co);


// Ternary Operator

const age = 18;

age >= 18 ? console.log("You can vote") : console.log("Cannot vote");;

// Multiple statements

const auth = true;

// if(auth){
//     alert("Login accessed");
//     redirect = '/dashboard';
// }else{
//     alert("Access Denied")
//     redirect = "/login"
// }

const redirect = auth ? (alert("Login success"), '/dashboard') : (alert("Access Denied"), '/login')
console.log(redirect);



