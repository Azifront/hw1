// const gmailInput = document.querySelector('#gmail_input')
// const gmailButton = document.querySelector('#gmail_button')
// const gmailSpan = document.querySelector('#gmail_result')
//
// const regExp = /^[a-z\d._%+-]+@gmail\.com$/i
// gmailButton.onclick = () => {
//     if (regExp.test(gmailInput.value)) {
//         gmailSpan.innerHTML = 'Every thing is OKAY'
//         gmailSpan.style.color = 'green'
//     } else {
//         gmailSpan.innerHTML = 'NOT OKAY'
//         gmailSpan.style.color = 'red'
//     }
// }
// const parentBlock = document.querySelector('.parent_block')
// const childBlock = document.querySelector('.ball')
// const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
// const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight
// let positionX = 0
// let positionY = 0
// const moveBlock = () => {
//     if (positionX < maxParentWidth) {
//         positionX+= 5
//         childBlock.style.left = `${positionX}px`
//         requestAnimationFrame(moveBlock)
//     } else if (positionX >= maxParentWidth || positionY < maxParentHeight) {
//         positionY+= 5
//         childBlock.style.top = `${positionY}px`
//         requestAnimationFrame(moveBlock)
//     }
// }

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.ball')
let direction = 1
let positionX = 0
let positionY = 0
const moveBlock = () => {
    const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
    const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight

    if (direction === 1) {
        if (positionX < maxParentWidth) {
            childBlock.style.left = `${positionX}px`
            positionX++
        } else {
            direction = 2
            positionX = maxParentWidth
        }
    } else if (direction === 2) {
        if (positionY < maxParentHeight) {
            childBlock.style.top = `${positionY}px`
            positionY++
        } else {
            direction = 3
            positionY = maxParentHeight
        }
    } else if (direction === 3) {
        if (positionX > 0) {
            childBlock.style.left = `${positionX}px`
            positionX--
        } else {
            direction = 4
            positionX = 0
        }
    } else if (direction === 4) {
        if (positionY > 0) {
            childBlock.style.top = `${positionY}px`
            positionY--
        } else {
            direction = 1
            positionY = 0
        }
    }
    setTimeout(moveBlock)
}
moveBlock()

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const secondsDisplay = document.getElementById('seconds');

let intervalId;
let seconds = 0;

function startTimer() {
    intervalId = setInterval(() => {
        seconds++;
        secondsDisplay.textContent = seconds;
    }, 1000);
    startBtn.disabled = true;
}

function stopTimer() {
    clearInterval(intervalId);
    startBtn.disabled = false;
}

function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    secondsDisplay.textContent = seconds;
    startBtn.disabled = false;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);


