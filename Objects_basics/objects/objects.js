// /* An empty object (“empty cabinet”) can be created using one of two syntaxes: */

// let user = new Object(); // "object constructor" syntax
// // let user = {};  // "object literal" syntax


// // Literals and properties
// let userN = {
//     name: 'Nonye',
//     age : 30,
//     occupation : 'Developer',   
// };
// console.log(userN.occupation);


// // The value can be of any type. Let’s add a boolean one:

// user.isAdmin = true;


// // To remove a property, we can use delete operator:

// delete user.age;


// // We can also use multiword property names, but then they must be quoted:

// let userJ = {
//     name: "John",
//     age: 30,
//     "likes birds": true  // multiword property name must be quoted
//   };



// // An object declared as const can be modified;
// const userP = {
//     name: "John"
//   };
  
//   userP.name = "Pete"; // (*)
  
//   alert(userP.name); // Pete



// // Square brackets
// let userS = {};

// // set
// userS['Likes birds'] = true;

// // get
// alert(userS['likes birds']); //alerts true

// // delete
// delete userS['likes birds'];


// let key = "likes birds";

// // same as user["likes birds"] = true;
// userS[key] = true;



// // Computed properties
// let fruit = prompt('Which fruit to buy?', 'apple');

// let bag = {
//     [fruit] : 5, //The name of the property is taken from the variable fruit
// };
// alert(bag.fruit); //5 if fruit ='apple' else returns undefined



// // Property value shorthand
// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   };
  
//   let user = makeUser("John", 30);
//   alert(user.name); // John


// //   Instead of name:name we can just write name, like this:

//   function makeUser(name, age) {
//     return {
//       name, // same as name: name
//       age,  // same as age: age
//       // ...
//     };
//   };



// // Property existence test, “in” operator
// let userT = {
//     name : 'John',
//     age : 30,
// };
// alert('age' in userT); // returns, true, userT.age exists
// alert('blabla' in userT); //returns, false, user.blabla dosen't exist



// // The “for…in” loop
// let userF = {
//     name: 'Wendy',
//     age: 30,
//     isAdmin: true,
// };

// for(let key in userF){
//     //keys
//     alert(key); //name. age, isAdmin
//     //values for the keys
//     alert(userF[key]); //returns Wendy, 30, true
// };



// // Ordered like an object
// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
//   };
  
//   for (let code in codes) {
//     alert(code); // 1, 41, 44, 49
//   };




// //   On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:

//   let userO = {
//     name: "John",
//     surname: "Smith"
//   };
//   userO.age = 25; // add one more
  
//   // non-integer properties are listed in the creation order
//   for (let prop in userO) {
//     alert( prop ); // name, surname, age
//   };



// /* 
//   So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

//   Like this: */
  
//   let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
//   };
  
//   for (let code in codes) {
//     alert( +code ); // 49, 41, 44, 1
//   };




// Task 1
let userName = {
    name: 'Izu',
    surname: 'Okata',
};

userName.name = 'Azom';
alert(userName.name); //returns Azom

delete userName.name;
alert(userName.name); //returns undefined because it has been deleted


// Task 2
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false


function isEmpty(obj){
    for(let key in obj){
        //if the loop has started, there is a property 
        return false;
    }
    return true;
};


// Task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for(let prop in salaries){
    sum += salaries[prop];
};
alert(sum); //returns 390 (100 + 160 + 130)



// Task 4
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};
multiplyNumeric(menu);

function multiplyNumeric(num){
    for(let prop in num){
        if(typeof num[prop] == 'number'){
            num[prop] *= 2;
        }
    }
};

alert(multiplyNumeric(menu))