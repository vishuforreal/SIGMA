// let i=0;
// for (i;i<=15;i++){
//     if(i%2==1)
//         console.log(i);
// }

// let n, i;
// i=1;
// n = 5;
// while(i<=10){
//     console.log(n * i);
//     i++;
// }

// to do list app using java script

// let todo = [];

// while (true) {
//     let req = prompt("Enter your request which you want to perform:");
//     req = req.toUpperCase();
//     if (req == "LIST") {
//         console.log("--------------------------------------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i + 1, todo[i]);
//         }
//         console.log("--------------------------------------------");
//     }
//     else if (req == "ADD") {
//         let task = prompt("Enter your task which you want to add:");
//         todo.push(task);
//         console.log("Task added.");
//     }
//     else if (req == "DELETE") {
//         console.log("--------------------------------------------");
//         for (i = 0; i < todo.length; i++) {
//             console.log(i + 1, todo[i]);
//         }
//         console.log("--------------------------------------------");
//         n = prompt("Enter your task number which you want to delete:");
//         if (n > 0 && n <= todo.length) {
//             n = n - 1;
//             todo.splice(n, 1);
//             console.log("Task Deleted.");
//             console.log("New list:");
//             console.log("--------------------------------------------");
//             for (i = 0; i < todo.length; i++) {
//                 console.log(i + 1, todo[i]);
//             }
//             console.log("--------------------------------------------");
//         }
//         else {
//             console.log("You enter wrong index number.");
//         }
//     }
//     else if (req == "QUIT") {
//         console.log("Quitting app.");
//         break;
//     }
//     else {
//         console.log("Invalid Input");
//     }
// }

// Practice Questions:

// let arr = [1,2,3,4,5,6,2,3];
// let a;
// console.log(arr);
// while(true){
//     a = arr.indexOf(2);
//     if(a==-1){
//         console.log(`All 2 are removed from array.`);
//         break;
//     }
//     else if(a!=-1){
//         arr.splice(a,1);
//     }
// }
// console.log(arr);

// let num = 123456;
// let sum=0,rev;
// while(num>0){
//     rev=num%10;
//     num=Math.floor(num/10);
//     sum=sum+rev;
// }
// // console.log(sum);

// let n=5;

// let factorial =1;

// for  (let i=1;i<=n;o++){
//     factorial*=i;
// }
// console.log("Factorial:",factorial);

// let arr = [2,5,10,4,2,7,1,9];
// let largest =0;

// for (let i=0;i<arr.length;i++){
//     if (largest < arr[i]){
//         largest=arr[i];
//     }
// }
// console.log("Largest:",largest);