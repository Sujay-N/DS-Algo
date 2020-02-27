function reArrange(array)
{
    var verbose=1
    array.sort((a,b)=>(a-b))
    if(verbose)
    console.log(array)
   var res=[]
   var obj={}
    for(var i =0 ; i < array.length ; i++)
    {
      obj[array[i]]=array[i]
    }
    var j=0
   var lenO = Object.keys(obj).length
      
        //     for(key in obj)
        //     {
        //     if(obj[key]== i)
        //     {
        //         res.push(i)
        //         j++
        //     }
        //     else{
        //         res.push(-1)
        //         j++
        //     }
        // }
      
    
    // console.log(res)

    if(array.length != lenO)
    {
        
    }
}
reArrange([19, 7, 0, 3, 18, 15, 12, 6, 1, 8,11, 10, 9, 5, 13, 16, 2, 14, 17, 4])
reArrange([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1])