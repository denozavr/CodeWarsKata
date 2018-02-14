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
