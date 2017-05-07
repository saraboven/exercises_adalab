var text = "table" ;
var middle = Math.floor(text.length / 2);

function centralCharacter(text) {
  var answer = 0
  if ((text.length) % 2 === 1) {
   answer = text[middle];
  }
  else {
    answer = "I only work with odd length strings " ;
  }
  return answer ;
}
centralCharacter(text) ;

// Sin variable answer y con dos return en if y else

var text = "table" ;
var middle = Math.floor(text.length / 2);

function centralCharacter(text) {
  if ((text.length) % 2 === 1) {
   return  text[middle];
  }
  else {
    return "I only work with odd length strings " ;
  }
}
centralCharacter(text) ;
