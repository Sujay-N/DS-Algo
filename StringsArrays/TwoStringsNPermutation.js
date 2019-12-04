
//     Problem
//     Submissions
//     Leaderboard
//     Discussions

// You are given two strings S1 and S2 of equal number of characters. Your task is to comment if any permutation of one string can form other or not.

// If it is possible, print "Yes" (without quotes)

// If it is not possible, print "No" (without quotes)

// Input Format

// Input contains 2 lines

// First line contains string S1

// Second line contains string S2

// Constraints

// Length of both string < 1000

// Output Format

// Output Yes/No based on condition met

// Sample Input 0

// amit
// mtia

// Sample Output 0

// Yes


function processData(input) {
    //Enter your code here
    arr=input.split("\n")
    str1=arr[0]
    str2=arr[1]
    // console.log(arr,str1,str2)
    var count=0
    var n=0
    var t=0
    // for(i=0;i<str1.length;i++)
//         {
//             for(j=0;j<str2.length;j++)
//                 {
//                     if(str1[i] == str2[j])
//                         {
//                             count++
//                         }
//                     else
//                         {
//                             n++
//                         }
//                 }
//         }

//     if((count == str1.length ) && (str1.length == str2.length))
//         console.log("Yes")
//     else
//         console.log("No")
    obj1={}
    obj2={}
     for(i=0;i<str1.length;i++)
         {
          obj1[str1[i]] = str1[i]
             obj2[str2[i]]=str2[i]
         }
        // console.log(obj1,obj2)
    for(key in obj1)
        {
            if (obj2[key])
                {
                    count++
                }
        }
    var x= Object.keys(obj1) 
    // console.log(x)
    if(count == x.length)  
        console.log("Yes")
    else
        console.log("No")
}

