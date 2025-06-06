// // comments

// // alert("hello external js")

// // synstex => set of ruls

// // keywords => reserved words (a word which has a special meaning)

// // this , let , const , function

// console.warn("hello java script");

// //  data types And  variables

// // data => information type

// // in js we have 2 diffrent catagoryes of data types:

// // Primitive Datatypes

// /*
// string => "c" , 'sameer' , `10`
// number => 10 , 10.0
// bollen => true / false
// null   => null
// undifned => undifined
// symbol
// BigInt
// */

// // Non-Primitive Datatypes

// // object = {}
// // array = []
// // functions = function(){}

// // Variables (container which helps to store data / information)

// // synatax
// // variableName  assignment operator(=) value
// // we can create a variablename with our own chosse but we can use keywords (reserverd words) as a
// // variable name

// // userName = "Surash";
// // age = 20;
// // isIndian = true;

// //   in one var we can store multiple values , [] , data can seperated by ,

// // users = ["sameer", "ram", "sham", "hussain", 20, {}, [], true, undefined, null];

// // object {} , store data in key/value pares , data can seperated by ,
// // user = { userName: "Surash", age: 20, isIndian: true };

// // functions

// // syntax

// // function declaration
// // function functionName () { ... }

// // function call
// // functionName()

// // function greet(){
// //     // 100
// //     return "Hello Good Mornign"
// // }

// // 100 * 4 => 400

// // 100 + 4 => 104

// // reuseable
// // console.log(greet())
// // console.log(greet())
// // console.log(greet())
// // console.log(greet())

// // arguments / parameters

// // parameters
// // function sum(a, b) {
// //   return a + b;
// // }

// // arguments
// // console.log(sum(2, 1))
// // console.log(sum(10, 1))
// // console.log(sum(19, 11))
// // console.log(sum(100, 1))

// // we use this keywords to declare variable: (creation)
// // var, let,  const

// // keyword userName = "sameer";

// // var userName = "sameer";

// // let age = 20;

// // const isPresent = true;

// // scops : global scope, block scope, functional scope (lexical scope)

// var age = 20;

// {
//   console.log(age); // 20
//   var age = 30;
// }

// console.log(age);

// // let and const (to create block scope variables) (2015-2016) Es6 features

// // let age = 1;

// // {
// //   console.log(age)
// //   let age = 20;
// //   // let userName = "sameer";
// //   console.log("age", age);
// // }

// // console.log(age);

// // variable declaration (creation)
// // let rollNo = 20;

// // varable value re-assignment (we can re-assignment the varaiable with let keyword )
// // rollNo = 21

// // varable value re-declaration (we cant re-declare the varaiable with let keyword )
// // let rollNo = 21

// // console.log(rollNo)

// // const age = 20;

// // varable value re-assignment (we can't re-assignment the varaiable with const keyword )
// // age = 21;

// // varable value re-declaration (we cant re-declare the varaiable with const keyword )
// // const age = 30;

// // console.log(age)

// // console.log(myName)

// // var myName = "sahil"

// // console.log(userName)

// // let  userName ="sameer";
// // let age = 20;
// // let isPresent = true;
// // const dateOfBirth = "01-01-2000"
// // dateOfBirth = "02-01-2001"
// // console.log(dateOfBirth)
// // hosting

// Operators

// •	Arithmetic Operators

//  4/2 => 2 4%2=>0
// 1++ (1 + 1) => 2++ =>3++ (3 + 1) => 4
// 10-- (10 - 1) => 9-- => 8=>
// +,-,*, /(2), % (0)(module) , ++(increment) ,--(decrement)

// •	Assignment Operators
// a = 2 + 1 => a = 3
// = ,

// let a = 3;
// a++
// a = a + 10
// a+=20
// a-=1
// a*=2
// a/=3
// a%=3
// console.log("a" ,a)

// •	Comparison Operators (boolen values (true / false))
// > , <, == (loose operator) , === (strict operator) , <=, >=
let a = "20";

// console.log(a > 20);
// console.log(a < 11)
// console.log(a <= 10);
// console.log(a >= 8)
// console.log(a == 20) // only values 20 == 20
// console.log(a === '20') // it will check both data type and value
// console.log(a != 30); // (20 != 30) true

// •	Logical Operators
// &&(AND), ||(OR) , !(NOT)

// let userName = "sameer";
// let age = 20;
// let citizion = "Indian";

// console.log(age > 18 && citizion === "Indian" )
// (true && true => true)
// (false && true => false)
// (true && false => false)
// (false && false => false)

//  console.log(age > 49 || citizion === "UK" )
// (true || true => true)
// (false || true => true)
// (true || false => true)
// (false || false => false)

