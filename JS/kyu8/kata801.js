
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

/*004 Short Long Short   https://www.codewars.com/kata/short-long-short
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).

For example:
    ShortLongShort.Solution("1", "22"); // returns "1221"
    ShortLongShort.Solution("22", "1"); // returns "1221"
 */

 //My solution (just delete () for len,len2 )
    function solution(a, b){
        var len = a.length;
        var len2 = b.length;
    
        if(len<len2) {return a+b+a;}
        else {return b+a+b; }
    }
   

//Solutions I like:
//1) BEST PRACTICE(41 vote) + THE MOST CLEVER () http://bit.ly/2h2DrtY 
    function solution(a, b) {
        return a.length < b.length ? a + b + a : b + a + b
      }
//2a) http://bit.ly/2l9h0Yv
    const solution = (a, b) =>  a < b ? a + b + a : b + a + b; 
//2b) http://bit.ly/2z2h0Q4   
    const solution = ([a, b]) => (Math.min(a, b)+Math.max(a, b)+Math.min(a, b)).toString();
//3) http://bit.ly/2h2soAR 
    function solution(a, b) {
        return a + b + a;
    }
//4) http://bit.ly/2i1VfVw
    function solution(a, b){
        return a.length == Math.max(a.length, b.length) ? b + a + b : a + b + a;
    }
//5) ???  http://bit.ly/2i2l4Vy 
    function solution(a, b) {
        return true;
    }
//6)   http://bit.ly/2y3aQKN  
    function solution(a, b){
        var short = a.length <= b.length ? a : b;
        var long = b.length >=a.length  ? b :a;
        return short  + long + short;
    }


/*005 Shifty Closures(BUG)   https://www.codewars.com/kata/shifty-closures/javascript
Description:
Functional closures can get overly attached. Set them straight!
Why doesn't greet_abe() actually greet Abe?
 */
//Intial code
    var name = 'Abe';
    var greet_abe = function() {
        return "Hello, " + name + '!';
    };
    name = 'Ben';
    var greet_ben = function() {
        return "Hello, " + name + '!';
    };

  //My solution 
    var name;
    var greet_abe = function() {
        name="Abe"
        return "Hello, " + name + '!';
    };
    var greet_ben = function() {
        name = 'Ben';
        return "Hello, " + name + '!';
    };


//Solutions I like:
//1) http://bit.ly/2yRQzfc
    var greet_abe = greet('Abe');
    var greet_ben = greet('Ben');

    function greet(name) {
        return function() {
            return "Hello, " + name + '!';
        };
    }
//2) http://bit.ly/2gDusi6 
    const greet_abe = () => 'Hello, Abe!';
    const greet_ben = () => 'Hello, Ben!'; 
//3) http://bit.ly/2yNdclv
    const greet = (name) => `Hello, ${name}!`
    const greet_abe = () => greet('Abe')
    const greet_ben = () => greet('Ben')   


/*006 Basic Training: Add item to an Array   https://www.codewars.com/kata/basic-training-add-item-to-an-array
Description:
Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]
The websites array has already been defined for you using the following code:

    var websites = [];
 */

//My solution   
    // add the value "codewars" to the already defined websites array
    websites.push("codewars");  


//Solutions I like:
//1) BEST(42 votes) http://bit.ly/2hbtJWe 
    // add the value "codewars" to the already defined websites array
    websites.push('codewars')
//2) http://bit.ly/2lhkM23
    // add the value "codewars" to the already defined websites array
    var codewars = ['c','o','d','e','w','a','r','s'];
    websites.push(codewars.reduce(function(x,y){ return x+y;}, ''));   
//3) + 4)
    websites[0] = "codewars";
    websites.unshift("codewars")


/*007 Semi-Optional   https://www.codewars.com/kata/semi-optional 
Description:
We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new Javascript Object setting the 'value' key on the new Object to the passed-in value.
So, for example, if we execute the following code:
    var wrappedObj = wrap("MyWrappedString"); 
    // wrappedObject should be  {"value":"MyWrappedString"}
We would then expect the following statement to be true:
    wrappedObj.value === "MyWrappedString"
Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.
 */

//My solution   
    // move open { for return 1 line higher
    function wrap(value) {
        return {
          value:value 
        };
      }
    
//Solutions I like:    
//1) Clever(5 votes) http://bit.ly/2gK6oKE
    const wrap = value => ({value});
//2) http://bit.ly/2iGlTaH 
    function wrap(value) {
        var newObj = {};
        newObj["value"] = value; 
        return newObj; 
    }