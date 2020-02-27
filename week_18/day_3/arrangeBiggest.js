function arrBig(array)
{
    var res=[]
    array.sort()
    for(var i = array.length-1 ; i >=0 ; i--)
    {
        res.push(array[i])
    }
   console.log(res.join(""))
}
arrBig([1, 34, 3, 98, 9, 76, 45, 4])

arrBig([54, 546, 548, 60])