//#region 7001 getNames()
/*7001 getNames() (https://www.codewars.com/kata/getnames/train/javascript)
Description:
The following code is not giving the expected results. Can you figure out what the issue is?

The following is an example of data that would be passed in to the function.
*/
var data = [{name: 'Joe', age: 20}, {name: 'Bill', age: 30},  {name: 'Kate', age: 23}]
getNames(data) // should return ['Joe', 'Bill', 'Kate']

//My solution
//add return before item.name
function getNames(data) {
  //return data.map(function(item){return item.name});
  return data.map((item) => (item.name));
}

//Solution(s) I like(links):
//1) http://bit.ly/2zeN57D
const getNames = arr => arr.map(i => i.name)
//#endregion

//#region 7002  Two Oldest Ages
/*7002 Two Oldest Ages (https://www.codewars.com/kata/two-oldest-ages-1/train/javascript)
Description:
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and
return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
The order of the numbers passed in could be any order. The following are some examples of what the method should
return (shown in different languages but the logic will be the same between all three).

  twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
  ```nim twoOldestAges(@[1, 5, 87, 45, 8, 8]) # should return [45, 87]
*/

//My solution
// return the two oldest/oldest ages within the array of ages passed in.
  function twoOldestAges(ages) {
    //sort by ascending order and return 2 last elements
    //same as return ages.sort(function(a,b){return a-b;}).slice(-2);
    return ages.sort(((a, b) => a - b)).slice(-2);
    //!!from comments sort[O(n log(n))] is less effective than FOR loop [O(n)]
  }

//Solution(s) I like(links):
//1) O(n) http://bit.ly/2iTA9Nt
    function twoOldestAges(ages) {
      var max = 0;
      var secMax = 0;

      for (i = 0; i < ages.length; i++) {
        if (ages[i] > max) {
          max = ages[i];
        } else if (ages[i] > secMax) {
          secMax = ages[i];
        }
      }
      return [secMax, max];
    }
//2) http://bit.ly/2iTA9Nt
    function twoOldestAges(ages){
      var x = ages.sort(function(i,j) { return j-i;});
      return [x[1],x[0]];
    }
//3)http://bit.ly/2h7trTn
//#endregion

//#region 7003  JavaScript Array Filter
/*7003 JavaScript Array Filter (https://www.codewars.com/kata/javascript-array-filter/javascript)
Description:
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

//My solution
    function getEvenNumbers(numbersArray){
      return numbersArray.filter(num => num%2 === 0);
    }

//Solution(s) I like(links):
//1) Best(28) and Clever(35) https://www.codewars.com/kata/reviews/516f30227c907a79f200026c/groups/53872b454c45408f630011e9
    function getEvenNumbers(numbersArray){
      return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
    }
//2) Best(18) https://www.codewars.com/kata/reviews/516f30227c907a79f200026c/groups/516f30237c907a79f20002b3
    function getEvenNumbers(numbersArray){
      return numbersArray.filter(function(n){
        return n % 2 == 0; //better use ===
      });
    }
//3) https://www.codewars.com/kata/reviews/516f30227c907a79f200026c/groups/53a13d490a0810efc800025a
    function isEven(num){
      return num%2==0
    }

    function getEvenNumbers(numbersArray){
      // filter out the odd numbers
      var filtered = numbersArray.filter(isEven);
      return filtered;
    }

//#endregion


//#region 7004 Refactored Greeting
/*7004 Refactored Greeting (https://www.codewars.com/kata/refactored-greeting)
Description:
The following code could use a bit of object oriented artistry. While its a simple method and works just fine as it is, in a larger system its best to organize methods into classes/objects.
Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.
Here is how the final refactored code would be used:

    var joe = new Person('Joe');
    joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
    joe.name # should == 'Joe'
*/

//My solution
    function Person(name) {
      this.name = name;

      this.greet = function(yourName){
        return "Hello " + yourName + ", my name is " + this.name;
      }
    }

//Solution(s) I like(links):
//1) Best(28) and Clever(3) https://www.codewars.com/kata/reviews/516f30297c907a79f2000662/groups/516f30297c907a79f200066a
    function Person(name){
      this.name = name; //added semicolons
    }

    Person.prototype.greet = function(yourName){
      return "Hello " + yourName + ", my name is " + this.name; //added semicolons
    }
