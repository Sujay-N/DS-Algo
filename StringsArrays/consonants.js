// You are provided a string S. Your task is to write a programme that counts the number of consonants (non-vowels characters) present in the string.

// Input Format

// First line contains a string S

// Constraints

// Length of String is always lesser than 1000

// Output Format

// Output one number which is the count of number of consonants present in the string.

// Sample Input 0

// masaischool

// Sample Output 0

// 6




function processData(input) {
    //Enter your code here
    var str= input.toLowerCase()
    var count=0
    for(i=0;i<str.length;i++)
        {
            if ((str[i]!='a')&&(str[i]!='o')&&(str[i]!='i')&&(str[i]!='e')&&(str[i]!='u'))
                {
                    count+=1
                }
        }
    console.log(count)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

