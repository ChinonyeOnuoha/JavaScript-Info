// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//   alert( i );
//   i--;
// }


// // Do while loop
// let i = 0;

// do{
//     alert(i);
//     i++;
// }
// while(i < 3);


// // For loop
// for(let i = 0; i < 3; i++){  //Shows 0, 1, and 2
//     alert(i);
// }

// /* begin	  i = 0	Executes once upon entering the loop.
//    condition  i < 3	Checked before every loop iteration. If false, the loop stops.
//    body	alert(i)	Runs again and again while the condition is truthy.
//    step	i++	Executes after the body on each iteration. */



// // Breaking the loop
// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );


// // Continue 
// /* The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows). */


// for(let i = 0; i < 10; i++){

//      // if true, skip the remaining part of the body
//      if(i % 2 == 0) continue;

//      alert(i); //1,3,5,7,9
// }


// // Labels for break/continue
// outer: for(let i = 0; i < 3; i++){
    
//     for(let j = 0; j < 3; j++){
        
//         let input = prompt(`Value at coords (${i}, ${j})`, '');

//         if(!input) break outer;

//     }
// }
// alert('Done!');




// Task 1
let i = 3;

while(i){
    alert( i--);   //Alerts 3,2,1
}

// Task 2
// The prefix form ++i:

let i = 0;
while (++i < 5) alert( i ); //Alerts 1,2,3,4

// The postfix form j++

let j = 0;
while (j++ < 5) alert( j ); //Alerts 1,2,3,4,5


// Task 3
// The prefix form ++i:

let i = 0;
for (let i = 0; i < 5; ++i) alert( i ); //Alerts 0 - 4

// The postfix form j++

let j = 0;
for (let j = 0; j < 5; j++) alert( j );


// Task 4
for(let i = 2; i <= 10; ++i){
    if (i % 2 == 0);
    alert(i);
}


// Task 5
let i = 0;
while(i < 3){
    alert(`number ${i}!`);
    i++;
}


// Task 6
let i = prompt('Input number');

while(i > 100){
    
    if(i < 100){
        alert( i, 'Input again');
    }
    else(i === null || i === ''); {
        alert('cancelled');
    }
}


// Task 7
let n = 10;
for(let n = 2; n <= 10; ++n){
    if(n % 2 != 0);
    alert(n)
}