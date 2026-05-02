// javascript local
let n = 5;
let num=1;
if (n === 0) return 1;

for (i = 2; i <= n; i++) {
  num = num * i;
}
console.log("factorial", num);
// recursion_ factorial

// const FactorialWithRecusion=(n)=>{
//   if(n===0){
//     return 1
//   }

//    return n*FactorialWithRecusion(n-1)
// }

const fun=(n)=>{
  if(n===1){
    return 1
  }
  return n*fun(n-1)
}

console.log("Factorial",fun(5))
