// [데이터 타입 연습 문제]

// 문제 1: 자신의 이름과 나이를 변수에 저장하고 출력하세요.
let name = "주용찬";
let age = 23;
console.log(`제 이름은 ${name}이고 나이는 ${age}살입니다.`)

// 문제 2: 불리언 값을 저장하는 변수를 만들고 출력하세요.
let isBoolean = true;
console.log(isBoolean);

// 문제 3: null과 undefined의 차이를 콘솔로 확인하세요.
// 힌트:
let undefinedVar;
let nullVar = null;
console.log(typeof undefinedVar);
console.log(typeof nullVar);

// 두 변수를 console.log로 출력하고, typeof 연산자를 사용하여 타입을 확인해보세요.

// 문제 4: 좋아하는 음식 3가지를 배열에 저장하고 첫 번째 음식을 출력하세요.
let likeFood = ["만두", "스파게티", "떡볶이"];
console.log(likeFood[0]);

// 문제 5: 사람의 정보를 객체로 만들어 이름과 나이를 저장하고 출력하세요.
let people = {
    name: "주용찬",
    age: 23,
}
console.log("이름 : " + people.name + ", 나이 : " + people.age);``