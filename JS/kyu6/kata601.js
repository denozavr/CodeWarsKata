/*601 Multiples of 3 and 5 (https://www.codewars.com/kata/multiples-of-3-and-5/train/csharp)
Description: 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
    Note: If the number is a multiple of both 3 and 5, only count it once.
*/

//My solution
    function solution(number){
      var sum = 0;
      
      for(var i = 3; i < number; i++) {
          if(i % 3 == 0 || i % 5 == 0) sum += i;
      }
      return sum;
    }

//Solution(s) I like(links):
//1) CLEVER(192 votes) http://bit.ly/2zTTMIk 
    //First find the biggest mutiple, then use the sum formula of arithmetic progression.
    function solution(number){
      var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
      return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
    } 