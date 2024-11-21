// myIncludes를 구현하여 arr.myIncludes와 동일한 값이 나오도록 하기.
const arr = [1, 2, 3, 4, 5];
function myIncludes(arr, value) {
  // myIncludes 구현
    return arr.includes(value);
}

const includes1 = arr.includes(3); // true
const includes2 = myIncludes(arr, 3); // true
console.log(includes1 === includes2); // true