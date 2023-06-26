const board = document.querySelector('.board')
const celle = []

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
    
    celle.forEach(cell => {
        cell.addEventListener('click', clickCell)
    });
}
function re_start(){
    celle.forEach(cell => {
        cell.textContent = '';
        cell.style.color = 'black';
      });
      player1 = 'X';
      gameOver = false;
}
function clickCell(){
    if(endGame)
        return
    if(this.textContent !== '')
        return
    this.textContent = player1
    this.style.color = player1 === 'X' ? 'red' : 'blue'
    
    if(win(player1)){
        this.textContent = player1
        setTimeout(()=>{
            endGame = true
            let a = ""
            a = player1 === 'O' ? 'X' : 'O'

            var myModal = new bootstrap.Modal(document.getElementById("myModal"));
            document.getElementById('winner').textContent = a + " vince la partita"
            myModal.show(); 
            re_start()
            return
        }, 500)
        
    }

    if(pareggio()){
        endGame = true
        var myModal = new bootstrap.Modal(document.getElementById("myModal"));
            document.getElementById('winner').textContent = "Pareggio"
            myModal.show();
        re_start()
        return
    }
    player1 = player1 === 'X' ? 'O' : 'X'


}
function win(p){
    var combinazioni = 
    [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    for (let i = 0; i < combinazioni.length; i++) {
        const combination = combinazioni[i];
        let hasWon = true;
    
        for (let j = 0; j < combination.length; j++) {
          const index = combination[j];
          if (celle[index].textContent !== p) {
            hasWon = false;
            break;
          }
        }   
        if (hasWon) return true;
      }
    return false
}
 function pareggio(){
    for (let i = 0; i < celle.length; i++) {
        if (celle[i].textContent === '') {
          return false;
        }
      }
      return true;
 }