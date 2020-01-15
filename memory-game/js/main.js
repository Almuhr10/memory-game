
// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";


let cards = ["queen","queen","king","king"];
let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);


function flipCard (cardId) {
    if( cardsInPlay[0] === cardsInPlay[1] ){
        alert("You found a match!");
    } else {
        alert("Sorry Try Again");
    }
}