//exersice 2 of module 2 (leapyearloop)

var leapTarget = 2050;
var leapYearInterval = 4;

for (var i = 0; i < leapTarget; i= i+leapYearInterval) {
  console.log(i + "leapyear");
}

//exersice 3 of module 2 (poker cards)  PARA QUE LO VEA ALEX


var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
var suit = ["h", "c", "s", "d"]
var deck= []
var redmultiplesof3 = []
for (var i = 1; i < numbers.length; i++) {
  for (var j = 0; j < suit.length; j++) {
   deck[i] = {numbers:numbers[i], suit:suit[j]}
  }
}
for (var i = 0; i < deck.length; i++) {
  if (deck.suit=== "h" || deck.suit === "d") {
  if (deck.numbers %3 === 0) {
    redmultiplesof3[redmultiplesof3.length] = deck [i]
  }
 }
}
console.log(redmultiplesof3);

// Hecho por Alex

var suits = "dhcs";
var cardPerSuit = 12;

for (var i = 0; i < suits.length; i++) {
  for (var j = 1; j <= cardPerSuit; j++) {
    var suit = suits[i];
    var number = j;
    var red = suit === "d" || suit === "h";
    var multipleOfThree = number % 3 === 0;

    if (red && multipleOfThree) {
      console.log(number + suit);
    }
  }
}
