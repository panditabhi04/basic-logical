// ASD
// let arr=[4,2,5,3,1]
// let temp

// for(i=0;i<arr.length;i++){
//     for(j=i;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log("Sorting Array",arr);

// DESC 
let arr=[4,2,5,3,1]
let temp

for(i=0;i<arr.length;i++){
    for(j=i;j<arr.length;j++){
        if(arr[i]<arr[j]){
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log("Sorting Array",arr);

// Object

const users = [
    { id: 3, name: "John" },
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

let n = users.length;
for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (users[i].id > users[j].id) {
            let temp = users[i];
            users[i] = users[j];
            users[j] = temp;
        }
    }
}

console.log("users", users)

// print only names
for (let k = 0; k < users.length; k++) {
    console.log(users[k].name);
}



