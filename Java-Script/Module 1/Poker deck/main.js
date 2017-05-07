var totalcards = 52;
var nonnumbercard= 3;
var totalnumbercards= totalcards - (nonnumbercard * 4);
var blackcards = 2;
var result = totalnumbercards/blackcards/2;
console.log(result);

//otra forma de hacerlo

var totalcards= 55;
var jokers = 3;
var suit = 2;
var blacksuits = 2;
var figurescard = 3;
var pairfactor = 2;

var cadspersuit = (totalcards - jokers) / suit;
var nonnumbercard = cadspersuit - figurescard;
var evencards = nonnumbercard / pairfactor;

var result = evencards * blacksuits;

console.log(result);
