//#region 8000
/*8000 Return to Sanity (https://www.codewars.com/kata/return-to-sanity)
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
//#endregion

//#region 8001
/*8001
Description: There is an object/class already created called MrFreeze.
Mark this object as frozen so that no other changes can be made to it.
*/

//My solution
    // mark the MrFreeze object instance as frozen
    Object.freeze(MrFreeze);

//Solution(s) I like(links): http://bit.ly/2fvP5ji
//#endregion

//#region 8002
/*8002 Get Planet Name By ID
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
//#endregion

//#region 8003
/*8003 Square(n) Sum  https://www.codewars.com/kata/square-n-sum/train/javascript
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
//#endregion

//#region 8004
/*8004 Short Long Short   https://www.codewars.com/kata/short-long-short
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
//#endregion

//#region 8005
/*8005 Shifty Closures(BUG)   https://www.codewars.com/kata/shifty-closures/javascript
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
//#endregion

//#region 8006
/*8006 Basic Training: Add item to an Array   https://www.codewars.com/kata/basic-training-add-item-to-an-array
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
//#endregion

//#region 8007 Semi-Optional
/*8007 Semi-Optional   https://www.codewars.com/kata/semi-optional
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
//#endregion

 //#region 8008 Function 1 - hello world
/*8008 Function 1 - hello world   https://www.codewars.com/kata/function-1-hello-world
Description:
  Make a simple function called greet that returns the most-famous "hello world!".
Style Points
  Sure, this is about as easy as it gets. But how clever can you be to create the most creative
  hello world you can think of? What is a "hello world" solution you would want to show your friends?
 */

//My solution
    // Write a function "greet" that returns "hello world!"
    const greet = () => "hello world!";

//Solutions I like:
//1) BEST(46 votes)
    function greet() {
      return "hello world!";
    }
