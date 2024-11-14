// [조건문 연습 문제]

// 문제 1: 숫자를 입력받아 짝수인지 홀수인지 출력하세요.
let num = 3;
if (num % 2 === 0) {
    console.log(num + "은 짝수입니다.");
} else {
    console.log(num + "은 홀수입니다.");
}

// 문제 2: 점수를 입력받아 학점을 출력하세요.
// 90점 이상 A, 80점 이상 B, 70점 이상 C, 그 외 D
const score = 85;
if (score >= 90) {
    console.log("A학점");
} else if (score >= 80) {
    console.log("B학점");
} else if (score >= 70) {
    console.log("C학점");
} else {
    console.log("D학점");
}

// 문제 3: 나이를 입력받아 성인인지 미성년자인지 출력하세요.
let age = 20;
if (age >= 19) {
    console.log("성인입니다.");
} else {
    console.log("미성년자입니다.");
}

// 문제 4: switch문을 사용하여 요일을 출력하세요.
const day = 3;

switch (day) {
    case 1:
        console.log('월요일입니다.');
        break;
    case 2:
        console.log('화요일입니다.');
        break;
    case 3:
        console.log('수요일입니다.');
        break;
    case 4:
        console.log('목요일입니다.');
        break;
    case 5:
        console.log('금요일입니다.');
        break;
    case 6:
        console.log('토요일입니다.');
        break;
    default:
        console.log('일요일입니다.');
}
// 문제 5: 두 숫자를 비교하여 큰 수를 출력하세요.
let a = 5;
let b = 10;

if (a > b) {
    console.log(a + "와 " + b +"중 큰 수는 " + a + "입니다.");
} else if (a < b) {
    console.log(a + "와 " + b +"중 큰 수는 " + b + "입니다.");
}