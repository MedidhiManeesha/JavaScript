// IIFE (immediately Invoked Function Expressions)
// to avoid global scope pollution

(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('hello from IIFE');
    hello();
})();


(function (name) {
    console.log('Hello'+ name);
})('ravi');

(function hello(){
    console.log(('hello'));
})();


(function (l,b){
    console.log(`the area of rectangle of len:${l} and bre:${b} is = ${l*b}`)
})(14,20);





