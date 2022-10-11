/*
function f(n) {
  if (n === 1) return n;
  let assume = f(n - 1);
  let ans = n * assume;
  return ans;
}
console.log(f(5));
*/

////////////////////////////////////////

/*
function f(n) {
  if (n === 1) return 1;
  let ans = 0;
  for (let k = 1; k <= 6; k++) {
    if (n - k < 0) continue;
    ans += f(n - k);
    // console.log(ans);
  }
  return ans;
}

console.log(f(6));
*/

////////////////////////////////////////

/*
function getDigits(n) {
  const result = {};
  while (n > 0) {
    let digit = n % 10;
    result.push(digit);
    n = Math.floor(n / 10);
}
  return result;
}
function f(n) {
    if (n === 0) return 0;
  if (n < 10) return 1;
  const digits = getDigits(n);
  let ans = Infinty;
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue;
    ans = Math.min(ans, f(n - digits[i]));
  }
  return 1 + ans;
}
*/

////////////////////////////////////////

/*
function maze(m, n) {
  if (m === 1 || n === 1) return 1;

  return maze(m - 1, n) + maze(m, n - 1);
}
var uniquePaths = function (m, n) {
  return maze(m, n);
};

console.log(maze(3, 7));
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = arr.length - 1;
console.log(result);
