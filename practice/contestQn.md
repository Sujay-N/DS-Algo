In this challenge, a string and a list of intervals are given. The string consists of English letters only and it can contain both lowercase and uppercase letters.

For two different letters, we say that the first letter is greater than the second letter when the first letter comes later in the alphabet than the second letter ignoring the case of the letters. For example, the letter 'Z' and 't' are greater than the letters 'b' and 'G', while the letters 'B' andd 'b' are equal as case is not considered.

The task is the following. For each given interval, you need to find the count of the greatest letter occurring in the string in that interval, ignoring the case of the letters, so occurrences of, for example,  and  are occurrences of the same letter.

Consider, for example, for the string "AbaBacD". In the interval, [0, 4], the greatest letter is 'b' with count 2.

Input Format

The first line contains integer N, denoting the length of the input string.

The second line contains string S.

The third line contains an integer Q, denoting the number of intervals. Each line of the Q subsequent lines contains two space-separated integers Xi and Yi, denoting the beginning and the end of ith interval.



Output Format

For each interval, print the count of the greatest letter occurring in the string in that interval.

Sample Input 0

5
ddaaa
1
0 4
Sample Output 0

2
Explanation 0

The string is "ddaaa" and there is only one interval, i.e. the interval  denoting the whole string. The greatest character occuring in that interval is  and its count is , therefore,  is the answer.

Sample Input 1

8
aAabBcba
5
2 6
1 2
2 2
0 4
0 7
Sample Output 1

1
2
1
2
1
Explanation 1

The input string is "aAabBcba" and there are 5 intervals to check:

[2,6] -> aA[abBcb]a -> 'c' is the greatest and occurs  time
[1,2] -> a[Aa]bBcba -> 'a' is the greatest and occurs  times
[2,2]-> aA[a]bBcba -> 'a' is the greatest and occurs  time
[0,4]-> [aAabB]cba -> 'b' is the greatest and occurs  times
[0,7]-> [aAabBcba] -> 'c' is the greatest and occurs  time