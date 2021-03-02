// // TASK 1
// // It's calculator for primary school, so it has just 4 actions :D
// var x;
// var num1;
// function calc () {
//     while (isNaN(num1) || isNaN(num2) || action == null) {
//         num1 = parseInt(prompt("Enter first value:"));
//         num2 = parseInt(prompt("Enter second value:"));
//         action = prompt("Enter action:" + "\n" + "'+' for sum" + "\n" + "'-' for subtraction" + "\n" + "'*' for multiplication" + "\n" + "'/' for division");
//         if (isNaN(num1) || isNaN(num2) || action == null) {
//             alert ("Try again");
//         }
//     }
//     if (action == "/") {
//         x = num1 / num2;
//     }
//     else if (action == "+") {
//         x = num1 + num2;
//     }
//     else if (action == "-") {
//         x = num1 - num2;
//     }
//     else if (action == "*") {
//         x = num1 * num2;
//     }
// }
// calc ();
// document.write(x);


// // TASK 2
// var num3;
// var status;
// var simple;
// function num () {
//     while (isNaN(num3)) {
//         num3 = parseInt(prompt("Enter value:"));
//         if (isNaN(num3)) {
//             alert ("Try again");
//         }
//     }
//     if (num3 == 0) {
//         status = "zero";
//     }
//     else if (num3 > 0) {
//         status = "positive";
//     }
//     else {
//         status = "negative";
//     }
//     if (num3 == 0 || num3 == 1) {
//         simple = "binary code";
//     }
//     // I'm not sure about 7, because it works even without it in code, but i left it here (7 is lucky number, why not) :D
//     else if (num3 == 2 || num3 == 3 || num3 == 5 || num3 == 7) {
//         simple = "prime";
//     }
//     else if (num3 % 2 == 0 || num3 % 3 == 0 || num3 % 5 == 0 || num3 % 7 == 0) {
//         simple = "composite";
//     }
//     else {
//         simple = "prime";
//     }
// }
// num ();
// document.write(num3 + " It's a " + status + ", " + simple + " number");