# Snake_Game
Its a simple snake game using HTML, CSS, JAVASCRIPT. Here i have gained a knowledge to make the Webpage interactive. Javascript is intresting topic, using these we can play it. Concept is same as in other language, just we have to use wisely in a right place.

Here i have used 10*10 grid for movement of snake and apple image as a food to snake. When the snake eats apple its speed increase with length and when it hit the boundaries its going to end. Snake movement is assigned to keys using keycode value, so that we can control the snake using keys.

Snake control using arrows:
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
    }document.addEventListener('keyup', control);
    startButton.addEventListener('click', startGame);
}

This piece of code will help to assign the apples at the random place:
function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        } while(squares[appleIndex].classList.contains('snake'))
squares[appleIndex].classList.add('apple')
}

If snakes eats the apple its length of tail will be increased along with the speed:
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
}![Screenshot (454)](https://user-images.githubusercontent.com/74085170/122077251-34300a80-ce19-11eb-940f-101bc9c3fba4.png)

