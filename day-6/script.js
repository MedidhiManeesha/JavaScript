// for ( i=0 ; i<=10; i++){
//     if(i===7){
//         console.log("7 is my lucky number");
//     }else{
//         console.log(i);        
//     }
// }

// // Nested loops
// for (i=1; i<=10; i++){
//     console.log(`Number ${i}`);
//     for (j=1; j<=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// // break - breaks entire program after this stmt
// // continue - only skips that condition and continues

// const arr =[ 1,2,3,4,5];
// let a = 0;
// while (a< arr.length){
//     console.log(arr[a]);
//     a++;
// }

// b =21;
// do{
//     console.log('number' + b);
//     b++
// }while(b<=20)

// FizzBuzz Challenge
// for(let i =1 ; i<=100; i++){
//     if(i%3 ===0 && i%5=== 0){ 
//     console.log("FizzBuzz");
//     }else if(i%5 === 0){
//         console.log("Buzz");
//     }else if(i%3 === 0){
//         console.log("Fizz");
//     }else{
//         console.log(i);
//     }
// }

// for 'of' loop

// Arrays
// const arr = ['ravi','mani','kanya','manisha'];
// const items = [
//     {name:'manisha'},
//     {name:'ravi'},
//     {name:'kanya'}
// ]
// for(const item of arr){
//     console.log(item);
// }

// for (const item of items){
//     console.log(item.name);
// }

// loop over strings
// const str = "hello world"
// for(const letter of str){
//     console.log(letter);
// }

// loop over maps
// const map = new Map();
// map.set('name','ravi')
// map.set('age',20)

// for(const [key,value] of map){
//     console.log(key,value);
// }


// for 'in' loop

//                                                 

// Higher order Array methods

// forEach

// const socials = ['Twitter','LinkedIn','Facebook','Instagram']
// console.log(socials.__proto__);

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr);


// socials.forEach((social)=> console.log(social))

// Array.filter method
// returns new array

// const numbers =[1,2,3,4,5,6,7,8,9,10,11,12]

// const result = numbers.filter(evenNum => evenNum % 2 ===0)
// console.log(result);

// const retailCom = companies.filter(company => company.category ==='retail' )

// console.log(retailCom);

// const oldCom = companies.filter((company)=> company.start >= 1980 && company.end <= 2005)
// console.log(oldCom);

// const longCom = companies.filter((company) => company.end - company.start >= 10)
// console.log(longCom);


// Array.map method

// const numbers = [1,2,3,4,5,89]

// const doubleNum = numbers.map((num) => num * 2)

// console.log(doubleNum);

// const comCat = companies.map((company)=> {
//     return {
//         name: company.name,
//         category: company.category
//     }
// })
// console.log(comCat);

// const comYears = companies.map((company) =>{
//     return {
//         name: company.name,
//         years: company.end - company.start
//     }
// })

// const numbers = [ 1,2,3,4,5]
// const sqrtNum = numbers.map((num)=> Math.sqrt(num))
// .map((num)=> num * 2)
// console.log(sqrtNum);

// Array.reduce method
//  (initial value) is the starting value of accumulator
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const sum = numbers.reduce((a,b)=> a+b,0)
// console.log(sum);


// const cart = [
//     {id: 1, name: 'product 1', price: 130},
//     {id: 2, name: 'product 2', price: 150},
//     {id: 3, name: 'product 3', price: 175}
// ]

// const total = cart.reduce((acc,cur)=> acc + cur.price,0)
// console.log(total);

// Challenges
// ch - 1
// const people = [
//     {
//         firstName :'John',
//         lastName : 'Doe',
//         email : 'john@mail',
//         phone: 7879898,
//         age: 30
//     },
//     {
//         firstName :'Jack',
//         lastName : 'Done',
//         email : 'jackn@mail',
//         phone: 12345,
//         age: 26
//     },
//     {
//         firstName :'ravi',
//         lastName : 'medidhi',
//         email : 'ravi@mail',
//         phone: 90307,
//         age: 23
//     },
//     {
//         firstName :'kanya',
//         lastName : 'medidhi',
//         email : 'kanya@mail',
//         phone: 93986,
//         age: 20
//     }
// ]

// const youngPeople = people.filter((member)=> member.age  <=25)
// .map((member)=>{
//     return {
//         name: member.firstName + member.lastName,
//         email: member.email
//     }
// })

// console.log(youngPeople);

// ch -2
// const numbers = [2,-30,50,20,-12,-9,7]

// const positiveNum = numbers.filter((num) => num > 0)
// .reduce((acc,cur)=> acc+cur,0 )
// console.log(positiveNum);

// ch - 3

// const Words = ['coder','programer','developer']

// const capitalizedWords = Words.map((word)=>{
//     return word[0].toUpperCase() + word.slice(1)
// })
// console.log(capitalizedWords);

// ans 2
// for(let word of Words){
//     let capitalized = word[0].toUpperCase();
//     let capitalizedWords = capitalized+word.slice(1);
//     console.log(capitalizedWords);
// }














