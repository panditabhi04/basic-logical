const areAngram=(s1,s2)=>{
    if(s1.length != s2.length){
        console.log("Leath is not matched");
        
        return false
    }

    let obj1={}
    for(let char of s1){
        if(!obj1){
            obj1[char]=0
        }
        obj1[char]=obj1+1;
    }
console.log("Obj1 : ",obj1);

    let obj2={}
    for(let char of s2){
        if(!obj2){
            obj2[char]=0
        }
        obj2[char]=obj2+1
    }
console.log("Obj2 : ",obj2);

    for(let key in obj1){
        if(obj1[key]!==obj2[key]){
            return false
        }
    }

    return true
}

console.log("String is : ",areAngram("night", "thing"));


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


