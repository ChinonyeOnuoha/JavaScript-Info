// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );   //Alerts 'Exactly'
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// // Without the breaks, it alerts 'Exactly, Too large and I don't know such values'


// // Switch/case argument
// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     alert("this doesn't run");
// };


// // Grouping of case
// let a = 3;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }


// // Type matters
// let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );  //Runs
//     break;

//   case '2':
//     alert( 'Two' );          //Runs
//     break;

//   case 3:
//     alert( 'Never executes!' ); //Doesn't run because the prompt is a string "3", which is not strictly equal === to the number 3
//     alert( 'Never executes!' ); 
//     break;
//   default:
//     alert( 'An unknown value' );
// }


// Task 1
let browser = prompt('Enter browser type');

if(browser === 'Edge'){
    alert("You've got the edge!");
}

else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert('Okay we support these browsers too');

}

else{
    alert('We hope that this page looks ok!');
};


// Task 2
let a = +prompt('a ?', '');

switch(a){
    case 0:
        alert(0);
        break;
    
    case 1:
        alert(1);
        break;
        
    case 2:
    case 3:
        alert('2, 3');
        break;
    
};