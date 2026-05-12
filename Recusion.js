// let str = "javascrpit is scrpitnig lanung"
// let count = 0
// let str1 = ""

// for (i = 0; i < str.length; i++) {
//     if (str1[i] === "") {
//         count++
//     }
// }
// console.log("ount : ",count);
// let str = "javascrpit is scrpitnig lanung"
// let count = 0
// let str1 = ""

// for (i = 0; i < str.length; i++) {
//     if (str1[i] === "") {
//         count++
//     }
// }
// console.log("ount : ",count);


function printNumbers(num) {
  if (num > 100) return;

  console.log(num);
  printNumbers(num + 1);
}

printNumbers(1);