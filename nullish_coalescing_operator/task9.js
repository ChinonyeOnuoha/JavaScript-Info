/* he common use case for ?? is to provide a default value for a potentially undefined variable.

For example, here we show Anonymous if user isn’t defined:

let user; */

alert(user ?? "Anonymous"); // Anonymous


// If user had any value except null/undefined 

let user = "John";

alert(user ?? "Anonymous"); // John