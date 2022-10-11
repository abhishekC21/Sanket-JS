let arr = [2, 4, 2, 5, 4, 1, 5];
let ans = 0;

for (let i = 0; i < arr.length; i++) {
  ans = ans ^ arr[i];
  console.log(ans);
}
console.log(ans);
