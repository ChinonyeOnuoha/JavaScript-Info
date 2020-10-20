// let x = 1;

// x = -x;
// alert( x ); // -1, unary negation was applied


// let x = 1, y = 3;
// alert( y - x ); // 2, binary minus subtracts values


// alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
// alert( 8 % 3 ); // 2, a remainder of 8 divided by 3


// alert( 2 ** 2 ); // 4  (2 multiplied by itself 2 times)
// alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 times)
// alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 times)

// alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
// alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


// alert( '1' + 2 ); // "12"
// alert( 2 + '1' ); // "21"
// alert(2 + 2 + '1' ); // "41" and not "221"

// /* Numeric conversion, unary +
// The plus + exists in two forms: the binary form that we used above and the unary form.

// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number. */

// // No effect on numbers
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// // Converts non-numbers
// alert( +true ); // 1
// alert( +"" );   // 0


// let counter = 2;
// counter++;        // works the same as counter = counter + 1, but is shorter
// alert( counter ); // 3


// let counter = 2;
// counter--;        // works the same as counter = counter - 1, but is shorter
// alert( counter ); // 1


// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++

// alert(a); // 1


// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, the lines above did the same

// let counter = 1;
// alert( 2 * ++counter ); // 4


// let counter = 1;
// alert( 2 * counter++ ); // 2, because counter++ returns the "old" value


// let counter = 1;
// alert( 2 * counter );
// counter++;


let a = 1 , b = 1;

let c = ++a;
alert(c);

let d = b++;
alert(d);


let a = 2;
alert(a);

let x = 1 +(a *= 2);
alert(x);


/* "" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2 */



let a = prompt("First number?");
let b = prompt("Second number?");

alert(a + b);