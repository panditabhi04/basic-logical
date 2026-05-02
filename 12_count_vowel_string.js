const str = "Abhishek";
const vowels = "aeiouAEIOU";
let count = 0;

for (const char of str) {
    
console.log("char : >>>> ",char);
console.log("str : >>>> ",str);


    for (let i = 0; i < vowels.length; i++) {
        if (char === vowels[i]) {
            // console.log("vowels[i] : >>> ",i,vowels[i]);
            
            count++;
            break; // stop checking once found
        }
    }
}

console.log("Count : ", count);


const str = "Abhishek";
const vowels = "aeiouAEIOU";
let count = 0;

for (const char of str) {
for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
        count++;
        break; // stop checking once found
    }
}
}

console.log("Count : ",count);


