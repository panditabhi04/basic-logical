const arr = [1, 2, 3, 4];
const arr1 = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++) {
    let sub = [];
    for (let k = i; k <= j; k++) {
      sub.push(arr[k]);
    }
    arr1.push(sub);
  }
}

console.log(arr1);