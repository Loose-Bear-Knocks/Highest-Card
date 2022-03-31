// have i been pwned API Key : 806e863c28594ad88e5200fd9cfa4cf7
let player1 = document.getElementById('player-1')
let player2 = document.getElementById('player-2')
const faceCards = {"JACK": 11, "QUEEN": 12, "KING": 13, "ACE": 14}
let playAgainButton = document.getElementById('play-again')
let x = 0
let y = 0

let player1WinCounter = document.getElementById('player-1-score')
let player2WinCounter = document.getElementById('player-2-score')
let init = document.getElementById('button')
const playAgain = async () => {
    let replay = document.createElement('button')
    replay.innerText = 'PLAY AGIAN?'
    replay.addEventListener('click', () => {
        document.removeChild(makeCard1)
        document.removeChild(makecard2)
        request()
    })
    playAgainButton.appendChild(replay)



    
}
const request = async () => {
    let req = await fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=2')
    let res = await req.json()
    let makeCard1 = document.createElement('img')
    let makeCard2 = document.createElement('img')
    makeCard1.setAttribute('src', res.cards[0].image)
    makeCard2.setAttribute('src', res.cards[1].image)
    player1.appendChild(makeCard1)
    player2.appendChild(makeCard2)
    let cardValue1 = parseInt(res.cards[0].value) ? parseInt(res.cards[0].value) : faceCards[(res.cards[0].value)]
    let cardValue2 = parseInt(res.cards[1].value) ? parseInt(res.cards[1].value) : faceCards[(res.cards[1].value)]
    console.log(res)
    if(cardValue1 > cardValue2) {
        ++x, alert('Player 1 Wins!')
    } else if(cardValue1 === cardValue2){
        alert("It's a tie!")
    } else {++y, alert('Player 2 wins!')}
    let player1ScoreCard = document.createElement('div')
    let player2ScoreCard  = document.createElement('div')
    player1ScoreCard.innerText = `Player 1: ${x}`
    player2ScoreCard.innerText = `Player 2: ${y}`
    player1WinCounter.appendChild(player1ScoreCard)
    player2WinCounter.appendChild(player2ScoreCard)
    playAgain()
}



init.addEventListener('click', request)







