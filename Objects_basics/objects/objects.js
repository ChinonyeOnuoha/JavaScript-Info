/* An empty object (“empty cabinet”) can be created using one of two syntaxes: */

let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax


// Literals and properties
let userN = {
    name: 'Nonye',
    age : 30,
    occupation : 'Developer',   
};
console.log(userN.occupation);


// The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;


// To remove a property, we can use delete operator:

delete user.age;


// We can also use multiword property names, but then they must be quoted:

let userJ = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };



// An object declared as const can be modified;
const userP = {
    name: "John"
  };
  
  userP.name = "Pete"; // (*)
  
  alert(userP.name); // Pete



// Square brackets
let userS = {};

// set
userS['Likes birds'] = true;

// get
alert(userS['likes birds']); //alerts true

// delete
delete userS['likes birds'];


let key = "likes birds";

// same as user["likes birds"] = true;
userS[key] = true;

