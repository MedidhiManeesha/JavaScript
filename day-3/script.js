/*x = "hello world"
s= x.substring(1,5)
s = x.slice(-11,-6)
s = x.trim(x)
s = x.replace("world","manisha")
s = x.includes('hel')
s = x.valueOf();
s = x.split('')
console.log(s);*/
/*
const me = "ravindra nath"
newStr = me.charAt(0).toUpperCase()+me.slice(1)

console.log(newStr);
*/
// x = 5000.6999
// const x = new Number (79)
// len = x.toFixed(2)
// len = x.toString().length
// len = x.toExponential(3)
// len = x.toPrecision(3)
// console.log(len);

// Math Object

// x = Math.min(4,5,3)
// x = Math.max(5,2,3)
// x = Math.abs(-7)
// x = Math.sqrt(9)
// x = Math.pow(8,4)
// x = Math.ceil(4.2)
// x = Math.floor(4.9)
// x = Math.floor(Math.random() * 100 +1)
// console.log(x);

// Challenge
/*
x = Math.floor(Math.random() * 100)
y = Math.floor(Math.random() * 50)
console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${x/y}`);
console.log(`${x} % ${y} = ${x%y}`);
*/
// Dates and Times
/*
let d;
d = new Date();
d = new Date('2023-12-29T20:10:10')
d = new Date('12/29/2023 20:11:10')
d = new Date('2023-12-29')
d = new Date('12-29-2023')
d = Date.now()
d = new Date('12-29-2023')
d = d.getTime()
d = d.valueOf()
d = new Date(1703788200000)
d = d.getFullYear()

console.log(d);*/
/*
let x;
let d = new Date()
x = d.toString()
x = d.getMonth() +1
x = d.getDate()
x = d.getDay()
x = d.getHours()
x = d.getMinutes()
x = d.getSeconds()
x = d.getMilliseconds()
x = `${d.getDate()} - ${d.getMonth()} - ${d.getFullYear()}`
x = Intl.DateTimeFormat('default').format(d)
x = d.toLocaleString('default', {month:'short'})
console.log(x);
*/
/*
// Array literal
numbers = [ 12, 24, 34 ,64, 56]
// Array constructor
fruits = new Array('apple','banana','orange');
numbers = `my favorite fruit is ${fruits[1]}`
fruits[fruits.length] = 'peach' 
x = fruits;
console.log(x);
*/


// const arr = [34 ,56 ,75, 45, 33]
/*arr.push(100)
arr.pop()
arr.unshift(100)
arr.shift()
arr.reverse()
arr.includes(100)
arr.indexOf(34)*/
// x = arr.slice(2)
// x = arr.splice(1,4)  // deletes elements in the array
// console.log(x,arr);
/*
let arr;
fruits = [ 'apple' ,'banana', 'grape']
items = ['gold', 'silver', 'chains']
fruits.push(items)
// console.log(fruits);
arr = [fruits , items]
arr = fruits.concat(items)
arr = [...fruits, ...items]
x = arr.flat()
*/

// Static methods
/*
arr = [1,2,[3,4],5,6,[7,8]]
x = Array.isArray('Hello')
x = Array.from('122345')
const a = 1
const b = 2
const c = 3
x = Array.of(a,b,c)
console.log(x);
*/

let arr;
arr = [1,2,3,4,5]
arr.reverse()
arr.push(0)
arr.unshift(6)
console.log(arr);

const arr1 = [1,2,3,4,5]
const arr2 = [5,6,7,8,9,10]
newarr = arr1.slice(0,4).concat(arr2)
console.log(newarr);
arr4 = [...arr1, ...arr2]
arr4.splice(4,1)
console.log(arr4);






