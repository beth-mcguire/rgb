function init(){
    colorDisplay.textContent = pickedColor;

    // Square clicking logic
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    //add click listeners to squares
        squares[i].addEventListener('click', function (e){
        //grab color and compare to right answer
            const clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                changeColors(clickedColor)
                messageDisplay.textContent = "Correct!"
                h1.style.backgroundColor = pickedColor
                reset.textContent = 'Play Again?'
            }else{
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = 'Try Again'
            }
        })
    }
}

function changeColors(color) {
    //loop through squares
    for(let i = 0; i < squares.length; i++){
        //Change bgs to match correct color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
   const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num){
    //make array
    const arr = []
    //add num random colors to array
    for(let i = 0; i < num; i++){
        //get rndm color and push to array
        arr.push(randomColor())
    }
    //return array
    return arr;
}

function randomColor(){
    // pick a red
    const r = Math.floor(Math.random() * 256)
    //pick a green
    const g =Math.floor(Math.random() * 256)
    //pick a blue
    const b = Math.floor(Math.random() * 256)
   return "rgb(" + r + ", " + g + ", " + b + ")"
}

function resetting() {
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor
    h1.style.backgroundColor = 'cornflowerblue';
    reset.textContent = 'New Game'
    messageDisplay.textContent = ""
}
