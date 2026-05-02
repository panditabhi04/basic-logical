let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 3;
// clock wishe

// for(i=0;i<n;i++){
//     let ele=arr.shift()//
//     arr.push(ele)

// }
//     console.log(arr);

//anticlock wise
for (i = 0; i < n; i++) {
  let ele = arr.pop();
  arr.unshift(ele);
}
console.log(arr);
