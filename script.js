"use strict";

//1:
// const searchString = (originalStr, str) => {
//     return originalStr.includes(str);
// }
// console.log(searchString ("Hello", "llo")); // true
// console.log(searchString("Hello", "www")); // false


//2:

// const capitalizeFirstLetter = (str) => {
// let newString = "";
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0) {
//             newString += str[0].toUpperCase();
//         } else {
//             newString +=  str[i];
//         }
//     }
//     return newString;
// }
// console.log(capitalizeFirstLetter("hello")); // Hello
// console.log(capitalizeFirstLetter("HELLO")); // HELLO
// console.log(capitalizeFirstLetter("hElLo")); // HElLo

//3:
//     const truncate = (str, maxlength) => {
//     let newString = "";
//     for (let i = 0; i < str.length; i++) {
//         if (i < maxlength) {
//             newString += str[i];
//         }
//             else  {
//             newString += "…" ;
//             break;
//         }
//     }
//     return newString;
// }
// console.log(truncate("Hello world", 5)); // Hello...
// console.log(truncate("Hello world", 25)); // Hello world

//4:
// const students = [
//     {
//         name: 'John Smith',
//         marks: [10, 8, 6, 9, 8, 7 ]
//     },
//     {
//         name: 'John Doe',
//         marks: [ 9, 8, 7, 6, 7 ]
//     },
//     {
//         name: 'Thomas Anderson',
//         marks: [6, 7, 10, 8 ]
//     },
//     {
//         name: 'Jean-Baptiste Emanuel Zorg',
//         marks: [10, 9, 8, 9 ]
//     }
// ]
// const getStudentsAverageMarks = (students) => {
//     let studentsAverage = [];
//
//     for (let i = 0; i < students.length; i++) {
//         let average = students[i].marks.reduce((sum, current) => sum + current, 0)/students[i].marks.length;
//         let student = {
//             name: students[i].name,
//             marks: students[i].marks,
//             averageMark: average
//         }
//         studentsAverage.push(student);
//     }
//     return studentsAverage;
// }
//
// // console.log(getStudentsAverageMarks(students));
//
// const getAverageMarks = (students) => {
//     let averageSum = 0;
//     for (let i = 0; i < students.length; i++) {
//         averageSum += students[i].marks.reduce((sum, current) => sum + current, 0)/students[i].marks.length;
//     }
//     return  averageSum/students.length
// }
// console.log(getAverageMarks(students));

//5:
// const vehicles = [
// //     { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
// //     { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
// //     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
// //     { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
// //     { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
// //     { make: 'Toyota', model: 'Sequoia', type: 'SUV', price: 45560 },
// //     { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
// //     { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
// //     { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
// //     { make: 'Ford', model: 'Explorer', type: 'SUV', price: 31660 }
// // ];
// //
// // let sumSuvPrices = 0;
// // let count = 0;
// //
// // let result = vehicles.reduce(function(previousValue, item, index, array) {
// //     if (item.type === 'SUV' || item.type === 'suv' ){
// //         sumSuvPrices += item.price;
// //         count++;
// //     }
// //     return sumSuvPrices/count;
// // }, 0);
// // console.log(result);

//6:
// let arr = [10, 20, 3, 4, 0, 99, 97];
//
// function copySorted(arr){
//     let newArray = arr.map(item => item);
//     return newArray.sort( (a, b) => a - b );
// }
// let sorted = copySorted(arr);
// console.log(arr); // [10, 20, 3, 4, 0, 99, 97] - массив не должен изменится!
// console.log(sorted); // [0, 3, 4, 10, 20, 97, 99]


//7:

let getKeysCount = (obj) => Object.keys(obj).length;

console.log(getKeysCount({ name: 'John' })); // 1
console.log(getKeysCount({ name: 'John', age: 22 })); // 2
console.log(getKeysCount({ name: 'John', salary: null })); // 2