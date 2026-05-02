let str1="Abhishek";
let str2="kehsihbA";
let obj1={}
let obj2={}

if(str1.length!=str2.length){
    console.log("length not match");  
}

for(let char of str1){
    if(!obj1[char]){
        obj1[char]=0
    }
    obj1[char]+=1
}
console.log("obj1 : ",obj1);

for(let char of str2){
    if(!obj2[char]){
        obj2[char]=0
    }
    obj2[char]+=1
}
console.log("obj2 : ",obj2);

for(let char in obj1){
    if(obj1[char]!=obj2[char]){
        console.log("not");
        break;
    }else{
        console.log("yes");
        break;
    }
}



// const areAngram=(s1,s2)=>{
//     if(s1.length != s2.length){
//         console.log("Leath is not matched");
        
//         return false
//     }

//     let obj1={}
//     for(let char of s1){
//         if(!obj1){
//             obj1[char]=0
//         }
//         obj1[char]=obj1+1;
//     }
// console.log("Obj1 : ",obj1);

//     let obj2={}
//     for(let char of s2){
//         if(!obj2){
//             obj2[char]=0
//         }
//         obj2[char]=obj2+1
//     }
// console.log("Obj2 : ",obj2);

//     for(let key in obj1){
//         if(obj1[key]!==obj2[key]){
//             return false
//         }
//     }

//     return true
// }

// console.log("String is : ",areAngram("night", "thing"));



// let str1 = "night";
// let str2 = "thing";

// let obj1 = {};
// let obj2 = {};

// if (str1.length !== str2.length) {
//     console.log("length not match");
// } else {
//     // count characters of str1
//     for (let char of str1) {
//         if (!obj1[char]) {
//             obj1[char] = 0;
//         }
//         obj1[char] += 1;
//     }

//     console.log("obj1:", obj1);

//     // count characters of str2
//     for (let char of str2) {
//         if (!obj2[char]) {
//             obj2[char] = 0;
//         }
//         obj2[char] += 1;
//     }

//     console.log("obj2:", obj2);

    // compare both objects
    // let isAnagram = true;

    // for (let key in obj1) {
    //     if (obj1[key] !== obj2[key]) {
    //         isAnagram = false;
    //         break;
    //     }
    // }

    // console.log(isAnagram ? "Anagram" : "Not Anagram");
// }

// function countAnagrams(sentence) {

//     const words = sentence.toLowerCase().split(" ");
//     const wordMap = new Map();
//     let anagramCount = 0;
    
//     words.forEach(word => {
//         if (word === "are") return; // Ignore "are"
        
//         const sortedWord = word.split('').sort().join('');
        
//         if (wordMap.has(sortedWord)) {
//             wordMap.set(sortedWord, wordMap.get(sortedWord) + 1);
//         } else {
//             wordMap.set(sortedWord, 1);
//         }
//     });
    
//     for (const count of wordMap.values()) {
//         if (count > 1) {
//             anagramCount++;
//         }
//     }
    
//     return anagramCount;
// }

// const input = "cars are very cool so are arcs and my os";
// console.log("Count of anagrams in string is:", countAnagrams(input));


