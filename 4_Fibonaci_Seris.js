var i;
var fibo = [0, 1];

for (i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
  console.log("fibonaci seris", fibo[i]);
}
