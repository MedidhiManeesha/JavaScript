/*
Primitive Data types (predefined or built-in functions)
-String
-Number
-Boolean
-Null
-Undefined
-Symbol
-BigInt

Non primitive / Reference Types (Objects)
-objects literals
-arrays
-functions

Javascript is dynamically typed ( don't explicitly define the type of variables)

Primitive v/s Reference types

Primitive : Stored directly in the "stack", where it is accessed from

Reference types : Stored in the heap and accessed by reference


*/

// let amount = 2
/*String to Number
-------------------
amount = parseInt(amount)
amount = +amount
amount = Number(amount)*/

/*Number to String
--------------------
amount = amount.toString()  
amount = String(amount)
-------------------
Methods are actions that are performed on objects
javascript creates a temporary wrapper of the associated type
since we are using method on a primitive type*/
/*-------------------------
String to decimal
amount = parseFloat(amount)
--------------------------
Number to Boolean
amount = Boolean(amount)
*/

//  5 NaN conditions
/*
let str = 'hello'
str = parseInt(str)
console.log(str, typeof str);
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log((undefined+ undefined));
console.log('foo' / 3);
*/
// console.log(amount , typeof amount);


// type coercion
// let x;

// x = 5 + '5'
//type coercion
/*
x = 5 *'5' 
x = 5 + null
x = Number(null)
x = Number(true)
x = Number(false)
x  = 5 + undefined
console.log(x, typeof x);

*/
// STRINGS

// const name = 'Manisha'
// const age = 19

// x = 'My name is ' + name +' my age is '+ age
// template literals

// x = `my name is ${name} and my age is ${age}`
// console.log(x);

// String properties and Methods

const s = new String('77') 
// temporary wrapper converts any primitive dtypes to objects to perform methods on it
// x = s.toString();
// console.log(x,typeof x);
console.log( typeof s);



