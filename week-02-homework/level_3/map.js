const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
]

// map을 이용하여 price값만 모아둔 배열 만들기
const maped = objArray.map(function (item) {
    return item.price;
})
console.log(maped);