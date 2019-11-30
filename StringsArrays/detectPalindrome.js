// Given an integer, print "Yes" (without quotes) if that integer is a Palindrome, else print "No" (without quotes)

// Input Format

// You are provided with one integer.

// Constraints

// Provided integer is always lesser than 1000000

// Output Format

// Print Yes or No depending upon the integer.

// Sample Input 0

// 1221

// Sample Output 0

// Yes

// Explanation 0

// Reading 1221 from either side is same, so Yes, it is a palindrome.


// SOLUTION
function processData(input) {
str=input.toString()
    //console.log(str)
    count=0
    arr=[]
    arr1=[]
    for(i=0;i<str.length;i++)
    {
        arr.push(str[i])
    }
    for(k=str.length-1;k>=0;k--)
        {
            arr1.push(str[k])
        }
    
    
    for(l=0;l<arr.length;l++)
        {
            if(Number(arr1[l])==Number(arr[l]))
               {
               count++
               }
        }
    if (count>0)
        {
            console.log('Yes')
        }
    else
        {
            console.log('No')
        }
} 



















