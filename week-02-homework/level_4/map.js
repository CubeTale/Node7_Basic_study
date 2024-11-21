const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
]

// myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
function myMap(arr, callback) {
    // myMap 구현
    return arr.map(callback);
}

const result1 = objArray.map(function (obj) {
    return obj.price;
});

const result2 = myMap(objArray, function (obj) {
    return obj.price;
});
console.log(result1);
console.log(result2);
console.log(Object.entries(result1).toString() === Object.entries(result2).toString()); // true
// 비교하는 방법은 구글링을 하였습니다.