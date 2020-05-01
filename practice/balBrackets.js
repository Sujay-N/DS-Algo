function bracketMatch(text) {
  // your code goes here
  console.log(text)
  var errCount=0
  var balCount=0
  for(var i = 0 ; i < text.length ; i++)
    {
      if(text[i] == "(" )
        {
          balCount++
        }
      else if(text[i] == ")")
        {
          if(balCount ==0)
          errCount++
          else
            balCount--
        }
    }

    return balCount+errCount
  
}


console.log(bracketMatch(")))((("))