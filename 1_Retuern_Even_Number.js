// Javascript witout inbult  method

// var arr = [1, 2, 3, 4, 5, 6];
// var arr1 = [];
// var index = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arr1[index] = arr[i];
//     index++;
//   }
// }

// console.log("even number-->", arr1);     

// with inbulit method
const arr=[1,2,3,4,5,6]
const arr1 = arr.filter((item) => item % 2 === 0);
console.log("arr1", arr1);
