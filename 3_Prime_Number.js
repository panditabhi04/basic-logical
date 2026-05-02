let n = 11
for (i = 2; i < n; i++) {
  if (n % i === 0) {
    // var res = "Not Prime Number";
    console.log("Not Prime");

    break;
  } else {
    // var res = "Prime Number";
    console.log("Yes");
    break;

  }
}
// console.log(`${n} is`, res);

// let n = 37;
// let count = 0;
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     count++
//     // count=count+1
//   }
//   console.log("count", count);

// }

// if (count === 2) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }


// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     count++;
//   }
//   console.log("count", count);

// }

// if (count === 2) {
//   console.log("Yes"); // prime
// } else {
//   console.log("No"); // not prime
// }


var arr = [1, 2, 3, 4, 5]
var arr1 = []
var index = 0
for (i = 0; i < arr.length; i++) {
  if (arr[i] % i !== 0) {
    arr1[index] = arr[i]
    index++
  }
}
// console.log(arr1);

// var arr = [1, 2, 3, 4, 5];
// var arr1 = [];
// var index = 0;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % i !== 0) {
//     arr1[index] = arr[i];
//     index++;
//   }
// }
// console.log("arr1 : ", arr1);
