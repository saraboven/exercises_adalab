
var numbers = [2,8,7,5,6,9,4,1,2,5,4];
var pairs =[];

function findPairs(numbers){
  for (var i = 0; i < numbers.length; i++){
    if (numbers[i] %2 === 0){
    pairs[pairs.length] = numbers[i];
    }
  }
  return pairs;
}

findPairs(numbers);
