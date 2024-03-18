// const rectangle = {
//     name : "Rectangle 1",
//     width: 10,
//     height: 20,
//     area : function () {
//         return this.width * this.height
//     }
// }

// Object literals drawback is duplicating every time we need same object

// console.log(rectangle.area());

// constructor function
// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function (){
//         return this.width * this.height
//     }
// }

// const rect1 = new Rectangle("Rect1" ,20, 10);
// console.log(rect1.name);
// console.log(rect1.area());

// const rect2 = new Rectangle("Rect2", 39, 56);
// console.log(rect2.name);
// console.log(rect2.area());

// console.log(rect1.constructor);
// instanceof is operator
// console.log(rect2 instanceof Rectangle );
// 1. A new empty object is created.
// 2. The constructor function is called with the arguments that we passed in
// 3. The 'this' keyword is set to the new empty object.
// 4. The new object is returned from the constructor function

// -----------------------------------------------------------------

// Built-in constructor
// const strLit = "Hello";
// const strObj = new String("Hello");
// console.log(strLit, typeof strLit);
// console.log(strObj, typeof strObj);

// Boxing
// console.log(strLit.toUpperCase());
// console.log(strLit[0]);

// Unboxing
// console.log(strObj.valueOf(), typeof strObj.valueOf());

// console.log(strLit.constructor);

// console.log(strLit instanceof String);

// const funcObj = new Function('x','return x * x');
// console.log(funcObj(3));

//  Object properties

// console.log(rect1.name, rect2.width);

// rect2.perimeter = () => 2 * (rect2.width + rect2.height);

// console.log(rect2.perimeter());

// Add property
// rect1.color = "red";

// Delete property
// delete rect2.perimeter;

// check for property
// console.log(rect2.hasOwnProperty('color'));
// console.log(rect1.hasOwnProperty('color'));

// Get keys
// console.log(Object.keys(rect1));

// Get values
// console.log(Object.values(rect2));

// Get entries
// console.log(Object.entries(rect1));

// for (let [key, value] of Object.entries(rect1)){
//     if(typeof value !== 'function'){
//         console.log(`${key} - ${value}`);
//     }
// }

// --------------------------------------------------------------
// Prototypes
// these are special type of obj where additional methods and properties can be attached and shared across all instances of its constructor function
// const rect = new Rectangle('Rect', 10 ,20);
// console.log(rect);

// Adding methods to prototypes
// function Rectangle(length, width, height){
//     this.length = length;
//     this.height = height;
//     this.width = width;
    
// }

// Rectangle.prototype.area = function(){
//     return this.width * this.length;
// }

// Rectangle.prototype.perimeter = function (){
//     return 2 * (this.height + this.width)
// }

// Rectangle.prototype.isSquare = function(){
//     return this.height === this.width;
// }
// --------------------------------------------------------------
// Object create

// const rectangelPrototypes = {
//     area: function (){
//         return this.width * this.height
//     },
//     perimeter: function (){
//         return 2 * (this.width + this.height)
//     },
//     isSquare: function(){
//         return this.height === this.width
//     }
// }

// function createRectangle(height, width){
//     return Object.create(rectangelPrototypes,{
//         height:{
//             value: height,
//         },
//         width: {
//             value: width,
//         }
//     })
// }

// const rect = createRectangle(10,20);
// console.log(rect);
// console.log(rect.area());

// ----------------------------------------------------
// Prototypical Inheritance & call()

function Shape(name){
    this.name = name;
}

Shape.prototype.logName = function(){
    console.log(`Shape Name: ${this.name}`);
}

function Rectangle(name, width, height){
    Shape.call(this, name)

    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype)

function Circle(name, radius){
    Shape.call(this, name)
    this.radius = radius;
}

const rect = new Rectangle('Rectangle', 20, 20)
const cir = new Circle('Circle', 30)
console.log(rect, cir);

rect.logName();