//2) ES6 Classes, Best(4) https://www.codewars.com/kata/reviews/516f30297c907a79f2000662/groups/55c33c790879778eda000021
    class Person {
      constructor(name) {
        this.name = name;
      }
      greet(name) {
        return `Hello ${name}, my name is ${this.name}`;
      }
    }
//#endregion

//#region 7005 Reversed Strings
/*7005 Reversed Strings (https://www.codewars.com/kata/reversed-strings/javascript)
Complete the solution so that it reverses the string value passed into it.

    solution('world'); // returns 'dlrow'
*/

//My solution
    function solution(str){
      //split string to array of chars ['h','i'], reverse and concat(join)
      return str.split('').reverse('').join('');
    }

//Solution(s) I like(links):
//1) Clever(17) https://www.codewars.com/kata/reviews/516f302a7c907a79f200069f/groups/586369fc248954e777000474
    const solution = s => [...s].reverse().join('')
//2) https://www.codewars.com/kata/reviews/516f302a7c907a79f200069f/groups/51ed435512a3da8d950000a6
    function solution(str){ //recursion https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb
      return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
    }
//3)
    const solution = str => str.split('').reverse().join('');

//#endregion


//#region 7006 Sort Numbers
/*7006 Sort Numbers (https://www.codewars.com/kata/sort-numbers)
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
    For example:
    solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
    solution(null); // should return []
*/

//My solution
    function solution(nums){
      return nums ? nums.sort(sortNumber) : []; //if NOT NULL sort
    }

    function sortNumber(a,b) {
        return a - b;
    }

//Solution(s) I like(links):
//1) Best(33) and Clever(17) https://www.codewars.com/kata/reviews/5174a68231d5270475000005/groups/5174a68231d5270475000004
    function solution(nums){ //Clever, but works only if nums arg is null or array. I think (nums instanceof Array) check should be instead of "or". But still nice and easy.
      return (nums || []).sort(function(a, b){
        return a - b
      });
    }
//2) https://www.codewars.com/kata/reviews/5174a68231d5270475000005/groups/5942d04db4513a285800023b
    let solution = (nums) => (nums || []).sort((a,b) => (a-b))
//3) https://www.codewars.com/kata/reviews/5174a68231d5270475000005/groups/5181c1ec05b9dbdee2000002
    function solution(nums){
      return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
    }
//#endregion


//#region 7007 Ninja vs Samurai: Strike
/*7007 Ninja vs Samurai: Strike (https://www.codewars.com/kata/ninja-vs-samurai-strike)
Description:
Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:
    var ninja = new Warrior('Ninja');
    var samurai = new Warrior('Samurai');

    samurai.strike(ninja, 3);
    // ninja.health should == 70
Can you figure out what is wrong?
*/

//My solution
    var Warrior = function(name){
      this.name = name;
      this.health = 100;
    }
    //WAS JUST Warrior.strike which is WRONG
    Warrior.prototype.strike = function(enemy, swings){
      enemy.health = Math.max(0, enemy.health - (swings * 10));
    }

//Solution(s) I like(links):
//1) Best(2) https://www.codewars.com/kata/reviews/517b0f37cd023d848d000005/groups/57ff784a8f7ddac48b0001ce
    function Warrior(name){
      this.name = name;
      this.health = 100;
      this.strike = (enemy, swings) => enemy.health = Math.max(0, enemy.health - (Math.abs(swings) * 10));
    }
//2)  Best(2) https://www.codewars.com/kata/reviews/517b0f37cd023d848d000005/groups/55e883e6e52d86aa75000068
    class Warrior {
      constructor(name) {
        this.name = name;
        this.health = 100;
      }

      strike(enemy, swings) {
        enemy.health = Math.max(0, enemy.health - (swings * 10));
      }
    }
//#endregion


//#region 7008 JavaScript class-like objects
/*7008 JavaScript class-like objects (https://www.codewars.com/kata/javascript-class-like-objects)
Description:
  For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

  The following is an example of how the final code would be used and what the expected return values should be:
      var dog = new Animal('Max', 'dog');
      dog.toString(); // should return 'Max is a dog'
      dog.type; // should == 'dog'
      dog.name; // should == 'Max'
      dog.name = 'Lassie'; // should set name to 'Lassie'
*/

