var card = "5C" ;
var cardNumber = card[0];
var cardSuit = card[1];
var previusCard = cardNumber - 1 + cardSuit;
var nextCard = parseInt(cardNumber) + 1 + cardSuit;
var threeCards = previusCard + " "+ card + " "+ nextCard;

console.log(threeCards);
