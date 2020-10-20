// let year = prompt('What year were you born in ?');

// if(year >= 1998){
//     alert('You are a GEN Z !');
// }

// else{
//     alert('Hey there old timer !');
// };


// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);


// // Conditional operator ‘?’

// let result = condition ? value1 : value2;

// let accessAllowed = (age > 18) ? true : false;

// // Multiple ?

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// // Non-traditional use of ‘?’

// let company = prompt('Which company created JavaScript?', '');

// (company == 'Netscape') ?
//    alert('Right!') : alert('Wrong.');



// The name of Javascript TASK 2

let nameOfJS = prompt('What is the “official” name of JavaScript?');

if(nameOfJS == 'ECMAScript'){
    alert("You're Right !");
}

else{
    alert("You don’t know? ECMAScript!")
}


// Task 3

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}


// Task 4

let result = (a + b < 4) ? 'Below': 'Over';


// TAsk 5

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

alert(message);
