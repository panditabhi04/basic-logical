// // // const arr = [12, 11, 40, 12, 5, 6, 5, 12, 11,23,555,55,555,55555,55555,123394,89555];

// // //     let arr1 = [];
// // //     let index=0

// // //     for (let i = 0; i < arr.length ; i++) {
// // //         for (let j = i + 1; j < arr.length; j++) {
// // //             if (arr[i] === arr[j]) {

// // //                 // Check if the duplicate element is already in res
// // //                 if (!arr1.includes(arr[i])) {

// // //                     // Add the element to res if not already present
// // //                     // res.push(arr[i]);
// // //                     arr1[index]=arr[i]
// // //                     index++
// // //                 }

// // //                 // Move to the next element in arr
// // //                 break;
// // //             }
// // //         }
// // //     }

// // //     // return arr1;
// // // console.log(arr1);

// // // var arr1=[1,2,3,4]
// // // var arr2=[5,6,7,8]
// // // var arr3=[]
// // // for(i=0;i<arr1.length;i++){
// // //     arr3[arr3.length]=arr1[i]
// // // }
// // // for(i=0;i<arr2.length;i++){
// // //     arr3[arr2.length]=arr2[i]
// // // }
// // // console.log(arr3);

// // // function mergeAndSortArrays(array1, array2) {
// // //     // Step 1: Combine arrays manually
// // //     let combinedArray = [];
// // //     for (let i = 0; i < array1.length; i++) {
// // //         combinedArray[combinedArray.length] = array1[i];
// // //     }
// // //     for (let i = 0; i < array2.length; i++) {
// // //         combinedArray[combinedArray.length] = array2[i];
// // //     }
// // // // console.log("meger array",combinedArray);
// // // }

// // // const asd=mergeAndSortArrays([1,2,3],[4,5,6])
// // // console.log(asd);
// // // console.log("meger array",combinedArray)

// // // Online Javascript Editor for free
// // // Write, Edit and Run your Javascript code using JS Online Compiler

// // console.log("Try programiz.pro");
// // // // Online Javascript Editor for free
// // // // Write, Edit and Run your Javascript code using JS Online Compiler

// // // console.log("Try programiz.pro");
// // // const str ='new12313'

// // function sumStr(str){
// //     let sum=0
// //     let num=0
// //     let isNum=false

// //     for(let i=0;i<str.length;i++){
// //         let char=str[i]
// //         if(char >='0' && char<='9'){
// //             num=num*10+(char-'0')
// //             isNum=true

// //         }else{
// //             if(isNum){
// //                 sum=num+num;
// //                 num=0;
// //                 isNum=false
// //             }
// //         }
// //     }
// //     if(isNum){
// //     sum+=num;
// // }
// // return sum;
// // }
// // console.log(sumStr('new12313'))

// // // function sumDigits(str) {
// // //     let sum = 0;

// // //     for (let i = 0; i < str.length; i++) {
// // //         let char = str[i];
// // //         if (char >= '0' && char <= '9') {
// // //             sum += Number(char); // Convert character to number and add to sum
// // //         }
// // //     }

// // //     return sum;
// // // }

// // // console.log(sumDigits('new12313')); // Output: 11

// // function sumDigits(str) {
// //     let sum = 0;

// //     for (let i = 0; i < str.length; i++) {
// //         let char = str[i];

// //         // Check if the character is a digit
// //         if (char >= '0' && char <= '9') {
// //             // sum += char - '0'; // Convert char to number and add to sum
// //             sum=parseInt(str[i])

// //         }
// //     }

// //     return sum;
// // }

// // console.log("xyz",sumDigits('new12313')); // Output: 10 (1+2+3+1+3)

// // function fun() {
// // 	let count = 0;
// // 	let res = [];
// // 	str = inputString.value;
// // 	word = inputWord.value;
// // 	if (str === "" || word === "") {
// // 		window.alert("Incorrect input!");
// // 		return;
// // 	}

// // 	let n = str.length;
// // 	let wordLen = word.length;
// // 	srtWord = word.split("").sort().join("");

// // 	for (let i = 0; i < n - wordLen + 1; ++i) {
// // 		let sub = str
// // 			.slice(i, i + wordLen)
// // 			.split("")
// // 			.sort()
// // 			.join("");
// // 		if (sub === srtWord) {
// // 			count += 1;
// // 			res.push("'" + str.slice(i, i + wordLen) + "'");
// // 		}
// // 	}
// // 	let explainres;
// // 	if (count === 0) explainres = "none";
// // 	else explainres = res.join(",");

