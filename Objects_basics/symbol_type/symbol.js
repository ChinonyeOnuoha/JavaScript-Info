// // id is a symbol with the description "id"
// let id = Symbol("id");


// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert(id1 == id2); // false


// // Convert to string
// let id = Symbol("id");
// alert(id.toString()); // returns Symbol(id), now it works


// // Access description
// let id = Symbol("id");
// alert(id.description); // returns id


// Hidden properties
let user = {
    name: 'Moe'
};
let id = Symbol('id');

user[id] = 2
alert(user[id]);


// Symbols in an object literal
let id = Symbol('id');

let users = {
    name: 'Bayo',
    [id]:123  
};
alert(users[id]); //returns 123



/* Symbols are skipped by for…in
Symbolic properties do not participate in for..in loop.

For instance: */

let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] );



// In contrast, Object.assign copies both string and symbol properties:

let id = Symbol("id");

let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123



// Global symbols
// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true



// Symbol.keyFor

// Get symbol by name
let sym = Symbol.for('name');
let sym2 = Symbol.for('id');

// Get name by symbol
alert(Symbol.keyFor(sym)); //returns name
alert(Symbol.keyFor(sym2)); //returns id









