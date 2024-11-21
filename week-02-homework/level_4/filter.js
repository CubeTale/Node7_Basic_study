const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
]

// myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.
function myFilter(arr, callback) {
    // myFilter 구현
    return arr.filter(callback);
}

const result1 = objArray.filter(function (obj) {
    return obj.price <= 200;
});

const result2 = myFilter(objArray, function (obj) {
    return obj.price <= 200;
});
console.log(result1);
console.log(result2);
console.log(Object.entries(result1).toString() === Object.entries(result2).toString()); // true
// 비교하는 방법은 구글링을 하였습니다.