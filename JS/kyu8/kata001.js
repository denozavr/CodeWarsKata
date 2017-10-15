
/*000 Return to Sanity (https://www.codewars.com/kata/return-to-sanity)
Description: This function returns something strange. What's wrong?  
    function mystery() {
    var results =
        {sanity: 'Hello'};
    return 
        results;
    }
*/

//My solution
    // return & results should be on the 1 line
    function mystery() {
        var results = {sanity: 'Hello'};
        return results;
    }
    
//Solution(s) I like(links):
//1) http://bit.ly/2yGgKWL
    var mystery = () => ({sanity: 'Hello'});



/*001
Description: There is an object/class already created called MrFreeze. 
Mark this object as frozen so that no other changes can be made to it.
*/

//My solution
    // mark the MrFreeze object instance as frozen
    Object.freeze(MrFreeze);

//Solution(s) I like(links): http://bit.ly/2fvP5ji 


/*002 Get Planet Name By ID
Description:

The function is not returning the correct values. Can you figure out why?
    getPlanetName(3); // should return 'Earth'
*/
//My Solution
 //Same as C# 


 //Solution(s) I like(links): 
 function getPlanetName(i){ //http://bit.ly/2ybOFX0
    return (['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'])[i-1];
  } 

//1) http://bit.ly/2fUmrFA
//2) http://bit.ly/2hA2vM7 


/*003 Square(n) Sum  https://www.codewars.com/kata/square-n-sum/train/javascript
Description:
Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

For example:
    squareSum([1, 2, 2]); // should return 9
 */

 //My solution
    function squareSum(numbers){
        var result = numbers.reduce((result, val) => result += val * val, 0);
        return result;
    }


//Solutions I like:
//1) http://bit.ly/2xGQXsC
    function squareSum(numbers){
        return numbers.reduce(function(sum, n){
        return (n*n) + sum;
        }, 0)
    }
//2) http://bit.ly/2wYpnrv 
    function squareSum(numbers){
        return numbers.map(square).reduce(sum);
    }
    
    function square(number) {
        return number * number;
    }    
    function sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
//3) http://bit.ly/2xI89D9
    function squareSum(numbers){
        var sum = 0;
        numbers.forEach(function(n) {
            sum += n * n
        });
        return sum;
    }