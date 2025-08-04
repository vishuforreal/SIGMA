// Practice Questions:

// let msg = "help!";
// let newmsg = msg.trim();
// newmsg = newmsg.toUpperCase();
// console.log(newmsg);
// console.log(msg);

// let namea = "ApnaCollege";
// console.log(namea.slice(4, 9));
// console.log(namea.indexOf("na"));
// console.log(namea.replace("Apna","Our"));
// console.log(namea);

// namea = namea.slice(4, namea.length);
// console.log(namea);
// console.log(namea.replace("l","t"));
// console.log(namea.length);

//Practice Questions

// let month = ['January', "July", "March", "August"];
// console.log(month);

// month.shift();
// month.shift();

// month.unshift("June");
// month.unshift("July");
// console.log(month);

//Practics Questions

// let month =["january", "july", "march", "august"];
// console.log(month);
// month.splice(0,1);
// month.splice(1,0,"june");
// console.log(month);

// let language = ["C","C++","HTMl","JavaScript","Python","Java","C#","SQL"];
// console.log(language);
// console.log("Original index of javascript :", language.indexOf("JavaScript"));
// language.reverse();
// console.log(language);
// console.log("After reverse index of javascript :", language.indexOf("JavaScript"));

//Practice Questions 

// const arr = [["x"," ","O"],[" ","X"," "],["O"," ","X"]];
// console.log(arr);
// arr [0][1] = "O";
// console.log(arr);

let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
alert(arr);
let n = prompt("Enter your index no. :");
n=n*-1;
// if(n<0 || n>arr.length-1){
//     console.error("You are entering wrong index. This index no. is out of boundary.");
// }
// else{
//     console.log((arr.slice(0,n)));
// }
console.log((arr.slice(n)));