// console.log(!age > 10);

// Conditional Statements (decision statemnets)

//  if else statements

// syntax
// if(condtion){}else{}

// let age = 21;
// if (age > 18) {
//   console.log("Hello You are 18+");
// } else {
//   console.log("Not Yet 18+");
// }

// if else if

// let studentMarks = 80;

// if (studentMarks >= 95) {
//   console.log("A Grade");
// } else if (studentMarks >= 80) {
//   console.log("B Grade");
// } else if (studentMarks >= 65) {
//   console.log("C Grade");
// } else if (studentMarks >= 35) {
//   console.log("D Grade");
// } else {
//   console.log("Fail");
// }

// let day = 1; // 1 -7
// // break , continu
// switch (day) {
//   case 1:
//     console.log("Monday");
//   break;
//   case 2:
//     console.log("Tuesday");
//   break;
//   case 3:
//     console.log("Wed");
//   break;
//   case 4:
//     console.log("Thursday");
//   break;
//   case 5:
//     console.log("Fri");
//   break;
//   case 6:
//     console.log("Sat");
//   break;
//   case 7:
//     console.log("Sun");
//   break;
//   default:
//     console.log("Given Day is Not recog");
// }

// let userName = "sameer";
// let age = 22;
// let isPassport = true;
// let english = true;

// if(age >= 18 || isPassport === true  ){
//     console.log("Visa Alloted")
// }else{
//     console.log("Given Terms and Conditions Failed")
// }

// ternary operator (ES6 fetures) 2015

// if (age > 18) {
//   console.log("hello");
// } else {
//   console.log("Bye");
// }

// age > 18 ? console.log("hello") : console.log("Bye");

// age >= 18 || isPassport === true
//   ? console.log("Visa Alloted")
//   : console.log("Given Terms and Conditions Failed");

// age >= 21
//   ? console.log("first")
//   : age > 18
//   ? console.log("second")
//   : console.log("bye");

// Loops

// for loop , while , do-while

// let i = 0  (varaiable declaration)
// i < 10     (condtion)
// i++/i--        (increment/decrement)

// for (let i = 0; i < 10; i++) {
//   if (i == 3) {
// continue; // => skip
// break; // => exit from loop
//   }
//   console.log("hello : ", i);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 8;
// do {
//   console.log("do",i);
//   i++
// } while (i < 10);

// for(let i = 10 ; i > 0 ; i--){
//   console.log(i)
// }

// let students = [
//   "sameer",
//   "john",
//   "sahil",
//   "surash",
//   "ram",
//   "nikhil",
//   "harish",
//   "srinivas",
// ];

// index number , start 0, array of length (4)

// console.log(students[0])
// console.log(students[3])
// console.log(students.length)

// for (let i = 0; i < students.length; i++) {
//   console.log(i + 1, students[i]);
// }

// functions :
// a peace / block of code which we can re-use as per our requrement

// function Declaration (Pure function)

// function Creation
// function greet() {
//   console.log("Hello How are you!");
// }

// funciton Call
// greet()

// arg / parameters
// default parameters

// console.log(sum(2, 2, 2)) // it will not give error

// function sum(a = 1, b = 1, c = 1) {
//   console.log(a, b, c);
//   return a + b + c;
// }

// NAN => not a number

// console.log(sum(20, 1));
// let result = sum(20, 30);
// console.log(result);

// console.log(sum(2, 1));

// function Expression (Annonamus funciton) (nameless funciton)

// console.log(sum(2, 2)); // error

// const sum = function (a, b) {
//   return a * b;
// };

// console.log(sum(4, 2));
// console.log(sum(5, 2));

// Arrow Function (ES6 2015)

// const sum = (x, y) => x + y;

// const greet = useName => `Hello ${useName}`;

// console.log(sum(10, 20));
// console.log(sum(20, 20));

// console.log(greet("sameer"))

// function greet(useName, count) {
//   let update = count;
//   if (count == 5) {
//     return console.log(useName, count);
//   }

//   console.log(useName, update);

//   update = count + 1;
//   // recurction
//   return greet("ram", update);
// }

// greet("sameer", 1);

// syncr => line by line execution

// function sum(){return}

// const sum = function(){return}

// const sum = () => {return}

// Arrays (non - primitive data type)

// will store more than one value in single varable

// [] , store data comma (,) saprated

// in we can define any type of data
// (unlike java and c)

// const students = ["sameer", "sham", "sunil"]; // empty array // array length

// stored on the base of index number (start 0)

