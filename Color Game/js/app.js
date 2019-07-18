let numSquares  = 6,
    colors      = generateRandomColors(numSquares),
    pickedColor = pickColor();
const squares       = document.querySelectorAll('.square'),
    colorDisplay    = document.querySelector("#rgb"),
    messageDisplay  = document.querySelector("#message"),
    h1              = document.querySelector('#holder'),
    reset           = document.querySelector("#reset"),
    easy            = document.querySelector("#easy"),
    hard            = document.querySelector("#hard")

init()

//event listeners

easy.addEventListener('click', function (){
    hard.classList.remove('selected')
    easy.classList.add('selected')
    numSquares = 3;
    resetting()
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = 'none'
        }
    }
})

hard.addEventListener('click', function (){
    hard.classList.add('selected')
    easy.classList.remove('selected')
    resetting()
    for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block'
        }
})

reset.addEventListener('click', function(e){
    resetting()
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
})

