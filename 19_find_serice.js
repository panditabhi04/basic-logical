function generateSequence(n) {
    let result = [];
    let index = 0;
    for (let i = 1; i <= n; i++) {
      // result.push(i);      // Odd index positions
      // result.push(i * 2);  // Even index positions
      result[index] = i;
      index++;
      result[index] = i * 2; 
      index++;
    }
    return result;
  }
  
  console.log(generateSequence(10));