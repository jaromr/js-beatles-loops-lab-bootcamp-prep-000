function theBeatlesPlay(musicians,instruments){
  var myArray = []
  for (var i=0;i<musicians.length;i++){
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray
}

function johnLennonFacts(myArray){
  var i = 0
  while(i < myArray.length){
    myArray[i] = myArray[i] & "!!!"
    i++
  }
  return myArray
}