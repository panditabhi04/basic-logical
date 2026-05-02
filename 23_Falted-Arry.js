// let arr = [1, 2, [2, 3], 3, 4, 5, [[5, 6, 7]]];
let arr = [1, 2, [3, 4], 5,[1,11],[7,7,8],[9,0], [[6, 7], 8], [[[9,10]]]];
// let arr = [
//     {
//         id: 1,
//         name: "Team A",
//         players: [
//             { id: 101, name: "Player 1", score: 50 },
//             { id: 102, name: "Player 2", score: 75 }
//         ]
//     },
//     {
//         id: 2,
//         name: "Team B",
//         players: [
//             { id: 201, name: "Player 3", score: 40 },
//             { id: 202, name: "Player 4", score: 60 }
//         ]
//     }
// ];

// console.log(arr[1].players[0].name); // Output: Player 3


let arr1 = [];
let index = 0;

const flatternArray = (itam) => {
    for (let i = 0; i < itam.length; i++) {
// console.log("typeof itam[i] : >>>>> ",constructor(itam[i]))

        if (itam[i] && itam[i].constructor === Array) {
        // if (typeof itam[i]  === "array") {

            flatternArray(itam[i]); // recurse
        } else {
            arr1[index] = itam[i];
            index++;
        }
    }
};

flatternArray(arr);
console.log("Array : ", arr1);


