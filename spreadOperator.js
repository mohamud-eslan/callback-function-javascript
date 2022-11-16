// function sum (x, y, z){
//     return x + y + z;
// }
// const numbers = [1,2,3];

// console.log(sum(...numbers));
// console.log(sum.apply(null, numbers));

// function myFunction(x, y, z) {
//     console.log(x+y+z)
// }
// var args = [0, 1, 2];
// myFunction(...args);
// arr = [1, 2, 3];
// newArr = [...arr];
// newArr.push(4);
// console.log(newArr);

var arr1 = [1, 3, 4, 5];
var arr2 = [7, 3, 4, 5];
// newArr = arr1.concat(...arr2);
arr1 = [...arr1, ...arr2]

console.log(arr1)