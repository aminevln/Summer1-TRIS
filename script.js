const board = document.querySelector('.board')

let player1 = 'X'

let endGame = false

function start(){
    let i=0
    for(; i<9; ++i){
        const cella = document.createElement('div')
        cella.classList.add('cell')
        celle.push(cella)
        board.appendChild(cella)
    }
}