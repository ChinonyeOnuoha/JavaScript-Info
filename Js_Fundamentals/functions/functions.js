// // Function declaration

// function showMessage(){
//     alert('Hello everyone!');
// };
// showMessage();


// // Local variable
// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable
  
//     alert( message );
//   };
  
//   showMessage(); // Hello, I'm JavaScript!
  
//   alert( message ); // <-- Error! The variable is local to the function


// // Outer(Global) variable
// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// };

// alert( userName ); // John before the function call

// showMessage();

// alert( userName ); // Bob, the value was modified by the function


// // Parameters(Function arguments)
// function showMsg(from, test){  //arguments: from, text
//     alert(from + ': ' + text);
// };

// showMsg('Nonye', 'Hey!');
// showMsg('Nonye', 'Hello!');


// // Default values
// function showMessage(from, text = "no text given") {
//     alert( from + ": " + text );
//   };
  
//   showMessage("Ann"); // Ann: no text given



// // returning a value
// function sum(a , b){
//     return a + b;
// }

// let result = sum(2, 2);
// alert(result);


// function checkAge(age){
//     if(age >= 18){
//         return true;
//     }
//     else{
//         return confirm('Do you have permission from your parents ?');
//     }
// }

// let age = prompt('How old are you?, 18');

// if (checkAge(age)){
//     alert('Access granted');
// }
// else{
//     alert('Access denied');
// };




// Task 1
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  };



// Task 2 
// Using a question mark operator '?':

function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
};

// Using OR || (the shortest variant):

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
};


// Task 3 
function min(a,b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
};



// Task 4 
function pow(x, n){
    let result = x;

    for(let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }