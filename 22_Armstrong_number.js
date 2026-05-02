// let x = 153
// let num = x.toString().length; // number of digits
// let sum = 0;
// let temp = x;

// while (temp > 0) {
//     let y = temp % 10;
//     sum += y ** num; // raise digit to power of length
//     temp = Math.floor(temp / 10);
// }
// if (x === sum) {
//     console.log("Yes");

// } else {
//     console.log("no");

// }

let num = 153;
let temp = num;   // here num Extract-digits thay chhe mate ahya intertion na end   ma 0 ave    -chhe  
let sum = 0;

while (num > 0) {
    let digit = num % 10;
    console.log("digit : ",digit);
    
    sum = sum + (digit * digit * digit);
    num = Math.floor(num / 10);
}

if (temp === sum) {
    console.log("Yes, Armstrong number");
} else {
    console.log("No, not an Armstrong number");
}
