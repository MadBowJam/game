// // TASK 1
// var width = prompt('Enter width:');
// var height = prompt('Enter height:');
// if (height > 0 && width > 0) {
//     for (z = 0; z < height; z++) {
//         for (i = 0; i < width; i++) {
//             document.write("X");
//         }
//         document.write("<br>");
//     }
// }
// else {
//     alert("Reload and try positive numbers");
// }




// //TASK 2
// var min = 0;
// var max = 0;
// var sum = 0;
// var average = 0;
// var odd = " ";
// var even = " ";
// var i = 0;
// do {
//     var x = parseInt(prompt("Enter value:"));
//     if (isNaN(x)) {
//         break;
//     }
//     else {
//         if (i == 0) {
//             min = x;
//             max = x;
//         }
//         i++;
//         sum += x;
//         average = (average + x) / i;
//         if (x < min) {
//             min = x;
//         }
//         if (x > max) {
//             max = x;
//         }
//         if (x % 2 == 0) {
//             even += " " + x;
//         }
//         else {
//             odd += " " + x;
//         }
//     }

// }
// while (true);
// document.write("MIN: " + min + "<br>MAX: " + max + "<br>SUM: " + sum + "<br>AVERAGE: " + average + "<br>EVEN: " + even + "<br>ODD: " + odd);


// // TASK 3
// alert ("READ RULES!!!" + "\n" + "1st value must be less than 2nd" + "\n" + "Text won't be displayed");
// var num1 = parseInt(prompt('Enter 1st value:'));
// num1 += 1;
// var num2 = prompt("Enter 2nd value:");
// if (num1 < num2) {
//     var visual = prompt("How do you want to see your result? (enter just number)" + "\n" + "1 - Line via space" + "\n" + "2 - Line via comma" + "\n" + "3 - Column");
//     for (num1; num1 < num2; num1++) {
//         if (visual == 1) {
//             document.writeln(num1);
//             // document.write(num1 + " ");
//         }
//         else if (visual == 2) {
//             document.write(num1 + ", ");
//         }
//         else if (visual == 3) {
//             document.write(num1 + "<br>");
//         }
//         else {
//             alert ("OMG, I'M DONE WITH YOU, START OVER AND READ RULES!!!");
//         }
//     }
// }
// else {
//     alert ("I REPEAT: 1st value must be less than 2nd" + "\n" + "TRY AGAIN");
// }



// // TASK 4
// var num1 = prompt('Enter value more than 10:');
// // I supposse that every loop must work separately, so don't start them all together, or you will get 3 alert messages if num1 not more than 10 :D
// if (num1 > 10) {
//     for (i = 0; i <= num1; i++) {
//     if (i % 10 == 0 && i % 3 == 0) {
//         document.write("<strong style=color:blue;>" + i + " " + "</strong>");
//         continue;
//     }
//     else if (i % 3 == 0) {
//         document.write("<strong style=color:green;>" + i + " " + "</strong>");
//         continue;
//     }
//     else if (i % 10 == 0) {
//         document.write("<strong style=color:red;>" + i + " " + "</strong>");
//         continue;
//     }
//     document.write(i + " ");
// }
// document.write("<br>");
// }
// else {
//     alert("Reload page and try again :)");
// }


// if (num1 > 10) {
//     var z = 0;
//     while (z <= num1) {
//         if (z % 10 == 0 && z % 3 == 0) {
//             document.write("<strong style=color:blue;>" + z + " " + "</strong>");
//             z++;
//             continue;
//         }
//         else if (z % 3 == 0) {
//             document.write("<strong style=color:green;>" + z + " " + "</strong>");
//             z++;
//             continue;
//         }
//         else if (z % 10 == 0) {
//             document.write("<strong style=color:red;>" + z + " " + "</strong>");
//             z++;
//             continue
//         }
//         else {
//             document.write(z + " ");
//             z++;
//         }
//     }
//     document.write("<br>");
// }
// else {
//     alert("Reload page and try again :)");
// }


// if (num1 > 10) {
// var y = 0;
//     do {
//         if (y % 10 == 0 && y % 3 == 0) {
//             document.write("<strong style=color:blue;>" + y + " " + "</strong>");
//             y++;
//             continue;
//         }
//         else if (y % 3 == 0) {
//             document.write("<strong style=color:green;>" + y + " " + "</strong>");
//             y++;
//             continue;
//         }
//         else if (y % 10 == 0) {
//             document.write("<strong style=color:red;>" + y + " " + "</strong>");
//             y++;
//             continue;
//         }
//         else {
//             document.write(y + " ");
//             y++;
//         }
//     }
//     while (y <= num1);
// }
// else {
//     alert("Reload page and try again :)");
// }


// // TASK 5
// // probably could done it more easier, but it's working, so i left it like that :) (actually it's reworked 1st task)
// document.write("<table>");;
// for (z = 0; z < 8; z++) {
//     document.write("<tr>");
//     for (i = 0; i < 8; i++) {
//         if (z % 2 == 0 && i % 2 == 0) {
//             document.write("<td style=background-color:white;width:50px;height:50px;></td>");
//         }
//         else if (z % 2 == 1 && i % 2 == 1) {
//             document.write("<td style=background-color:white;width:50px;height:50px;></td>");
//         }
//         else {
//             document.write("<td style=background-color:black;width:50px;height:50px;></td>");
//         }
//     }
//     document.write("</tr>");
// }
// document.write("</table>");


// // TASK 6
// for (z = 0; z < 4; z++) {
//     for (i = 0; i < 10; i++) {
//         document.write("X");
//     }
//     document.write("<br>");
// }

// // nice cheat with center, isn't it ? and i can say that i've done it for better view :D
// document.write("<div style=text-align:center;>");
// for (var i = 0; i < 4; i++) {
//     for (var x = 0; x <= i ; x++) {
//         document.write("X");
//     }
//     for (var y = 1; y <= i; y++) {
//         document.write("X");
//     }
//     document.write("</br>");
// }
// document.write("</div>");

// for (var i = 0; i < 4; i++ ) {
//     for (var z = 0; z < i + 1; z++ ) {
//         document.write( "X" );
//     }
//     document.write("</br>");
// }

// document.write("<div style=text-align:center;>");
// for (var i = 0; i < 4; i++) {
//     for (var x = 0; x <= i ; x++) {
//         document.write("X");
//     }
//     for (var y = 1; y <= i; y++) {
//         document.write("X");
//     }
//     document.write("</br>");
// }
// for (var i = 2; i >= 0; i--) {
//     for (var x = 0; x <= i ; x++) {
//         document.write("X");
//     }
//     for (var y = 1; y <= i; y++) {
//         document.write("X");
//     }
//     document.write("</br>");
// }
// document.write("</div>");