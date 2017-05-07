
  var number = 3;
  var numberList = [3,6,8,9,5,3,1,4,7,3,3]

  function countNumber(number, numberList) {
    var total = 0;
    for (var i = 0; i < numberList.length; i++){
      if (numberList[i] === number) {
        total = total + 1 ;
      }
    }
      return ("The amount of " + number + " in the list is " + total) ;

      // console.log( "The amount of " + number + " is " + total);
    }

    countNumber(number, numberList)
