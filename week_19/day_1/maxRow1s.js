function maxRow1(input)
{

    var data = input.split("\n")

    var rowSize = Number(data[0])
    var row =[]
    var res=[]
    var verbose=1
    for(var i=1 ; i <=rowSize ; i++)
    {
        var flag=0
         row = data[i].split(" ")
         for(var j = 0 ; j <= row.length ;j++)
         {
             if(verbose)
             console.log(row[j])
             if(row[j] == 1)
                {
                    res.push(j)
                    flag=1
                    break
                }              
         }
         if(!flag)
        //  res.push(i)
        //  else
         res.push("no")
    }
    if(verbose)
    console.log(res)

    var min = rowSize-1
    for(var l = 0 ; l < res.length ; l++)
    {
       
        if(res[l]<min)
        min=res[l]
    }
    if(verbose)
    console.log(min)

    for(var p=0;p<res.length;p++)
    {
        if(min==res[p])
            {
                console.log(p+1)
            }
    }

} 
maxRow1(`4
0 0 0 0
0 0 1 1
1 1 1 1
0 0 0 1`)

maxRow1(`5
0 0 0 0 0
0 1 1 1 1
0 0 1 1 1 
0 0 0 0 1
1 1 1 1 1`)