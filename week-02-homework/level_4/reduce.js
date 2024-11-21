const arr = [1, 2, 3, 4, 5];

// reduce를 이용하여 arr의 모든 값에 곱하기 2를 한 값의 총합을 구하기.
const maped = arr.map(function (value) {
    return value * 2;
})
const reduced = maped.reduce(function (prev, current) {
    return prev + current;
}, 0);
console.log (reduced)