//2) http://bit.ly/2AkBr7A
    function greet() {
      return (+(+!+[]+[+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]]+(![]+[])[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+(+(!+[]+!+[]+!+[]+[!+[]+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[!+[]+!+[]+!+[]])+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([][[]]+[])[!+[]+!+[]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+([][[]]+[])[+[]]+([][[]]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]])()([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((!![]+[])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+([][[]]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+!+[]]+(+[![]]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+!+[]]]+(!![]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(+(!+[]+!+[]+[+!+[]]+[+!+[]]))[(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(+![]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(+![]+[![]]+([]+[])[([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]](!+[]+!+[]+!+[]+[+!+[]])[+!+[]]+(!![]+[])[!+[]+!+[]+!+[]])()(([]+[])[([![]]+[][[]])[+!+[]+[+[]]]+(!![]+[])[+[]]+(![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+([][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(![]+[])[!+[]+!+[]+!+[]]]()[+[]])[+[]]+(!+[]+!+[]+[+!+[]])+[])
    }
//3) CLEVER(21) http://bit.ly/2m670Qn
//4) CLEVER(14) http://bit.ly/2zvcJSV
//#endregion

 //#region 8009 Function 2 - squaring an argument
 /*8009 Function 2 - squaring an argument https://www.codewars.com/kata/function-2-squaring-an-argument
    Description:
    Now you have to write a function called square that takes an argument and returns the square of it.
 */

 //My solution
    const square = (x) => x*x;
    //function square(x){ return x*x};

//Solutions I like:
//1) BEST(24 votes) https://www.codewars.com/kata/reviews/523b623152af8a30c600002a/groups/5245dbbe571408dd1b000c0d
    var square = function(a){
      return a*a;
    }
//2)CLEVER(5) https://www.codewars.com/kata/reviews/523b623152af8a30c600002a/groups/5245dbbe571408dd1b000c0d
    function square(num){
      var num = Math.pow(num, 2);
      return num;
    };
//3) https://www.codewars.com/kata/reviews/523b623152af8a30c600002a/groups/56782d7195db0e169d00002a
    const square = x => x ** 2;
//4) Clever(3) https://www.codewars.com/kata/reviews/523b623152af8a30c600002a/groups/54b5cf3d48245d4968000369
    function square(n) {
      if (typeof n === 'number') {
        return n*n;
      } else {
        return 'undefined';
      }
    }
 //#endregion


 //#region 8010 Function 3 - multiplying two numbers
 /*8010 Function 3 - multiplying two numbers https://www.codewars.com/kata/function-3-multiplying-two-numbers
    Description:
    This function has to be called multiply and needs to take two numbers as arguments, and has to return the multiplication of the 2 arguments.
 */

 //My solution
    // Write here your multiply-function
    let multiply = (a,b) => a*b;

 //Solutions I like:
//1) BEST(48 votes) and CLEVER(7 votes) https://www.codewars.com/kata/reviews/523b66342d0c301ae400003e/groups/5258412ee62fb46d9b003795
    function multiply(a, b){
      if(typeof a == 'number' && typeof b == 'number')
        return a * b;
    }
//2) https://www.codewars.com/kata/reviews/523b66342d0c301ae400003e/groups/55cb26207042715f3e000047
    function multiply(a,b){
      if(isNaN(a) || isNaN(b))
        throw new TypeError("One of the arguments is not numeric.");
      return a*b;
    }
//3) https://www.codewars.com/kata/reviews/523b66342d0c301ae400003e/groups/5245ddf54abb2f408700000e
    function multiply(a, b){
      return a*b;
    }
 //#endregion



  //#region 8011 Kata Example Twist
 /*8011 Kata Example Twist (https://www.codewars.com/kata/kata-example-twist/javascript)
    Description:
    This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
    Add the value "codewars" to the array websites/Websites 1,000 times.

        var websites = []
 */

 //My solution
    // add the value "codewars" to the websites array 1,000 times
    var websites = []
    while(websites.length < 1000){
        websites.push('codewars');
    }

 //Solutions I like:
//1) BEST(20 votes) and CLEVER(8 votes) https://www.codewars.com/kata/reviews/525c1a07bb6dda6944000034/groups/5758b68967f40138670001e3
    var websites = new Array(1000).fill("codewars");
//2) CLEVER(50) https://www.codewars.com/kata/reviews/525c1a07bb6dda6944000034/groups/538f495170f2f47d81000a4f
    var websites = (new Array(1000)).map(function(e) {return 'codewars';});
    //???This solution won't work because the .map-method won't be invoked for array entries containing undefined
//3) Clever(9 and 8) https://www.codewars.com/kata/reviews/525c1a07bb6dda6944000034/groups/525ffe459a002276750007d6
    var websites = Array.apply(null, Array(1000)).map(String.prototype.valueOf, 'codewars');
    //https://www.codewars.com/kata/reviews/525c1a07bb6dda6944000034/groups/526e7dd0d90c08d4520002e6
    var websites = Array(1000).join().split(',').map(function(){return 'codewars'});
//4) https://www.codewars.com/kata/reviews/525c1a07bb6dda6944000034/groups/5617640ff6cc3d9fde00003c
    var websites = Array.from({ length: 1000 }, () => 'codewars')
//5) https://www.codewars.com/kata/reviews/525c1a07bb6dda6944000034/groups/53ff3f654a6ac118e0000c07
    var websites = [];  websites.length=1000;
    websites=websites.splice(0,1000,"codewars");

 //#endregion

 //#region 8012 Broken Counter
  /*8012 Broken Counter (https://www.codewars.com/kata/broken-counter/javascript)
    Description:
    Our counter prototype is broken. Can you spot, what's wrong here?
  Original code:
*/

//My solution
    function Counter() {
      this.value = 0;
    }

    Counter.prototype.increase =function() { //add function was just Counter.prototype.increase() {
      this.value++;
    };

    Counter.prototype.getValue=function() { //add function was just Counter.prototype.getValue()
      return this.value;
    };

    Counter.prototype.reset=function() { //add function was just Counter.prototype.reset()
      this.value = 0;
    };
 //Solutions I like:
//1) Best(15) and Clever(29) https://www.codewars.com/kata/reviews/526471539d52735c620000c9/groups/527259a8b111ce0cc40005ba
    function Counter() {
      this.value = 0;
    }

    Counter.prototype = {
      increase : function(){this.value++;},
      getValue : function(){ return this.value;},
      reset : function(){this.value = 0;}
    };
//2) Best(5) https://www.codewars.com/kata/reviews/526471539d52735c620000c9/groups/55f27d4807e290a0e2000015
    class Counter {
      constructor() {
        this.value = 0;
      }

      increase() {
        this.value++;
      };

      getValue() {
        return this.value;
      };

      reset() {
        this.value = 0;
      };
    }
//3) https://www.codewars.com/kata/reviews/526471539d52735c620000c9/groups/55c2424ef957afb74500002b
    function Counter() {
      value = 0;
    }

    Counter.prototype.increase = () => this.value++;
    Counter.prototype.reset = () =>  this.value = 0;
    Counter.prototype.getValue = () => {return this.value;}
 //#endregion


  //#region 8013 Find the Remainder
  /*8013 Find the Remainder (https://www.codewars.com/kata/find-the-remainder/javascript)
    Description:
    Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
*/

//My solution
  function remainder(a, b){
    return a > b ? a%b : b%a;
  }

//Solutions I like:
//1) Best(101) and Clever(99) https://www.codewars.com/kata/reviews/524f5125ad9c12894e000042/groups/526857c682004e774f000173
    //  -- SAME AS MINE
//2) Best(30) https://www.codewars.com/kata/reviews/524f5125ad9c12894e000042/groups/53831e5e40f287739f000373
    function remainder(a, b){
      // Divide the larger argument by the smaller argument and return the remainder
      var min = Math.min(a,b);
      var max = Math.max(a,b);

      return min ? max % min : NaN;
    }
//3) https://www.codewars.com/kata/reviews/524f5125ad9c12894e000042/groups/53a37cbc7a3a0de6c2000509
    function remainder(a, b){
      if(a<b) a=[b,b=a][0];
      return b==0?NaN:a%b;
    }

//#endregion


  //#region 8014 Convert a Number to a String!
  /*8014 Convert a Number to a String! (https://www.codewars.com/kata/convert-a-number-to-a-string)
    Description:
    We need a function that can transform a number into a string.
    What ways of achieving this do you know?
    Examples:
      numberToString(123); // returns '123';`
      numberToString(999); // returns '999';`
*/

//My solution
    function numberToString(num) {
      return num+''; //if add empty string, Number is converted to string
    }

//Solutions I like:
//1) Best(181) https://www.codewars.com/kata/reviews/5265326f5fda8eb1160004cb/groups/526bcb02236867a6ff0001e6
    return num.toString();
//2) CLEVER(100) https://www.codewars.com/kata/reviews/5265326f5fda8eb1160004cb/groups/528bd564e0c499fa2b000352
    numberToString = String;
//3) Best(31) https://www.codewars.com/kata/reviews/5265326f5fda8eb1160004cb/groups/526a9b66041c20c3ca000728
    return String(num);

//#endregion


  //#region 8015 Push a hash/an object into array
  /*8015 Push a hash/an object into array (https://www.codewars.com/kata/push-a-hash-slash-an-object-into-array/train/javascript)
    Description:
    You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!
*/

//My solution
  items = [];
  items.push({a: "b", c: "d"}); //need brackets() and ; especially because PUSH is a method

//Solutions I like:
//1) Best(4) https://www.codewars.com/kata/reviews/527b3cd3492b6b15250060b3/groups/54c1fe9c3f06963dbc00006a
    var items = [{a: "b", c: "d"}];
//#endregion


//#region 8016 Max Headroom and JavaScript style
/** 8016 Max Headroom and JavaScript style (https://www.codewars.com/kata/max-headroom-and-javascript-style)
Description:
  Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?
 */

//My solution
    function getMax1()
    {
      var max =
      {
      name: 'Max Headroom'
      }
      return max;
    }

    function getMax2()
    {
      return  { //!!! 1st object brace({) and return shoud be on THE SAME line (was on different, 1 line down)
      // or just use logic like in getMax1()
        name: 'Max Headroom'
      }
    }


//Solutions I like:
//1) Best(28) https://www.codewars.com/kata/reviews/52a47dd7e950edabfa000394/groups/53ab144b283d2322b1000038
    function getMax1()
    {
      var max = {name: 'Max Headroom'}
      return max;
    }

    function getMax2()
    {
    // Have your return object on same line
    return {name: 'Max Headroom'};
    }
//2) Clever(2) https://www.codewars.com/kata/reviews/52a47dd7e950edabfa000394/groups/564c8457d372267dcb00001d
    const getMax1=_=>{return {name: 'Max Headroom'}}; getMax2=getMax1;
//3) Clever(2) https://www.codewars.com/kata/reviews/52a47dd7e950edabfa000394/groups/597667b8c260d0f250000027
    const getMax1=_=>({name: 'Max Headroom'});
    const getMax2=_=>({name: 'Max Headroom'});
//

//#endregion


//#region 8017 Sleigh Authentication
/** 8017 Sleigh Authentication (https://www.codewars.com/kata/sleigh-authentication/javascript)
Description:
  Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

  Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

    var sleigh = new Sleigh();
    sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
 */

//My solution
    function Sleigh() {}

    Sleigh.prototype.authenticate = (name, password) =>
        name==='Santa Claus' && password === 'Ho Ho Ho!';


//Solutions I like:
//0) Best(50) And Clever(131) Advanced !!(26 comments) https://www.codewars.com/kata/reviews/52adc145b2651f25a8000646/groups/52ade507b2651f5028000748
//1) Best(31) https://www.codewars.com/kata/reviews/52adc145b2651f25a8000646/groups/52b0166f0b1d45155200037b
    function Sleigh() {
      this.name = "Santa Claus";
      this.password = "Ho Ho Ho!";
    }

    Sleigh.prototype.authenticate = function(name, password) {
      return this.name == name && this.password == password;
    };
//2) Best(2) https://www.codewars.com/kata/reviews/52adc145b2651f25a8000646/groups/55fda6cd307b74f2fd0000db
    class Sleigh {
      authenticate(name, password) {
          return name == "Santa Claus" && password == "Ho Ho Ho!";
      }
    }

//#endregion

//#region 8018 Plural
/* 8018 Plural (https://www.codewars.com/kata/plural/javascript)
Description:
  We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
    You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
  All values will be positive integers or floats, or zero.
*/

//My solution
    function plural(n) {
      return n===1 ? false : true;
    }

//Solutions I like:
//1) Best(93) And Clever(49) https://www.codewars.com/kata/reviews/52ceafd3f235ce81aa00073d/groups/52d353d52dbffbaf6f000038
    function plural(n) {
      return n !== 1;
    }
//2) Best(4) https://www.codewars.com/kata/reviews/52ceafd3f235ce81aa00073d/groups/56169ec0ec68f69b11000004
    const plural = n => n !== 1;
//3) CLever(4) !!(6 comments) https://www.codewars.com/kata/reviews/52ceafd3f235ce81aa00073d/groups/52cec21ef235ce456e0007df
    function plural(n) {
      return !!--n;
    }
//#endregion

//#region 8019 Welcome to the City
/* 8019 Welcome to the City (https://www.codewars.com/kata/welcome-to-the-city/javascript)
Description:
  Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space betweeen each, and the length of the name array in test cases will vary.
  Example:

    sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
  This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

//My solution
    function sayHello( name, city, state ) {
      return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
    }

//Solutions I like:
//1) Best(6) https://www.codewars.com/kata/reviews/559375e5091cf8e47d00005a/groups/55a8fc5f5ee7728cdf000010
    var sayHello = (n, c, s) => `Hello, ${n.join(' ')}! Welcome to ${c}, ${s}!`;
//2)Clever(8) https://www.codewars.com/kata/reviews/559375e5091cf8e47d00005a/groups/559479f2ada4e84afd0000f4
    function sayHello( a, b, c) {
      return 'Hello, ' + a.join(' ') + '! Welcome to ' + [b,c].join(', ') + '!';
    }

//#endregion


//#region 8020 Convert boolean values to strings 'Yes' or 'No'.
/* 8020 Convert boolean values to strings 'Yes' or 'No'. (https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no)
Description:
    Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

//My solution
    function boolToWord( bool ){
      return bool ? 'Yes' : 'No';
    }

//Solutions I like:
//1) Best(19) Comment https://www.codewars.com/kata/reviews/54a59ef00c96357db90000e9/groups/55c218f58eac0bb52f00003a
    let boolToWord = bool => bool ? 'Yes' : 'No'; //USE CONST for functions
    const boolToWord = bool => bool ? 'Yes' : 'No';
//2)Clever(75) !!Comment https://www.codewars.com/kata/reviews/54a59ef00c96357db90000e9/groups/54af3d12512faf268b0016bb
    function boolToWord( bool ){
      return ['No','Yes'][+bool];
    }

//#endregion


//#region 8021 A function within a function
/* 8021 A function within a function (https://www.codewars.com/kata/a-function-within-a-function)
Description:
    Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

      var three = always(3);
      three(); // returns 3
*/

//My solution
    // return a function that returns n
    function always (n) {
      return () => n; // return function() {return n;}
    }

//Solutions I like:
//1) Best(126) Comment https://www.codewars.com/kata/reviews/5384415edc18463de10003c5/groups/53848671cd619eff1f000007
    function always(n) {

      return function () { return n };

    }
//2) Best(11) https://www.codewars.com/kata/reviews/5384415edc18463de10003c5/groups/55fdc7476731f6caf00000ad
    let always = n => () => n;
//3) Clever(3) Comment https://www.codewars.com/kata/reviews/5384415edc18463de10003c5/groups/53f79b570b04a0c8eb0001d2
    function always (n) {
      function reallyAlways () {
        return n;
      }
    return reallyAlways;
    }
// 4) Clever(4) https://www.codewars.com/kata/reviews/5384415edc18463de10003c5/groups/570ba20302379938f400156a
    var always=L=>O=>L
//#endregion

//#region 8022 Swap Values
/* 8022 Swap Values (https://www.codewars.com/kata/swap-values)
Description:
  I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

  Can you figure out what's wrong here?
  function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
  }
*/

//My solution
    function swapValues(args) { //!!args should be as argument, otherwise don't pass
      //ES 6(2015) swapping
      [args[0], args[1]] = [args[1], args[0]]
    }

//Solutions I like:
//1) Best(45) https://www.codewars.com/kata/reviews/5388f0f195125ad2bf000b7e/groups/53891be4443aae967d0012c4
    function swapValues(args) {
      var temp = args[0];
      args[0] = args[1];
      args[1] = temp;
    }
//2) Clever(151) !!COmment(7) https://www.codewars.com/kata/reviews/5388f0f195125ad2bf000b7e/groups/5388f479443aae9042001081
    function swapValues() {
      return arguments[0].reverse();
    }
//3) Best(6) https://www.codewars.com/kata/reviews/5388f0f195125ad2bf000b7e/groups/53890cab0b24c5058400119c
    function swapValues() {
      var args = arguments[0];
      var temp = args[0];
      args[0] = args[1];
      args[1] = temp;
    }
//4) Clever(25) Comment(2) https://www.codewars.com/kata/reviews/5388f0f195125ad2bf000b7e/groups/53aa198a5f136177a600069c
    function swapValues(args) {
      args[1] = [args[0], args[0] = args[1]][0];
    }
//5) Clever(7) https://www.codewars.com/kata/reviews/5388f0f195125ad2bf000b7e/groups/538bec531779e3ffab00012e
    function swapValues(a){a.reverse()}
//#endregion


//#region 8023 Number toString
/* 8023 Number toString (https://www.codewars.com/kata/number-tostring)
Description:
  The code gives an error!
      a = 123.toString
  Fix it!
*/

//My solution
    var a = 123 + '';

//Solutions I like:
//1) Best(18) https://www.codewars.com/kata/reviews/53934fefc44762736c00044d/groups/54267db0c2c778451c0003ea
    var a = String(123);
//2) Best(57) and Clever(52) !!Comment https://www.codewars.com/kata/reviews/53934fefc44762736c00044d/groups/53949664a3ba5f8e8c0007c9
    var a = 123..toString();
    var a = 123 .toString()
    var a = (123).toString();
    var a = 123 + '';
//3) Clever(26) https://www.codewars.com/kata/reviews/53934fefc44762736c00044d/groups/53944cc9a3ba5fdbb00003d5
    var a = "123";
//4) Clever(15) https://www.codewars.com/kata/reviews/53934fefc44762736c00044d/groups/53977895c20318e287000ca4
    var a = 123["toString"]();
//#endregion


//#region 8024 Are You Playing Banjo?
/* 8024 Are You Playing Banjo? (https://www.codewars.com/kata/are-you-playing-banjo)
Description:
  Create a function which answers the question "Are you playing banjo?".
  If your name starts with the letter "R" or lower case "r", you are playing banjo!
  The function takes a name as its only argument, and returns one of the following strings:

    name + " plays banjo"
    name + " does not play banjo"
  Names given are always valid strings.
*/

//My solution
    function areYouPlayingBanjo(name) {
      return name[0].toLowerCase() === 'r' ?
          name + ' plays banjo' :
          name + ' does not play banjo';
    }

//Solutions I like:
//1) Best(88) !!Comment https://www.codewars.com/kata/reviews/53af2ba0bbec0e2805000976/groups/53af55ff61023f507e0000ff
    function areYouPlayingBanjo(name) {
      return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
    }
//2) Clever(43) https://www.codewars.com/kata/reviews/53af2ba0bbec0e2805000976/groups/540edfb6a7d43dcd2c000481
    function areYouPlayingBanjo(name) {
      return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
    }
//#endregion

//#region 8025 Grader
/*8025 Grader (https://www.codewars.com/kata/grader)
Description:
  Create a function that takes a number as an argument and returns a grade based on that number.
  Score	Grade
  Anything greater than 1 or less than 0.6	'F'
  0.9 or greater	"A"
  0.8 or greater	"B"
  0.7 or greater	"C"
  0.6 or greater	"D"

  Examples:
    grader(0.9) == 'A'
    grader(0.3) == 'F'
    grader(234) == 'F'
    grader(0.75) == 'C'
*/

//My solution
    function grader(score) {
      let result='F';
      if(score >= 0.6 && score < 0.7) result ='D';
      else if(score >= 0.7 && score < 0.8) result ='C';
      else if(score >= 0.8 && score < 0.9) result ='B';
      else if(score >= 0.9 && score <= 1) result ='A';

      return result;
    }

//Solutions I like:
//1) Best(12) https://www.codewars.com/kata/reviews/59a23df987c603320d000996/groups/59a2d014f70330d3840002f3
    function grader(score) {
      if (score>1||score<0.6) return 'F'
      if (score<0.7) return 'D'
      if (score<0.8) return 'C'
      if (score<0.9) return 'B'
      return 'A'
    }
//2) CLever(4) https://www.codewars.com/kata/reviews/59a23df987c603320d000996/groups/59aed003981e2954820009f7
    grader = s => s > 1 || s < 0.6 ? 'F' : s < 0.7 ? 'D' : s < 0.8 ? 'C' : s < 0.9 ? 'B' : 'A';
//3) CLever(3) https://www.codewars.com/kata/reviews/59a23df987c603320d000996/groups/5a0db13116e65b531300210a
    function grader(score) {
      if (score === 1) return "A";
      return ["D", "C", "B", "A"][Math.floor(score*10) - 6] || "F";
    }
//4) Best(3) https://www.codewars.com/kata/reviews/59a23df987c603320d000996/groups/59a2b165f70330c55f0001d3
    function grader(score) {
      if (score > 1 || score < 0.6) return 'F';
      else if (score >= 0.9) return 'A';
      else if (score >= 0.8) return 'B';
      else if (score >= 0.7) return 'C';
      else if (score >= 0.6) return 'D';
    }
//#endregion

//#region 8026 Even or Odd
/*8026 Even or Odd (https://www.codewars.com/kata/even-or-odd)
Description:
    Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//My solution
    // function even_or_odd(number) {
    //   return !(number % 2) ? 'Even' : 'Odd';
    // }

    //if return 0 then Even, but negate it with ! to get true ('Even')
    const even_or_odd = (number) => !(number % 2) ? 'Even' : 'Odd';

    //const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd';

//Solutions I like:
//1) Best(433) Comment https://www.codewars.com/kata/reviews/5425fedf430ca265ea00033e/groups/54260ed060d7776515001ba0
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}
//2) Clever(47) Comment https://www.codewars.com/kata/reviews/5425fedf430ca265ea00033e/groups/55ccfb7266869a848a00005f
    var even_or_odd = n => n & 1 ? 'Odd' : 'Even'
//3) Clever(20) https://www.codewars.com/kata/reviews/5425fedf430ca265ea00033e/groups/54260e98d5df9a72f7001aa0
    function even_or_odd(number) {
      return ["Even", "Odd"][Math.abs(number) % 2]
    }

//#endregion


//#region 8027 Reverse List Order
/*8027 Reverse List Order (https://www.codewars.com/kata/reverse-list-order)
Description:
  In this kata you will create a function that takes in a list and returns a list with the reverse order.
  Examples
    reverseList([1,2,3,4]) == [4,3,2,1]
    reverseList([3,1,5,4]) == [4,5,1,3]
*/

//My solution
    function reverseList(list) {
      return list.reverse();
    }
  //const reverseList = list => list.reverse();

//Solutions I like:
//1) Best(4) Comment https://www.codewars.com/kata/reviews/5991b276c015783355000014/groups/5991eb5c2e9e59c45400023d
    function reverseList(list) {
      return list.slice().reverse();
    }
//2) Clever(2) https://www.codewars.com/kata/reviews/5991b276c015783355000014/groups/5aad3015631725cc3f000146
    function reverseList(list) {
      return list.reduce((reverseList, element) => [element, ...reverseList], []);
    }
//#endregion


//#region 8028 Sentence Smash
/*8028 Sentence Smash (https://www.codewars.com/kata/sentence-smash)
Description:
  Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

  Example
  var words = ['hello', 'world', 'this', 'is', 'great'];
  smash(words); // returns "hello world this is great"

  Assumptions
  You can assume that you are only given words.
  You cannot assume the size of the array.
  You can assume that you will always get an array.
  What We're Testing
  We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

  Disclaimer
  This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.
*/

//My solution
    // Smash Words
    function smash (words) {
      "use strict";
      return words.join(' ');
    };
//const smash = words => words.join(" ");

//Solutions I like:
//1) Best(146) & Clever(32) !!Comment https://www.codewars.com/kata/reviews/53dc23d121a252d19500007d/groups/53dc48ee2259ed51ef00064b
    smash = function (words) {
      return words.join(" ");
    };
//#endregion

//#region 8029 Sum Array
/*8029 Sum Array (https://www.codewars.com/kata/sum-arrays)
Description:
    Write a method sum (sum_array in python, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

    Examples
      numbers = [1, 5.2, 4, 0, -1]
      puts sum(numbers)
      9.2

    Assumptions
      You can assume that you are only given numbers.
      You cannot assume the size of the array.
      You can assume that you do get an array and if the array is empty, return 0.
      What We're Testing
      We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.

    Disclaimer
      This is for beginners so we want to test basic loops and math operations. Advanced users may find this extremely easy and can easily write this in one line.
*/

//My solution
    // Sum Numbers
    function sum(numbers) {
      "use strict";
      // 0 is initial value to which numbers will be summed
      return numbers.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0
      );

    };
// const sum = (arr) => arr.reduce((prev,next) => prev += next, 0);  // or (sum, number)

//Solutions I like:
//1) Best(31) & Clever(11) !!Comment https://www.codewars.com/kata/reviews/53dc581021a252c4890000bc/groups/55a3d77cd1c9ec04e10000b3
    function sum(numbers) {
      return numbers.reduce((a, b) => a + b, 0);
    }
//2) Best(14) https://www.codewars.com/kata/reviews/53dc581021a252c4890000bc/groups/53e12d13a353ab02bf000745
    // Sum Numbers
    sum = function (numbers) {
      "use strict";
      var total = 0;
      for(var i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total;
    };
 //3) Best(11)  https://www.codewars.com/kata/reviews/53dc581021a252c4890000bc/groups/53dc747b2259ed2c5f00090a
    // Sum Numbers
    sum = function (numbers) {
      "use strict";
      return numbers.reduce(function(prev, cur) { return prev + cur }, 0);
    };
//#endregion


//#region 8030 You Can't Code Under Pressure #1
/*8030 You Can't Code Under Pressure #1 (https://www.codewars.com/kata/you-cant-code-under-pressure-number-1/)
Description:
  Code as fast as you can! You need to double the integer and return it.
*/

//My solution
    function doubleInteger(i) {
      // i will be an integer. Double it and return it.
      return i * 2;
    }
// const doubleInteger = i => i * 2;

//Solutions I like:
//1) Clever(147) !COmment https://www.codewars.com/kata/reviews/53ee542f536dc10f64000110/groups/53ee5521f611ce4b61001207
    function doubleInteger(i) {
      return i << 1;
    }
//2) Clever(6) https://www.codewars.com/kata/reviews/53ee542f536dc10f64000110/groups/53efbe8ef646c3ca730000e0
    function doubleInteger(i) {
      // i will be an integer. Double it and return it.
      return i+i;
    }
// doubleInteger=_=>_+_
//#endregion


//#region 8031 Hello Happy Codevarrior!
/*8031 Hello Happy Codevarrior! (https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed)
Description:
  VVhat ?!?
  None of zese codevarriors seemz to remember hiz ovvn name !
  Kould you help ?

    var albert = new Warrior("Al")
    var boris  = new Warrior("Boris")

    albert.toString() --> "Hi! my name's Boris" <-- ohoh..
*/

//My solution
    function Warrior(n){
      let name = n;  // was global variable (without let/var)
      this.name = function(n){
        if( n ) name=n;
        return name;
      }
    }

    Warrior.prototype.toString = function(){
        return "Hi! my name's "+ this.name();
    }


//Solutions I like:
//1) Best(10) https://www.codewars.com/kata/reviews/53f9eea849215e460d0000b9/groups/53fa54ce64b19dca64000469
    function Warrior(n){
      this.n = n;
    }

    Warrior.prototype.name = function(n){
      if (n) this.n = n;
      return this.n;
    }

    Warrior.prototype.toString = function(){
      return "Hi! my name's " + this.n;
    }

//2) Clever(4) https://www.codewars.com/kata/reviews/53f9eea849215e460d0000b9/groups/5458640f0a80d2dbf1000fde
    function Warrior(name){
      this.name = function(n){
        return (n ? name = n : name);
      }
    }

    Warrior.prototype.toString = function(){
        return "Hi! my name's "+this.name();
    }
//3) Clever(2) https://www.codewars.com/kata/reviews/53f9eea849215e460d0000b9/groups/5952e2a7df1d164744000023
    class Warrior {
      constructor(name) {
        this.nameValue = name
      }
      name(name) {
        if (name) this.nameValue = name
        return this.nameValue
      }
      toString() {
        return `Hi! my name's ${this.name()}`
      }
    }
//#endregion

//#region 8032 Regular Ball Super Ball
/* 8032 Regular Ball Super Ball (https://www.codewars.com/kata/53f0f358b9cb376eca001079
Description:
    Regular Ball Super Ball
    Create a class Ball.

    Ball objects should accept one argument for "ball type" when instantiated.

    If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

    ball1 = new Ball();
    ball2 = new Ball("super");

    ball1.ballType     //=> "regular"
    ball2.ballType     //=> "super"
*/

//My solution
    // use of optional parameters
    const Ball = function(ballType = 'regular') {
      this.ballType = ballType;
    };


//Solutions I like:
//1) Best(160) & Clever(104) Comment https://www.codewars.com/kata/reviews/53f0f96bef9ad427f9000120/groups/53f64a1f5baf5fc74d015630
    var Ball = function(ballType) {
      this.ballType = ballType || 'regular';
    };
//2) Best(29) https://www.codewars.com/kata/reviews/53f0f96bef9ad427f9000120/groups/55c0a702b152f47f840000bd
    class Ball {
      constructor(ballType = "regular") {
        this.ballType = ballType;
      }
    }
//3) Best(19) https://www.codewars.com/kata/reviews/53f0f96bef9ad427f9000120/groups/53f43ef05f9d319ada000996
    var Ball = function(ballType) {
      this.ballType = typeof ballType !== 'undefined' ? ballType : 'regular';
      // this.ballType = ballType ? ballType : "regular";
    };
//#endregion
