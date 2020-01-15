
// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";


let cards = ["queen","queen","king","king"];
let cardsInPlay = [];
cardsInPlay.push(cards[0]);
console.log("User flipped " + cardsInPlay[0]);
cardsInPlay.push(cards[2]);
console.log("User flipped " + cardsInPlay[1]);
let cardTwo = cards[2];

if( cardsInPlay[0] === cardsInPlay[1] ){
    alert("You found a match!");
} else {
    alert("Sorry Try Again");
}