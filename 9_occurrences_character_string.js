// var str="Abhishek"
// var strLen=str.length
// var letter="h"
// var count=0
// for(i=0;i<strLen;i++){
//     console.log(str[i]);
//     if(str[i]==letter){
//         count++
//     }
// }
// console.log(`${str}=>${letter}=>${count}`);

var str = "Hello world 11 rr e rrrr";
var obj = {};

for (i = 0; i < str.length; i++) {
  // console.log("i : >>>>>", i);

  if (str[i] != " ") {
    // console.log("str[i] >>>> : ", str[i]);

    if (obj[str[i]]) {
      // console.log("obj[str[i]] >>>>> : ",obj[str[i]]);
      
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
}
console.log(obj);




// strin counting with space

// var str = "Hello world";
// var obj = {};

// for (var i = 0; i < str.length; i++) {
//   if (!obj[str[i]]) {
//     obj[str[i]] = 0;
//   }
//   obj[str[i]]++;
// }

// console.log(obj);


let digits = "23";
let letterObj = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
}
const getCombinations = (digits) => {
  let result = [];
  const pushCombination = (prefix, remaining) => {
    if (remaining.length != 0) {
      let i = 0;
      let digit = remaining[0];
      remaining = remaining.slice(1);
      console.log(remaining, "remaining")
      console.log(digit, "digit")
      while (letterObj[digit].length > i) {
        prefix += letterObj[digit][i];
        pushCombination(prefix, remaining);
        i++;
      }
    } else {

      result.push(prefix);
      prefix = ""

    }
  }
  pushCombination("", digits);
  return result;
}

// var str="Abhishek"
// var strLen=str.length
// var letter="h"
// var count=0
// for(i=0;i<strLen;i++){
//     console.log(str[i]);
//     if(str[i]==letter){
//         count++
//     }
// }
// console.log(`${str}=>${letter}=>${count}`);

var str = "Hello world 11 rr e rrrr";
var obj = {};

for (i = 0; i < str.length; i++) {  
  if (str[i] != " ") {
    if (obj[str[i]]) { 
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
}
console.log(obj);

// strin counting with space

// var str = "Hello world";
// var obj = {};

// for (var i = 0; i < str.length; i++) {
//   if (!obj[str[i]]) {
//     obj[str[i]] = 0;
//   }
//   obj[str[i]]++;
// }

// console.log(obj);


let digits = "23";
let letterObj = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
}
const getCombinations = (digits) => {
  let result = [];
  const pushCombination = (prefix, remaining) => {
    if (remaining.length != 0) {
      let i = 0;
      let digit = remaining[0];
      remaining = remaining.slice(1);
      console.log(remaining,"remaining")
      console.log(digit,"digit")
      while (letterObj[digit].length > i) {
        prefix += letterObj[digit][i];
        pushCombination(prefix, remaining);
        i++;
      }
    } else {

      result.push(prefix);
      prefix = ""

    }
  }
  pushCombination("", digits);
  return result;
}

console.log(getCombinations(digits))