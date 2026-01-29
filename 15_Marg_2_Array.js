let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let len = arr1.length;
for (i = 0; i < arr2.length; i++) {
  arr1[len++] = arr2[i];
}
console.log(arr1);

const arr3 = [...arr1, ...arr2]
console.log(arr3);

const users1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const users2 = [
  { id: 3, name: "John" },
  { id: 4, name: "Sam" }
];

let len1 = users1.length; // start index after last element of users1

for (let i = 0; i < users2.length; i++) {
  users1[len1++] = users2[i];  // ✅ copy correctly from users2
}

console.log("users3", users1);
console.log("=================");

const users3=[...users1,...users1]
console.log("userrs3",users3);





