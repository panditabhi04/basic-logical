const arr = [1, 2, 3, 4, 5]
let num = 10

// let i
for (i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
        console.log("yes");
        break;
    }
}
if (i === arr.length) {
    console.log("no");
}
  