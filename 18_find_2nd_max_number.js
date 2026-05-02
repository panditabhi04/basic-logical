// let arr=[2,3,6,4,3]
// --------------inbulit Method----------------
// let arr1=arr.sort((a,b)=>b-a)
// console.log(arr1[1]);

// --------------Without inbulit method----------------

let arr = [2, -2,-5,-4, 3, 6, 4, 3];

let temp;

for (i = 0; i < arr.length; i++) {
  // console.log(arr[i]);

  for (j = i; j < arr.length; j++) {
    // console.log(arr[j]);

    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);

console.log(arr[1]);


// optimal sloution

let largest = arr[0]
let sLargest = -1 // if in array is [-5 , -3 ] like -ve element that time take -infinli
for (i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    sLargest = largest
    largest = arr[i]
  } else if (arr[i] < largest && arr[i] > sLargest) {
    sLargest = arr[i]
  }
}
console.log("sLargest : >>>>>> ",sLargest);