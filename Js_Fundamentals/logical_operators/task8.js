// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// }


// // Multiple OR’ed values:

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


// // && (AND) Operator

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30){
//     alert('The time is 12:30');
// };




// Task 1 OR
alert(null || 2 || undefined); //returns the first truthy 2


// Task 2 
alert(alert(1) || 2 || alert(3)); // returns the first truthy 1, then 2


// Task 3 AND
alert(alert(1) && alert(2)); //returns the last true value 1 and undefined


// Task 4 OR, AND, OR
alert(null || 2 && 3 || 4); //returns 3 because && has a higer precedence than ||


// Task 5 
let age = prompt('How old are you ?');

if(age >= 14 && age <= 90){
    alert('Hello !')
}


// Task 6
let age2 = prompt('How old are you?');

if(!(age2 >= 14 && age2 <= 90));{
    alert('Hey hey')
}


// Task 7
let user = prompt("Who's there ?");
let password = prompt('Enter password');

if(user === 'Admin'){
    
    if(password === 'TheMaster'){
        alert('Welcome');
    }
    else if(password == '' || password === null){
        alert('Cancelled');
    }
    else{
        alert("Wrong password");
    }
} 
else if(user === '' || user === null){
    alert('Cancelled');
}
else{
    alert("I don't know you");
}