// // 	nums.innerText =
// // 		"Input string contains " + count + " Anagrams";
// // 	explain.innerText =
// // 		"Anagrams of the word '" +
// // 		word +
// // 		"' are: " +
// // 		explainres;
// // }
// // const ans=fun()
// // console.log(ans);

// function generateSequence(n) {
//   let result = [];
//   let index = 0;
//   for (let i = 1; i <= n; i++) {
//     // result.push(i);      // Odd index positions
//     // result.push(i * 2);  // Even index positions
//     result[index] = i;
//     index++;
//     result[index] = i * 2;
//     index++;
//   }
//   return result;
// }

// console.log(generateSequence(10)); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10, ..., 10, 20]

// const convertUpperCase = async (arr) => {
//   try {
//     for (i = 0; i < arr.length; i++) {
//       return await arr.toUpperCase();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const ans =await convertUpperCase(["a","s","d"])
// console.log(ans);

// let arr = [1, 2, 3, 4, 5];
// let temp;

// for (i = 0; i < arr.length; i++) {
//   for (j = i; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// console.log(arr[1]);
//     let s = "Hello World";
//     let vowels = "aeiouAEIOU";
//     let count = 0;

//     for (i=0;i<s.length;i++) {
//         if (vowels.includes(i)) {
//             count++;
//         }
//     }

// console.log(count);


// let arr = [2, 3, 6, 4, 3, 5];
// let l = arr[0]
// let sL = -1

// for (i = 0; i < arr.length; i++) {
//     if (l < arr[i]) {
//         l = sL
//         sL = arr[i]
//     } else if (sL > l && l < sL) {
//         sL = arr[i]
//     }
// }
// console.log(sL);

// const arr = [12, 11, 40, 12, 5, 6, 5];
// let i = 0

// for (j = 1; j < arr.length; j++) {
//     if (arr[j] !== arr[i]) {
//         i++
//         arr[i] = arr[j]
//     }
// }
// // console.log("New length:", i + 1);

// console.log("Array is : ", arr.slice(0, i + 1));
// console.log(arr);


// let str = "javascript hh juhuh";
// // let str = "hi All";

// let arr = []
// let str1 = ""

// for (i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//         arr[arr.length] = str1
//         str1 = ""
//     } else {
//         str1 += str[i]
//     }
//     if (i === str.length - 1) {
//         arr[arr.length] = str1
//     }
// }


// console.log(arr);

// let str = "javascript hh juhuh";
// let arr = [];
// let str1 = "";

// for (let i = 0; i <= str.length; i++) {
//     if (str[i] === " ") {
//         //Remove space part
//         arr[arr.length] = str1;  // push str1
//         str1 = "";
//     } else {
//         // Add String Part
//         str1 += str[i];
//     }

//     // 👇 handle last str1 when loop reaches end
//     if (i === str.length - 1) {
//         arr[arr.length] = str1;
//     }
// }

// console.log(arr);


// let arr = [1, 2, 3, 5, 6, 12]
// let ele = arr[1]

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] === ele) {
//         arr[i] = i * 2
//         ele++
//     }
// }
// console.log(arr);

// let arr = [1, -2, 3, -4, -5, 6]
// let newArr = []
// let posInd = 0;
// let negInd = 0;
// let flag = true; //true means insert positive no 
// while (newArr.length < arr.length) {
//     if (flag) {
//         if (arr[posInd] > 0) {
//             newArr.push(arr[posInd])
//             flag = !flag;
//         }
//         posInd++
//     } else {
//         if (arr[negInd] <= 0) {
//             newArr.push(arr[negInd])
//             flag = !flag;
//         }
//         negInd++
//     }
// }

// console.log(newArr);

let str1 = 'listen', str2 = 'slient';

let obj = {};

const isAnagram = (str1, str2) => {
    if (str1.length != str2.length) {
        return false;
    }
    for (let firstInd = 0, secondInd = 0; firstInd < str1.length; firstInd++, secondInd++) {
        obj[str1[firstInd]] = (obj[str1[firstInd]] ?? 0) + 1;
        obj[str2[secondInd]] = (obj[str2[secondInd]] ?? 0) - 1;
    }
    let anagram = true;
    console.log(obj)
    for (const key of Object.keys(obj)) {
        if (obj[key] != 0) {
            anagram = false;
        }
    }
    return anagram;
}
console.log(
    isAnagram(str1, str2) ? "anagram" : "not "
)
    ;






