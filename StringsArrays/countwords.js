function processData(input) {
    //Enter your code here
    var str=input.toString()
    count=0
    for(i=0;i<str.length;i++)
        {
            if(str[i]== ' ')
                {
                    count++
                }
        }
    console.log(count+1)
} 