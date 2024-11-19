// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function plus(a, b){
    return a + b;
}
console.log(plus(10, 15));
// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function greet(name){
    console.log(`안녕하세요, ${name}님!`)
}
greet("주용찬");
// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function bigNumber(a, b, c){
    let maxNum = Math.max(a, b, c);
    console.log(a + ", " + b + ", " + c + " 중에서 가장 큰 수는 " + maxNum + "입니다.");
}
bigNumber(10, 12, 9);
// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function sniffling(a){
    if(a % 2 === 0){
        console.log(`${a}는 짝수입니다.`)
    } else {
        console.log(`${a}는 홀수입니다.`)
    }
}
sniffling(5);
// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
let array = [15, "만두", 7, 8, 10];
array.forEach(function (a){
    console.log("배열 : " + a);
})

// function print(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// print([15, "만두", 7, 8, 10]);
// ^ 튜터님 답안