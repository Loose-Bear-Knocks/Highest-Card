// have i been pwned API Key : 806e863c28594ad88e5200fd9cfa4cf7
let player1 = document.getElementById('player-1')
let player2 = document.getElementById('player-2')
const faceCards = {"JACK": 11, "QUEEN": 12, "KING": 13, "ACE": 14}
let playAgainButton = document.getElementById('play-again')
let x = 0
let y = 0
let makeCard1, makeCard2
let cardValue1, cardValue2 
let winner = document.getElementById("winner")
let likeCount = document.getElementById('like-count')
let likes = 0


let player1WinCounter = document.getElementById('player-1-score')
let player2WinCounter = document.getElementById('player-2-score')
let init = document.getElementById('button')
let player1ScoreCard = document.createElement('div')
let player2ScoreCard  = document.createElement('div')
player1ScoreCard.innerText = `Player 1: ${x}`
player2ScoreCard.innerText = `Player 2: ${y}`
player1WinCounter.appendChild(player1ScoreCard)
player2WinCounter.appendChild(player2ScoreCard)
const playAgain = async () => {
    let replay = document.createElement('button')
    replay.innerText = 'PLAY AGAIN?'
    replay.classList.add("button")
    replay.addEventListener('click', () => {
        player1.removeChild(makeCard1)
        player2.removeChild(makeCard2)
        playAgainButton.removeChild(replay)
        request()
    })
    playAgainButton.appendChild(replay)



    
}




const request = async () => {
    let req = await fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=2')
    let res = await req.json()
    makeCard1 = document.createElement('img')
    makeCard2 = document.createElement('img')
    makeCard1.setAttribute('src', res.cards[0].image)
    makeCard2.setAttribute('src', res.cards[1].image)
    player1.appendChild(makeCard1)
    player2.appendChild(makeCard2)
    let cardValue1 = parseInt(res.cards[0].value) ? parseInt(res.cards[0].value) : faceCards[(res.cards[0].value)]
    let cardValue2 = parseInt(res.cards[1].value) ? parseInt(res.cards[1].value) : faceCards[(res.cards[1].value)]
    console.log(res)
    if(cardValue1 > cardValue2) {
            ++x, winner.innerText = 'Player 1 wins!'
            player1ScoreCard.innerText = `Player 1: ${x}`
        } else if(cardValue1 === cardValue2){
                winner.innerText = "It's a tie!"
            } else {++y, winner.innerText = 'Player 2 wins!'
                player2ScoreCard.innerText = `Player 2: ${y}`
            }   
            playAgain()
        }
        
        
        
        init.addEventListener('click', request)
        
        // const conclusion = () => {
        //     if(cardValue1 > cardValue2) {
        //         ++x, setTimeout(alert('Player 1 Wins!'), 5000)
        //         player1ScoreCard.innerText = `Player 1: ${x}`
        //     } else if(cardValue1 === cardValue2){
        //         setTimeout(alert("It's a tie!"), 5000)
        //     } else {++y, setTimeout(alert('Player 2 wins!'), 5000)
        //         player2ScoreCard.innerText = `Player 2: ${y}`
        //     }   
        // }
        
const like = () => {
    let likebtn = document.getElementById('like-button')
    likebtn.addEventListener('click', () => {
       likes++
       likeCount.innerHTML = likes 


    })
    

}

like()




