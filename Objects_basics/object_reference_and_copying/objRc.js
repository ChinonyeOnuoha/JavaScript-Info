// /* When an object variable is copied – the reference is copied, the object is not duplicated.

// For instance:
//  */
// let userJ = { name: "John" };

// let admin = userJ; // copy the reference


// // We can use any variable to access the object and modify its contents:

// let user = { name: 'John' };

// let admin = user;

// admin.name = 'Pete'; // changed by the "admin" reference

// alert(user.name); // 'Pete', changes are seen from the "user" reference



// // Comparison by reference
// let a = {};
// let b = a; // copy the reference

// alert( a == b ); // true, both variables reference the same object
// alert( a === b ); // true

// let a = {};
// let b = {}; // two independent objects

// alert( a == b ); // false



// Cloning and merging, Object.assign
let userC = {
    name: 'Ore',
    age: 20
};

let clone = {}; //the new empty object

//let's copy all userC properties into the empty clone object
for(let prop in userC){
    clone[prop] = userC[prop];
};

//now clone is a fully independent object with the same content as userC
clone.name = 'pete';
clone.age = 45;

alert(userC.name); //returns Ore
alert(clone.name); //returns pete
alert(clone.age); //returns 45
alert(userC.age); //returns 20



let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }



let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // now user = { name: "Pete" }




/* We also can use Object.assign to replace for..in loop for simple cloning:
It copies all properties of user into the empty object and returns it. */

let userO = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, userO);



// Nested cloning
let users = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  alert( users.sizes.height ); // 182




  let userS = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, userS);
  
  alert( userS.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  userS.sizes.width++;       // change a property from one place
  alert(clone.sizes.width); // 51, see the result from the other one

