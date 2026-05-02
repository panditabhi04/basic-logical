let arr = [1, -2, 0, 3]
let sum=0
let max=arr[0]

for(i=0;i<arr.length;i++){
    sum+=arr[i]
//  sum =sum + arr[i]
    if(sum>max){
        max=sum
    }

    if(sum<0){
        sum=0
    }
    
}

console.log(max);
