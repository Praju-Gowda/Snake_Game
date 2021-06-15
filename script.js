document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const scoreDisplay = document.querySelector('span');
    const startButton = document.querySelector('.start');

    const width = 20;
    let currentIndex = 0; 
    let appleIndex = 0; 
    let currentSnake = [2,1,0] 
    let direction = 1;
    let score = 0;
    let speed = 0.6;
    let intervalTime = 0;
    let interval = 0;

    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 300
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }
 function moveOutcomes() {
     if (
            (currentSnake[0] + width >= (width * width) && direction === width) || //hits bottom wall
            (currentSnake[0] % width === width - 1 && direction === 1) || //hits right wall
            (currentSnake[0] % width === 0 && direction === -1) || //hits left wall
            (currentSnake[0] - width < 0 && direction === -width) || //hits top wall
            squares[currentSnake[0] + direction].classList.contains('snake') //hits itself
        ) {
            return clearInterval(interval) 
        }
const tail = currentSnake.pop() 
squares[tail].classList.remove('snake') 
currentSnake.unshift(currentSnake[0] + direction)



        if (squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
            randomApple()
            score++
            scoreDisplay.textContent = score
            clearInterval(interval)
            intervalTime = intervalTime * speed
            interval = setInterval(moveOutcomes, intervalTime)
        }

        squares[currentSnake[0]].classList.add('snake')
    }
    

function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        } while(squares[appleIndex].classList.contains('snake'))

        squares[appleIndex].classList.add('apple')
        
    }

    
function control(e) {
        squares[currentIndex].classList.remove('snake') 

        if (e.keyCode === 39) {
            direction = 1; //go right
        } else if (e.keyCode === 38) {
            direction = -width //go up
        } else if (e.keyCode === 37) {
            direction = -1 //go left
        } else if (e.keyCode === 40) {
            direction = +width //go down
        }
    }

    document.addEventListener('keyup', control);
    startButton.addEventListener('click', startGame);
}
)