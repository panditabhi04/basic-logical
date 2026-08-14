// Javascript_logic
// var str = "Abhishek";
// var str1 = "";

// for (i = str.length - 1; i >= 0; i--) {
//   str1 += str[i];
// }

// console.log("res", str1);
// if (str1 === str) {
//   console.log("plendrom");
// } else {
//   console.log("not");
// }
// console.log("str.length",str.length);

// Javascript method
var str = "mam";
var n = 3
// console.log("length",str.length);


// const reversStr=str.split('').reverse().join('')
// console.log("reversStr",reversStr);

// if(str===reversStr){
//     console.log("plendrom")
// }else{
//     console.log("not")
// }

// let str1 = ""

const fun = (str, i = 0) => {
    let n = str.length;

    if (i >= n / 2) {
        return true; 
    }

    if (str[i] !== str[n - i - 1]) {
        return false; 
    }

    return fun(str, i + 1); 
};

console.log("Answer : ", fun("mom"));   
console.log("Answer : ", fun("hello")); 

// Javascript_logic
// var str = "Abhishek";
// var str1 = "";

// for (i = str.length - 1; i >= 0; i--) {
//   str1 += str[i];
// }

// console.log("res", str1);
// if (str1 === str) {
//   console.log("plendrom");
// } else {
//   console.log("not");
// }
// console.log("str.length",str.length);

// Javascript method
var str = "mam";
var n = 3
// console.log("length",str.length);

// const reversStr=str.split('').reverse().join('')
// console.log("reversStr",reversStr);

// if(str===reversStr){
//     console.log("plendrom")
// }else{
//     console.log("not")
// }

// let str1 = ""

const fun = (str, i = 0) => {
    let n = str.length;

    if (i >= n / 2) {
        return true; 
    }

    if (str[i] !== str[n - i - 1]) {
        return false; 
    }

    return fun(str, i + 1); 
};

console.log("Answer : ", fun("mom"));   
console.log("Answer : ", fun("hello")); 






