let str = "javascript hh juhuh";
let arr = [];
let str1 = "";

for (let i = 0; i <= str.length; i++) {
    if (str[i] === " ") {
        //Remove space part
        arr[arr.length] = str1;  // push str1
        str1 = "";
    } else {
        // Add String Part
        str1 += str[i];
    }

    // 👇 handle last str1 when loop reaches end
    if (i === str.length - 1) {
        arr[arr.length] = str1;
    }
}

console.log(arr);
// ["javascript", "is", "a", "scripting", "language"]


// let str1 = "javascript";
// let str1 = [];

// for (let i = 0; i < str.length; i++) {
//     str1[i] = str[i];   // push each character
// }

// console.log("str1 : ",str1);
// // ["j","a","v","a","s","c","r","i","p","t"]

// console.log([...str1]);


