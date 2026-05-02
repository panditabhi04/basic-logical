// const arr = [12, 11, 40, 12, 5, 6, 5, 12, 11, 23, 555, 55, 555, 55555, 55555, 123394, 89555];
const arr=[1,2,3,3,4,5]
// const arr = [12, 11, 40, 12, 5, 6, 5];

// let arr1 = []
// let index = 0

// for (i = 0; i <= arr.length; i++) {
//     for (j = i + 1; j <= arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             if (!arr1.includes(arr[i])) {
//                 arr1[index] = arr[i]
//                 index++
//             }
//             break;
//         }

//     }
// }  
// console.log(arr1);

// optimal sloutionsnode
// remove dublicat value form array


let i = 0;

for (let j = 1; j < arr.length; j++) {
  if (arr[i] !== arr[j]) {
    i++;
    arr[i] = arr[j];
  }
}

// manually print unique elements
let result = [];

for (let k = 0; k <= i; k++) {
  result.push(arr[k]);
}

console.log("New length:", i + 1);
console.log("Modified array:", result);

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "John" },
//   { id: 1, name: "Alice Again" },
//   { id: 2, name: "Bob Again" },
//   { id: 4, name: "Sam" }
// ];

// let arr2 = [];

// for (let i = 0; i < users.length; i++) {
//   for (let j = i + 1; j < users.length; j++) {
//     if (users[i].id === users[j].id) {   // ✅ compare by "id"
//       if (!arr2.some(u => u.id === users[i].id)) { // ✅ proper callback param
//         arr2.push(users[i]);
//       }
//       break;
//     }
//   }
// }

// console.log(arr2); 


