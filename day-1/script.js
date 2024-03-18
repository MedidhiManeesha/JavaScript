const x = 100;
console.log(x);
console.error('Alert');
console.warn('Warning');
console.table({name: 'Manisha', email:'manisha@gmail.com'});
console.group('simple');
console.groupEnd();

const style = 'padding: 10px; background-color:black; color:#fff';
console.log('%c Hello World', style);

/* 
ctrl + left/right to move on words
alt + up/down to move a line
shift + alt + up/down copies line
ctrl + D selects the same word in the page
ctrl + shift + D selects and changes the same word in the page
alt + click selects random places
ctrl + B toggles side bar (in VS code)
ctrl + ~ opens terminal from down

Naming Conventions
- Only letters,dollar signs,numbers and underscores
- Can't start with a number

Multi-word Formatting
-firstName = camelCase
-first_name = underscore
-FirstName = PascalCase
-firstname = lowercase 
*/

const person = {
    name : 'Manisha'
    
}

person.name = 'Ravi'
person.email = 'ravi@gmail.com'
console.log(person);

// Declare multiple values
let a,b,c;
const d =30, e =20, f =10;




