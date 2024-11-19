// 필요한 모듈을 불러옵니다.
import readlineSync from 'readline-sync';
import { execSync } from 'child_process';

execSync("chcp 65001");
// 프로그램 시작
function main() {
  // 사용자로부터 입력을 받습니다.
    const choice = readlineSync.question(`==========================\n아래기능 중 선택하세요.\n==========================\n1. 사칙연산 계산기\n2. 구구단 출력기(2단 ~ 9단)\n숫자를 입력하세요. : `);
  // 입력에 따라 해당 기능을 실행합니다.
    switch (choice){
        case '1' :
            console.clear();
            calculator();
            break;
        case '2' :
            console.clear();
            printMultiplicationTable();
            break;
        default :
        console.clear();
        console.log(`==========================\n1, 2 중에 선택하세요!`);
        main();
    }

}

// 사칙연산 계산기 함수
function calculator() {
    // 여기에 코드를 작성하세요.
    const cal = readlineSync.question(`=================================\n사용할 사칙연산을 선택해주세요.\n=================================
1. 더하기\n2. 빼기\n3. 곱하기\n4. 나누기(나머지 포함)\n숫자를 입력하세요. : `)
    let a;
    let b;
    let result;
    switch (cal) {
        case '1' :
            console.clear();
            console.log("더하기");
            a = readlineSync.questionFloat("첫번째 숫자 : ");
            console.clear();
            console.log("더하기");
            b = readlineSync.questionFloat("두번째 숫자 : ");
            console.clear();
            result = a + b;
            console.log(`결과\n${a} + ${b} = ${result} 입니다.`);
            break;
        case '2' :
            console.clear();
            console.log("빼기");
            a = readlineSync.questionFloat("첫번째 숫자 : ");
            console.clear();
            console.log("빼기");
            b = readlineSync.questionFloat("두번째 숫자 : ");
            console.clear();
            result = a - b;
            console.log(`결과\n${a} - ${b} = ${result} 입니다.`);
            break;
        case '3' :
            console.clear();
            console.log("곱하기");
            a = readlineSync.questionFloat("첫번째 숫자 : ");
            console.clear();
            console.log("곱하기");
            b = readlineSync.questionFloat("두번째 숫자 : ");
            console.clear();
            result = a * b;
            console.log(`결과\n${a} x ${b} = ${result} 입니다.`);
            break;
        case '4' :
            console.clear();
            console.log("나누기");
            a = readlineSync.questionFloat("첫번째 숫자 : ");
            console.clear();
            console.log("나누기");
            b = readlineSync.questionFloat("두번째 숫자 : ");
            console.clear();
            result = a / b;
            let remain = a % b;
            console.log(`결과\n${a} / ${b} = ${result}이고 나머지는 ${remain} 입니다.`);
            break;
        default :
        console.clear();
        console.log(`=================================\n1, 2, 3, 4 중에 선택하세요!`);
        calculator();
    }
}

// 구구단 출력 함수
function printMultiplicationTable() {
    // 여기에 코드를 작성하세요.
    for (let i = 2; i <= 9; i++) {
        console.log(`\n${i}단`)
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}

// 프로그램 실행
main();
