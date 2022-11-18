// function one(){
//     console.log('fuction 1');
// }
// function two(){
//     console.log('fuction 2');
// }
// function three(){
//     console.log('fuction 3');
// }
// setTimeout(one, 2000);
// two();
// three();


// function calc(num1, num2, calcType){
//     if (calcType === 'add') {
//         return num1 + num2;
//     }
//     else if (calcType === 'multiply') {
//         return num1 * num2;
//     }
// }
// console.log(calc(1,3,'multiply'));




// let add = function(a, b){
//     return a + b;
// }
// let multiply = function(a, b){
//     return a * b;
// }
// let doWhatEver = function(a, b){
//     console.log(`hey here are your two numbers${a} and ${b}`);
// }
// let calc = function(num1, num2, callback){
//     return callback(num1, num2)

// }
// console.log(calc(4,4, function(a, b) {
//     return a - b;
// }));
// var arr = [{
//     num: 5,
//     str: 'apple'
// },
// {
//     num: 7,
//     str: 'cabage'
// },
// {
//     num: 1,
//     str: 'banana'
// }];
// arr.sort(function(val1, val2){
//     if (val1.str < val2.str) {
//         return -1;
//     }
//     else{
//         return 1;
//     }
// })
// console.log(arr);

// const posts = [
//     {title: 'post one', body: 'this is post one'},
//     {title: 'post two', body: 'this is post two'}
// ];
//  function getPosts () {
//     setTimeout(() => {
//         let output ='';
//         posts.forEach((post, index) =>{
//             output += `${post.title}`;
//         })
//         return output;
//     }, 1000);
//  }
//  getPosts()

const uno = () => {
    return 'I am one';
}
const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('I am two');
      }, 3000);
    })
}
const tres = () => {
    return 'I am three';
}

const callMe = async() =>{
    let valOne = uno();
    console.log(valOne);
    let valTwo = await dos();
    console.log(valTwo);
    let valThree = tres();
    console.log(valThree);
}
callMe();