// // Method
// let user = {
//     // ...
//   };
  
//   // first, declare
//   function sayHi() {
//     alert("Hello!");
//   };
  
//   // then add as a method
//   user.sayHi = sayHi;
  
//   user.sayHi(); // Hello!



// // Method shorthand
// // these objects do the same

// userM = {
//     sayHi: function() {
//       alert("Hello");
//     }
//   };
  
//   // method shorthand looks better, right?
//   userH = {
//     sayHi() { // same as "sayHi: function()"
//       alert("Hello");
//     }
//   };



// // "this" in methods
// let method = {
//     name: 'Henry',
//     age: 24,

//     sayHi(){
//         //"this" is the current object
//         alert(this.name);
//     }
// };

// method.sayHi(); //returns Henry





// Task 1
let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    sum() {
        return this.a + this.b;
    },


    mul(){
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// Task 2
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };2
  
  ladder.up().up().down().up().down().showStep(); // 1


/*   We also can write a single call per line. For long chains it’s more readable: */
  
  ladder
    .up()
    .up()
    .down()
    .up()
    .down()
    .showStep(); // 1