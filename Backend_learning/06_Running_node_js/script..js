// let a=5;
// let b=4;
// console.log(a+b);

const fs= require('fs');

const text= fs.readFileSync("C:\\Users\\ACER\\Desktop\\text.txt");
console.log(text.toString());
console.log("#End");