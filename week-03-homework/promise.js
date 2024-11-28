const findTreasure = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    setTimeout(() => {
        if(randomNum < 0.1) {
            resolve('축하합니다! 황금 보물을 발견했습니다!');
        } else {
            reject('보물을 찾는 데 실패했습니다. 다시 시도하세요.');
        }
    }, 3000);
});

findTreasure
    .then((message) => {
        console.log(message);
    })
    .catch((message) => {
        console.log(message);
    })
    