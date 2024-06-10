// const x="1";
// const y="2";
// console.log(x,y);

// %s format variable to string
// %d
// %i
// %o

// console.log("I am %s and my age is %d","Sudhanshu",26);
// console.clear();
// console.count("I am dipesh");
// console.count("I am dipesh")
// console.count("I am Nipesh")
// console.countReset("I am dipesh")
// console.count("I am dipesh")

// const function1 =()=> console.trace();
// const function2 =()=> console.trace();

// function2();

// const sum =()=>console.log(`The sum of 2 and 3 is :${2+3}`);
// const multiply =()=>console.log(`The multiplication of 2 and 3 is :${2*3}`);

// const measureTime =()=>{
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("multiply()");
//     sum();
//     console.timeEnd("multiply()");
// }
// measureTime();

const progressBar=require("progress");
const bar=new progressBar("downloading [:bar] : rate/bps :percent :etas",{
    total:20,
});

const timer=setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
},100)
const chalk=require("chalk")
console.log(chalk.green("This is node js tutorial"));