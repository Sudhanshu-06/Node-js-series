// // function add(a,b){
// //     return a+b;
// // }

// // var add=function(a,b){
// //     return a+b;
// // }

// // var add =(a,b) => {return  a+b};

// // var add= (a,b) =>a+b;

// // var result =add(2,8);
// // console.log(result);

// // (function(a,b){
// //     console.log('aman is added');
// // })();

// /*function callback(){
//     console.log("I am  calling callback function");
// }

// const add = function(a,b, callback){
//     var result= a+b;
//     console.log('result:'+result); //main function work is complete
//     callback(); 
// }
// add(3,100,callback);
// console.log("now adding i succesfully completed");
// */

// const add = function(a,b, callback){
//     var result= a+b;
//     console.log('result:'+result); //main function work is complete
//     callback(); 
// }
// // add(2,3, function(){
// //     console.log("add completed")
// // });

// add(2,3, () => console.log('add completed'));

// var fs = require('fs');
// var os = require('os');

// var user= os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi ' + user.username + '!\n', ()=>{
//     console.log('file is creadted');
// });


const notes = require('./notes.js');
var _ = require('lodash');
console.log('server file is available');

var age=notes.age;

var result= notes.addNumber(age+18,10);

console.log(age);
console.log('result is now '+result);


var data = ["person", "person",1,2,1,2,'name','age','2'];
var filter= _.uniq(data);
console.log(filter);

console.log(_.isString('Sudhanshu'));
console.log(_.isString(3));
console.log(_.isString(false));