// without inbulit method

const findLagestNumber=(num1,num2,num3)=>{
    if(num1>=num2 && num1>=num3){
        return num1
    } else if(num2>=num1 && num2>=num3){
        return num2
    } else if(num3>=num1 && num3>=num2){
        return num3
    }
}

const lagrstNumber=findLagestNumber(10,12,13)
console.log("Lagest Nuber is : ",lagrstNumber );

// ======================================================================

// using inbulit method Math.max()

// const findLagestNumber=(n1,n2,n3)=>{
//     return Math.max(n1,n2,n3)
// }
// const lagrstNumber=findLagestNumber(10,12,13)
// console.log("lagrstNumber",lagrstNumber);

// ======================================================================

// using sperd operter

// const findLagestNumber=(n1,n2,n3)=>{
//     return Math.max(...[n1,n2,n3])
// }
// const lagrstNumber=findLagestNumber(10,12,13)
// console.log("lagrstNumber using Spertopert",lagrstNumber);
