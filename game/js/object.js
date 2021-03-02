// 1. Требуется создать объект с информацией о сотрудниках. 
// Пользователь самостоятельно вводит: Имя, Фамилия, Возраст, Должность. 
// Можно ввести N-е количество сотрудников. 
// Пользователь сам решает, когда закончить ввод. 
// В конце вывести всех сотрудников. 
// Можно использовать вложенные объекты.

// // TASK 1
// // task was just to withdraw, so:
// var employee = {
//     show: function() {
//         while(true) {
//             var employee_name = prompt("Name:");
//             if (employee_name == null) {
//                 break;
//             }
//             var employee_surname = prompt("Surname:");
//             if (employee_surname == null) {
//                 document.write(employee_name);
//                 break;
//             }
//             var employee_age = parseInt(prompt("Age:"));
//             if (employee_age == null) {
//                 document.write(employee_name + " " + employee_surname);
//                 break;
//             }
//             var employee_position = prompt("Position:");
//             if (employee_position == null) {
//                 document.write(employee_name + " " + employee_surname + " " + employee_age + "y.o. ");
//                 break;
//             }
//             document.write(employee_name + " " + employee_surname + " " + employee_age + "y.o. " + employee_position + "<br>");
//         }
//     }
// }
// employee.show();


// 2. Создать объект, который будет заполняться пользователем, пользователь вводит наименование товара и его цену. 
// Внутри объекта требуется создать методы, которые будут выводить самый дешевый товар, самый дорогой и общую сумму. 
// Пользователь должен иметь возможность запросить одно из трех значений.

// // TASK 2
// var shopping_list = {
//     product_name: function() {
//         array_name = [];
//         array_price = [];
//         while(true) {
//             var item_name = prompt("Name:");
//             if (item_name == null) {
//                 break;
//             }
//             else {
//                 array_name.push(item_name);
//             }
//             var item_price = parseInt(prompt("Price:"));
//             if (isNaN(item_price)) {
//                 break;
//             }
//             else {
//                 array_price.push(item_price);
//             }
//         }
//         document.write("Full list:" + "<br>");
//         // l becouse i've done it last 
//         for (l = 0; l < array_name.length; l++) {
//             if (isNaN(array_price[l])) {
//                 array_price[l] = "";
//             }
//             document.write((l + 1) + ") " + array_name[l] + " " + array_price[l] + "<br>")
//         }
//         var withdraw = prompt("What do you want to see ?" + "\n" + "1 if full price" + "\n" + "2 if min price" + "\n" + "3 if max price");
//         if (withdraw == 1) {
//             this.product_price_full();
//         }
//         else if (withdraw == 2) {
//             this.product_price_min();
//         }
//         else if (withdraw == 3) {
//             this.product_price_max();
//         }
//         else {
//             alert("ok, here is full list for you");
//         }
//     },
//     product_price_full: function() {
//         var item_price_full = 0;
//         for (i = 0; i < array_price.length; i++) {
//             item_price_full += array_price[i];
//         }
//         document.write("Full price is " + item_price_full);
//     },
//     product_price_min: function() {
//         var item_price_min;
//         var min;
//         for (j = 0; j < array_price.length; j++) {
//             if (j == 0) {
//                 min = array_price[j];
//                 item_price_min = "Min price is " + array_name[j] + " " + array_price[j];
//             }
//             if (array_price[j] == "") {
//                 break;
//             }
//             if (array_price[j] < min) {
//                 item_price_min = "Min price is " + array_name[j] + " " + array_price[j];
//             }
//         }
//         document.write(item_price_min);
//     },
//     product_price_max: function() {
//         var item_price_max;
//         var max;
//         for (k = 0; k < array_price.length; k++) {
//             if (k == 0) {
//                 max = array_price[k];
//                 item_price_max = "Max price is " + array_name[k] + " " + array_price[k];
//             }
//             if (array_price[k] == "") {
//                 break;
//             }
//             if (array_price[k] > max) {
//                 item_price_max = "Max price is " + array_name[k] + " " + array_price[k];
//             }
//         }
//         document.write(item_price_max);
//     },
// }
// shopping_list.product_name();