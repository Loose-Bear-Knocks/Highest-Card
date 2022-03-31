// have i been pwned API Key : 806e863c28594ad88e5200fd9cfa4cf7
let player1 = document.getElementById('player-1')
let player2 = document.getElementById('player-2')
const faceCards = {"JACK": 11, "QUEEN": 12, "KING": 13, "ACE": 14}
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
    // let cardValue1 = res.cards[0].value
    // let cardValue2 = res.cards[1].value

    
    
    
    // if(cardValue1 === "JACK"){
    //     return cardValue1 = 11
    // } else if(cardValue1 === "QUEEN"){
    //     return cardValue1 = 12
    // } else if(cardValue1 === "KING"){
    //     return cardValue1 = 13
    // } else if(cardValue1 === "ACE"){
    //     return cardValue1 = 14
    // } else {cardValue1 = parseInt(res.cards[0].value)} 
    
    
    
    // if(cardValue2 === "JACK"){
    //     return cardValue2 = 11
    // } else if(cardValue2 === "QUEEN"){
    //     return cardValue2 = 12
    // } else if(cardValue2 === "KING"){
    //     return cardValue2 = 13
    // } else if(cardValue2 === "ACE"){
    //     return cardValue2 = 14
    // } else{cardValue2 = parseInt(res.cards[1].value)}
    
    
    console.log(cardValue1)
    console.log(cardValue1 + cardValue2)
}
console.log()
request()







