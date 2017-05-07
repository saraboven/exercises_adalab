//Exercise 1

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var suit = ["d", "c", "s","h"];
var deck = []
for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < suit.length; j++) {
    deck[deck.length] = {suit:suit[j],numbers:numbers[i]}
 // console.log(deck [i]);
 }
}
//
// //otra forma del 1, Alex

var suit = "d", "c", "s","h"];
var cardPerSuit = 12;
var deck = []

for (var i = 0; i < suit.length; i++) {
  for (var j = 1; j <= cardPerSuit; j++) {
   var card = {
     value: j,
     suit: suits[i]
   };
   deck[deck.length] = card;
  }
}

console.log(deck);

//Exercise 2

var blackCard = [];
var redCard= [];

for (var i = 0; i < deck.length; i= i+1) {
  var card = deck[i];
  if (card.suit === "c" || card.suit === "s") {
    blackCard[blackCard.length] = card;
  } else {
    redCard[redCard.length] = card;
  }
}
console.log(blackCard);

console.log(redCard);

// //Exercise 3
//
var redEvenCards = []
for (var i = 0; i < deck.length; i= i+1) {
  if (deck[i].suit === "d"|| deck[i].suit === "h") {
    if(deck[i].numbers %2 ===0){
      redEvenCards[redEvenCards.length] = deck[i]
    }
  }
}
console.log(redEvenCards);
