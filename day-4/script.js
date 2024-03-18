x = {
    name :'manisha',
    age :14,
    address:{
        street: 'sitara center',
        city : 'vijayawada'
    }
}

p = x.name
p = x['age']
p = x.address['street']
x.village = 'false'

x.person = function () {
    console.log(`hello my name is ${this.name}`);
}
x.person()
console.log(x);

me = {
    hello : ' mani',
    gym : true,
    arr : [7,0,9,7],
    id10: 1,
    id20: 1
}
id1 = {a:1, b:1}
id2 = {c:1, d:1}
id3 = {...id1, ...id2}
id4 = Object.assign([], id1, id2)
console.log(id4);
x = Object.keys(me)
x = Object.entries(me)
x = me.hasOwnProperty('hello')
console.log(x);


// Destructuring & Naming

firstName = 'manisha';
lastName = 'medidhi';
age = 15;

person = {
    firstName,  // key & value are same
    lastName,  // value is a variable
    age
}
console.log(person.firstName);

// Destructuring

const todo = {
    id :'1',
    title :'trash'
}

// const {id , title} = todo;
// console.log(id , title);

const {id: todoId, title} = todo
console.log(todoId); 

// Destructure arrays
const numbers = [34,56,78,90]
const [first , second , ...rest] = numbers
console.log(first, second, rest);

// JSON  javascript object notation
// it's a lightweight data interchange format

const post = {
    id:1,
    title: 'post one',
    body: 'this is json body'
}

// convert to JSON string
const str = JSON.stringify(post)

// parse JSON
const obj = JSON.parse(str)
console.log(obj);

const library = [ 
    {
        title : 'manisha',
        author :'father',
        status :{
            own: true,
            reading : false,
            read: false
            }
        },
    {
        title : 'kanya',
        author :'mother',
        status :{
        own: true,
        reading : false,
        read: false
            }
    },
    {
        title : 'ravi',
        author :'nanna',
        status :{
        own: true,
        reading : false,
        read: false
        }
    }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
const {title :firstBook} = library[0]
console.log(library);

const str1 = JSON.stringify(library)
console.log(str1);













