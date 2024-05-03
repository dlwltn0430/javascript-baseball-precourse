const inputEl = document.getElementById('user-input')
const submitBtn = document.getElementById('submit')
const resultEl = document.getElementById('result')
const restartSection = document.getElementById('restart-section')
const restartBtn = document.getElementById('restart');

let answer = generateNumber()

submitBtn.addEventListener('click', getUserInput)
restartBtn.addEventListener('click', restartGame);

function generateNumber() {
    let answer = ''
    while (answer.length < 3) {
        const randomNumber = Math.floor(Math.random() * 9) + 1
        if (!answer.includes(randomNumber)) {
            answer += randomNumber
        }
    }
    return answer
}

function getUserInput() {
    let inputValue = inputEl.value
    checkStrikeAndBall(inputValue)
}

function checkStrikeAndBall(inputValue) {
    let userNumber = inputValue
    let computerNumber = answer
    let strike = 0
    let ball = 0

    for (let i = 0; i < 3; i++) {
        if (userNumber[i] === computerNumber[i]) {
            strike += 1
        }
        else if (computerNumber.indexOf(userNumber[i]) !== -1) {
            ball += 1
        }
    }

    printResult(strike, ball)
    console.log(userNumber)
    console.log(computerNumber)
    console.log("ball", ball)
    console.log("strike", strike)
}

function printResult(strike, ball) {
    if (strike  === 3) {
        resultEl.innerText = "🎉정답을 맞추셨습니다🎉"
        restartSection.style.display = "block"
        //answer = generateNumber()
    }
    else if (strike === 0 && ball !== 0) {
        resultEl.innerText = `${ball}볼`
    }
    else if (strike !== 0 && ball === 0) {
        resultEl.innerText = `${strike}스트라이크`
    }
    else if (strike === 0 && ball === 0) {
        resultEl.innerText = "낫싱"
    }
    else {
        resultEl.innerText = `${ball}볼 ${strike}스트라이크`
    }
}

function restartGame() {
    answer = generateNumber(); 
    restartSection.style.display = "none"; 
    resultEl.innerText = ""; 
    inputEl.value = "";
}

