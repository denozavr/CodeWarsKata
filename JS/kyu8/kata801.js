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
