// // TASK 1
// var arrayA = [];
// var arrayB = [];

// do {
//     var a = prompt("Enter smt:");
//     if (a == null) {
//         break;
//     }
//     arrayA.push(a);
// }
// while(a != null);


// var copy = confirm("Do you want copy?");
// if (copy == true) {
//     arrayCopy();
// }
// else {
//     alert("OK :(" + "\n" + "I've done this for nothing :'(");
// }


// function arrayCopy() {
//     for(i = 0; i < arrayA.length; i++) {
//         // omg, that was so easy, and i spend like 20min to find solution :/
//         arrayB.push(arrayA[i]);
//     }
// }

// document.write(arrayA + "<br>" + arrayB);


// // TASK 2
// var arrayA = [];
// while(true) {
//     var a = parseInt(prompt("Enter number:"));
//     if (isNaN(a)) {
//         var x = confirm("That's all ?");
//         if (x == true) {
//             break;
//         }
//         else {
//             continue;
//         }
//     }
//     arrayA.push(a);
// }
// // // 1st option (fully mine)
// // function sort() {
// //     for (i = 0; i < arrayA.length; i++){
// //         for (j = 0; j < arrayA.length; j++){
// //             if (arrayA[i] < arrayA[j]){
// //                 // and > if decrease
// //                 var sort = arrayA[i];
// //                 arrayA[i] = arrayA[j];
// //                 arrayA[j] = sort;
// //             }
// //         }
// //     }
// // }

// // 2nd option (with stolen line from indian youtube guy :D)
// function sort() {
//     while (true) {
//         var sort = prompt("How do you wanna sort?" + "\n" + "1 if increase"+ "\n" + "2 if decrease");
//         if (sort == 1) {
//             arrayA.sort((a, b) => a - b);
//             // that's what i was talking about on 69 line
//             break;
//         }
//         else if (sort == 2){
//             arrayA.sort((a, b) => b - a);
//             break;
//         }
//         else {
//             alert("READ MESSAGE BEFORE DOING SMT WRONG PLS");
//         }
//     }
// }

// if (arrayA.length == 1) {
//     document.write(arrayA);
// }
// else if (arrayA.length != 0) {
//     sort();
//     document.write(arrayA);
// }


// // TASK 3
// var arrayA = [];
// var arrayB = [];
// var arrayC = [arrayA, arrayB];
// while(true) {
//     do {
//         var humanName = prompt("Enter name:");
//     }
//     while (humanName == null || humanName == ""); // if you want to ask me why number can be a name, just remember how Elon Musk named his son
//     arrayA.push(humanName);

//     arrayB.push(parseInt(prompt("Enter number:")));

//     var x = confirm("Add new contact ?");
//     if (x == true) {
//         continue;
//     }
//     else {
//         break;
//     }
// }

// for (var j = 0; j < arrayB.length; j++) {
//     if (isNaN(arrayB[j])) {
//         var y = confirm("You forgot to enter " + arrayA[j] + " phone number, want to try again ?");
//         if (y == true) {
//             arrayB[j] = parseInt(prompt("Enter phone number for " + arrayA[j]));
//             if (isNaN(arrayB[j])) {
//                 arrayB[j] = "нет информации";
//                 continue;
//             }
//         }
//         else {
//             // is there any way to do this without new loop with "k" ?
//             // it could be just arrayB[j]=, but if we got long array user would see too many confirm windows
//             for (var k = 0; k < arrayB.length; k++) {
//                 if (isNaN(arrayB[k])) {
//                     arrayB[k] = "нет информации";
//                 }
//             }
//             break;
//         }
//     }
// }

// for (var i = 0; i < arrayA.length; i++) {
//     document.write(arrayC[0][i] + ": " + arrayC[1][i] + "<br>");
//     // i tried to write join here, but it wont work :(
// }


// // TASK 4
// var arrayA = [];
// var arrayB = [];
// var arrayC = [];
// var same;
// while(true) {
//     var a = parseInt(prompt("Enter number:"));
//     if (isNaN(a)) {
//         var x = confirm("That's all ?");
//         if (x == true) {
//             break;
//         }
//         else {
//             continue;
//         }
//     }
//     arrayA.push(a);
// }
// document.write(arrayA + "<br>");
// for (var i = 0; i < arrayA.length; i++) {
//     arrayB.length = 0;
//     for (var j = i + 1; j < arrayA.length; j++) {
//         if (arrayA[i] == arrayA[j]) {
//             arrayB.push(j);
//         }
//         if (j == arrayA.length - 1) {
//             break;
//         }
//     }
//     if (arrayB.length >= 1) {
//         for (var k = 0; k <= arrayC.length; k++) {
//             if (arrayC[k] != arrayA[i]) {
//                 same = 0;
//             }
//             else {
//                 same = 1;
//                 break;
//             }
//         }
//         arrayC.push(arrayA[i]);
//         if (same == 0) {
//             document.write("Same number: " + arrayA[i] + " index: " + i + "," + arrayB + "<br>");
//         }
//         else {
//             continue;
//         }
//     }
// }
// // not just feeling power after this task, feeling like SUPERMAN, especially when i've done it without any help, hint, or search :D (but spend 2 much time 4 this, almost 6hours :| )
// // i'm proud of myself ^_^