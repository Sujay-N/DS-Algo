function twoStrings(s1, s2) {
    // console.log(s1,s2)
    var flag = 0
    var s= s1+s2
    var obj={}
    for(var i=0 ; i < s.length ; i++)
    {
     obj[s[i]]=s[i]  
    }
    var count = Object.keys(obj).length
    
    var obj1={}
    for(var i=0 ; i < s1.length ; i++)
    {
     obj1[s1[i]]=s1[i]  
    }
    var count1 = Object.keys(obj1).length
    
    var obj2={}
    for(var i=0 ; i < s2.length ; i++)
    {
     obj2[s2[i]]=s2[i]  
    }
    var count2 = Object.keys(obj2).length
    
    
    
    if((count1+count2)>count)
    return "YES"
    else
    return "NO"
    
    }
