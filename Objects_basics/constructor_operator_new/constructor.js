// // Constructor function
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// };

// let user = new User('Jack');
// alert(user.name); //returns Jack
// alert(user.isAdmin); //returns false



// // Return from constructors. For instance, here return overrides this by returning an object:
// function BigUser() {

//     this.name = "John";
  
//     return { name: "Godzilla" };  // <-- returns this object
//   };
  
//   alert( new BigUser().name );  // Godzilla, got that object



// // Methods in constructor
// function NewUser(name) {
//     this.name = name;

//     this.sayHi = function() {
//         alert('My name is: ' + this.name);
//     };
// };

// let joy = new NewUser('Joy');

// joy.sayHi(); //returns My name is: Joy




// Task 1
function Calculator(){

    this.read = function(){
        this.a = +prompt('a', 0);
        this.b = +prompt('b', 0);
    };

    this.sum = function(){
        return this.a + this.b;
    };

    this.mul = function(){
        return this.a * this.b;
    };
};

let calculator = new Calculator();
calculator.read();

alert('sum = ' + calculator.sum());
alert('mul = ' + calculator.mul());


// Task 2
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('How much to add' , 0);
    };
};

let accumulator = new Accumulator(2); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values