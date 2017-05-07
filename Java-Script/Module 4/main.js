
function cardValue(card) {
  var value = card.value;

  if (card.value == 1) {
    value = 20;
  }

  console.log(value);

  return value;
}

function handValue(hand) {

  var total = 0;
  for (var i = 0; i < hand.length; i= i+1) {
    total = total + cardValue(hand[i]);
  }

  return total;
}

function printValue(value) {
   console.log("La puntuacion de la mano es " + value);
}

function program() {
  var hand = [
    {suit: "s", value: 10},
    {suit: "c", value: 3},
    {suit: "c", value: 1},
    {suit: "h", value: 7}
  ];

  var value = handValue(hand);
  printValue(value);
}
 program();

 // Ejercicio 2 - Las rojas sumen el doble

 function cardValue(card) {
   var value = card.value;
   var suit = card.suit
   if (card.value == 1) {
     value = 20;
   }
   if (card.suit == "d" || card.suit == "h") {
     value =  card.value*2
   }

   return value;
 }

 // Ejercicio 3 -

function competition(hand1, hand2) {
  var total = 0;
  var total2 = 0;
  total = total + handValue(hand1);
  total2 = total2 + handValue(hand2);


  if (total > total2) {
    console.log(total);
   }
  else {
    console.log(total2);
  }
}

var hand1 = [
  {suit: "d", value: 6},
  {suit: "h", value: 3},
  {suit: "c", value: 12},
  {suit: "h", value: 5}
];

var hand2 = [
  {suit: "h", value: 5},
  {suit: "s", value: 9},
  {suit: "c", value: 1},
  {suit: "s", value: 10}
];

competition (hand1, hand2);