//My solution
    class Animal {
      constructor(name, type) {
        this.name = name;
        this.type = type;
      }

      // Method
      toString() {
        return this.name + ' is a ' + this.type;
      }
    }

//Solution(s) I like(links):
//1) Best(48) and Clever(4) https://www.codewars.com/kata/reviews/516f30207c907a79f200010b/groups/516f30207c907a79f2000147
    var Animal = function(name, type) {
      this.name = name;
      this.type = type;
    }
    Animal.prototype.toString = function() {
      return this.name + ' is a ' + this.type;
    }
//2) BAD PRACTICE(low performance) https://www.codewars.com/kata/reviews/516f30207c907a79f200010b/groups/516f30207c907a79f2000149
    // create your Animal class like object here
    Animal = function(name, type){
      this.name = name;
      this.type = type;
      this.toString = function(){return this.name+" is a "+this.type};
      };
//#endregion


//#region 7009 Get key/value pairs as arrays
/*7009 Get key/value pairs as arrays (https://www.codewars.com/kata/get-key-slash-value-pairs-as-arrays)
Description:
  Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.
  Example:
     keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
  Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?
*/

//My solution
    function keysAndValues(data){
      var objValues = Object.keys(data).map(function(key) {
          return data[key];
      });
      return [Object.keys(data), objValues]; //Object.values(data) is NOT supported
    }

//Solution(s) I like(links):
//1) Best(45) and Clever(54)
    function keysAndValues(data){
        var arr = [];
        arr.push(Object.keys(data));
        arr.push(Object.keys(data).map(function(x){return data[x]}))
        return arr
    }
//2) Best(9) https://www.codewars.com/kata/reviews/516f30267c907a79f200047e/groups/53b9b5670008b46197000a73
    function keysAndValues(data){
      // TODO: complete
      var keys = [],
          vals = [];
      for (key in data) {
        if(data.hasOwnProperty(key)){
          keys.push(key);
          vals.push(data[key]);
        }
      }
      return [keys, vals];
    }
//3) Clever(3) https://www.codewars.com/kata/reviews/516f30267c907a79f200047e/groups/538dcf6aab2b6efc47000867
    function keysAndValues(data){
      var arr = [[],[]];
      for(var keys in data){
        if(data.hasOwnProperty(keys)){
          arr[0].push(keys);
          arr[1].push(data[keys]);
        }
      }
      return arr;
    }
//#endregion

//#region 7010 Largest 5 digit number in a series
/*7010 Largest 5 digit number in a series (https://www.codewars.com/kata/largest-5-digit-number-in-a-series)
Description:
  In the following 6 digit number:
    283910
  91 is the greatest sequence of 2 consecutive digits.
  In the following 10 digit number:
    1234567890
  67890 is the greatest sequence of 5 consecutive digits.
  Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
    Adapted from ProjectEuler.net
*/

//My solution
    function solution(digits){
      let result = 0;
      for(let i=0; i < digits.length-4;i++){
          let num1 = +digits.substr(i,5);
          result = num1>result ? num1 : result;
      }
      return result;
    }



//Solution(s) I like(links):
//1) Best(1) https://www.codewars.com/kata/reviews/516f30297c907a79f200061e/groups/5ad1dfed8571de4cb4000207
    function solution(digits){
      const foo = String(digits)
      let max= 0
      for (let i = 0; i <= foo.length - 5;i++) {
        max = Math.max(max, foo.slice(i, i + 5))
      }
      return max
    }
//2) https://www.codewars.com/kata/reviews/516f30297c907a79f200061e/groups/5ada35eaa157e9e81f000cfd
    function solution(digits){
      let tempSlice = String(digits), largest = 0;

      for (let i = 1; i < tempSlice.length; i++) {
          if (tempSlice.slice(i,i+5) > largest) {
          largest = parseInt(tempSlice.slice(i,i+5));
        }
      }
        return largest;
    }
//3) https://www.codewars.com/kata/reviews/516f30297c907a79f200061e/groups/5ad3b9c8e18db3474a000044
    function solution(digits) {
      for (let i = 10, m; i--;)
        if (m = digits.match(RegExp(i + '\\d{4}', 'g'))) return Math.max(...m);
    }
//#endregion
