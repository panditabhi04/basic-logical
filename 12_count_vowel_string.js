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