// console.log(students);
// console.log(students.length);
// console.log(students[1]);
// students[3] = "ram";
// students[4] = "sahil";
// console.log(students[3]); // undifined
// console.log(students);

// const marks = Array()  // class / method
// marks[0] = "sameer";
// marks[1] = "snow";
// marks[1] = "sham";

// console.log(marks);
// console.log(marks.length);

// Array mehtods push , pop , shift , unshift

const fruits = ["apple", "banana", "grapes"];

// push (it will add in last index of array)
// fruits.push("kiwi");
// fruits.push("watermelon")

// console.log(fruits);

// pop (it will remove item of last index of array)
// fruits.pop()
// fruits.pop()
// fruits.pop()

// unshift (it will add on first index of array)
// fruits.unshift("muskmelon");
// fruits.unshift(`straberry`);

// shift (it will remove item of first index of array)
// fruits.shift();

// console.log(fruits);
// console.log(fruits.length);
// //  "", '' ,``

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

const students = [
  { name: "sameer", age: 20, class: "10th", rollNo: 1 },
  { name: "sham", age: 19, class: "12th", rollNo: 2 },
  { name: "suhail", age: 21, class: "11th", rollNo: 3 },
  { name: "john", age: 20, class: "10th", rollNo: 4 },
];

// console.log( students[0].name )
// console.log( students[1].name )
// console.log( students[2]["name"] )

// function filterData(stdClass) {
//   const filterData = [];
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].class == stdClass) {
//       filterData.push(students[i]);
//     }
//   }

//   return filterData;
// }

// console.log(filterData("10th"));

// function filterData(key, value) {
//   const filterData = [];
//   for (let i = 0; i < students.length; i++) {
//     if (students[i][key] == value) {
//       filterData.push(students[i]);
//     }
//   }

//   return filterData;
// }

// console.log(filterData("rollNo", 3));

// Object (realworld entity )

const car = { brand: "TATA", color: "black" }; // empty object

// syntax to access prop
// Dot Notation // Brackert Notation

// console.log(car.brand);
// console.log(car.color)

// console.log(car["brand"])

// car.price = "$150"; // adding prop
// car.color = "white"; // change the value

// delete object prop
// delete car.brand
// console.log(car)

// const car01 = Object();
// car01.brand = "KIA"
// console.log(car01);

// object constructor (blue print)

// function Car02(brand, color) {
//   this.brand = brand;
//   this.color = color;
// }

// const Car02 = function (brand, color) {
//   this.brand = brand;
//   this.color = color;
// };

// new (keyword)

// this (keyword) it will point to parent obj Name

// let tata = new Car02("CURVV", "white");
// let tata1 = new Car02("Nexon", "black");

// tata1.price = "$150";

// console.log(tata);
// console.log(tata1);

// function sum(){} // this

// const sum = function(){} // this

// const sum = () => {} // this not work

// const student = { name: "sameer", class: "10th", rollNo: "1" };

// console.log(Object.keys(student));
// console.log(Object.keys(student).length);
// console.log(Object.values(student));

// console.log(Object.entries(student));

// for (let i = 0; i < Object.keys(student).length; i++) {
//   console.log(student[Object.keys(student)[i]]);
// }

//  for of (loop)
// for (let [key, value] of Object.entries(student)) {
//   console.log(key , value);
// }

// Array Methods

// push , pop , shift , unshift

// map , filter , find , reduce , forEach , sort

// every , some

// slice , splice , flat , join , reverse

// at , includes , indexOf , concat  , toString

// let marks = [20, 24, 22, 21];
// let marks1 = [23];
// console.log("org", marks);
// console.log(marks.at(2));
// console.log(marks.includes(21)); // most imp
// console.log(marks.concat(marks1));
// console.log(marks.indexOf(24));
// console.log(marks.toString());
// console.log(marks.slice(0, 2)); // (starting , end point) (index no)
// marks.splice(1, 3, 100, 101, 102);
// console.log(marks); // insert, delete (start , delete count , inserting values)
// console.log(marks.reverse())
// console.log(marks.join("#"))

// 2D Array
// let fruits1 = [["banana", "apple"], ["grapes", "watermelomn"]];
// console.log(fruits1[0][1]);
// console.log(fruits1.flat()); // layers default (1) => (2)

// function greet(useName) {
//   return `Hello Good Morning ${useName}`;
// }

// function name(userName, cb) {
//   return cb(userName);
// }

// console.log(name("sameer", greet));

//  Students branch (kalyan)  => Javascript branch  (raju)

// they both are working in a same file

function sum() {
  return "Kalayn";
}

console.log(sum());

function raju(){
  return "Hello Raju"
}

console.log(raju())
