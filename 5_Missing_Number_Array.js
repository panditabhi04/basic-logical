// // var arr=[5]
// // var count=5;

// // var arr1=[]

// // for(i=1;i<=count;i++){
// //     if(arr.indexOf(i)==-1){
// //         // arr1.push(i)
// //         arr1[i]=arr[i]
// //     }
// // }
// // console.log("missing Number",arr1);

// // without using push method

// var arr = [5];
// var count = 5;

// var arr1 = [];
// var index = 0; // To keep track of the current position in arr1

// for (let i = 1; i <= count; i++) {
//     if (arr.indexOf(i) == -1) {
//         arr1[index] = i; // Assign the missing number to the current index
//         index++; // Increment the index
//     }
// }
// console.log("Missing Numbers:", arr1);

// var arr=[5]
// var count=5;

// var arr1=[]

// for(i=1;i<=count;i++){
//     if(arr.indexOf(i)==-1){
//         // arr1.push(i)
//         arr1[i]=arr[i]
//     }
// }
// console.log("missing Number",arr1);

// without using push method

var arr = [3,4,5,6];
var count = arr[0];
let arr1=[]
let x=[]

// var arr1 = [];
var index = 0; // To keep track of the current position in arr1

for (let i = 0; i <= arr.length; i++) {
    if (arr[i]===count) {
        arr1[index] = i; // Assign the missing number to the current index
        index++; 
        count++ // Increment the index
    }else{
        x=arr[count]
    }
}
console.log("Missing Numbers:", arr1);
console.log();


// let arr3=[3,4,5,7,8,9]
// // let arr3=[2,4,6,8,10]

// for (let n = 3; n <= arr3.length+1 ; n++) {
    
//     // Check if the current integer is not found in the input array
//     if (arr3.indexOf(n) === -1) 
//       // If the current integer is not found, return it as the missing number
//       console.log("missing number form : ",n);
      
//   }

