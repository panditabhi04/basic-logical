let arr = ["hi", "all", "helo", "hello"];
let str = "";

for (let i = 0; i < arr.length; i++) {
    str += arr[i]; // add the word
    if (i < arr.length - 1) {
        str += " "; // add space except after last word
    }
}

console.log(str); // hi all
