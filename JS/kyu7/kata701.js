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

//#region 7011 Building Strings From a Hash
/*7011 Building Strings From a Hash (https://www.codewars.com/kata/building-strings-from-a-hash/javascript)
Description:
  Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
  The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
  Example:

    solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

//My solution
    function solution(pairs){
      let result = [];
      //for .. of only supports iterable objects (arrays), not objects.
      for (let key in pairs) {
        result.push(`${key} = ${pairs[key]}`);
      }
      return result.join(); //By default the join method uses a comma, so you can just write array.join();
    }
//Solution(s) I like(links):
//1) Best(72) and Clever(75) !! https://www.codewars.com/kata/reviews/51c7d95b03878765940002c4/groups/51cc072bd6fdd1fc3c00043f
    function solution(pairs){
      return Object.keys(pairs)
        .map(function(k) { return k + ' = ' + pairs[k] })
        .join(',');
    }
//2) Best(2) https://www.codewars.com/kata/reviews/51c7d95b03878765940002c4/groups/575adf0dbb95c012e6000008
    function solution(pairs) {
      return Object.keys(pairs).map(k => `${k} = ${pairs[k]}`).join(",");
    }
//3) Clever(3) https://www.codewars.com/kata/reviews/51c7d95b03878765940002c4/groups/5440793526bc6a31f0000476
    function solution(pairs){
      return JSON.stringify(pairs).replace(/:/g," = ").replace(/\"/g,"").replace("{","").replace("}","");
    }
//#endregion


//#region 7012 Substituting Variables Into Strings: Padded Numbers
/*7012 Substituting Variables Into Strings: Padded Numbers (https://www.codewars.com/kata/substituting-variables-into-strings-padded-numbers/javascript)
Description:
  Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
  Example:
    solution(5) // should return "Value is 00005"
*/

//My solution
    function solution(value){
      let numLength = (value+'').length;
      return  `Value is ${('0'.repeat(5-numLength)+value)}`;
    }

//Solution(s) I like(links):
//1) Best(11) and Clever(22) https://www.codewars.com/kata/reviews/5458800054d8fef398000208/groups/5460f61f9726f60887000579
    function solution(value){
      return "Value is " + ("00000" + value).slice(-5);//NOTE: Take last 5 chars (can use .substr(-5) )
    }
//2)Clever(2) https://www.codewars.com/kata/reviews/5458800054d8fef398000208/groups/54a441233f956bb7f1000a3e
    function solution(value) {
      var output = value.toString();
      while(output.length < 5) output = '0' + output;
      return 'Value is ' + output;
    }
//3)Clever(3) https://www.codewars.com/kata/reviews/5458800054d8fef398000208/groups/545a4e2d85166a8336000705
    function solution(value) {
      return "Value is " + new Array(6 - String(value).length).join(0) + value;
    }
//#endregion


//#region 7013 Elapsed Seconds
/* 7013 Elapsed Seconds (https://www.codewars.com/kata/elapsed-seconds)
Description:
  Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.
  Tips:
  The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim) and Time (Ruby) instances.
  The start time will always be before the end time.
*/

//My solution
    function elapsedSeconds(startDate, endDate){
      return (endDate - startDate)/1000; //convert in seconds
    }

//Solution(s) I like(links):
//1) Best(2) https://www.codewars.com/kata/reviews/517b25a48557c200b800000f/groups/56adbe521348f950bd000064
    const elapsedSeconds = (start, end) => (end - start) / 1000;
//2) https://www.codewars.com/kata/reviews/517b25a48557c200b800000f/groups/523a32950b6e4b41060000ef
    function elapsedSeconds(startDate, endDate){
      if (startDate > endDate)
        return -1;

      return (endDate.getTime() - startDate.getTime()) / 1000;
    }
//#endregion

//#region 7014 Return substring instance count
/* 7014 Return substring instance count (https://www.codewars.com/kata/return-substring-instance-count/javascript)
Description:
   Complete the solution so that it returns the number of times the search_text is found within the full_text.
    Usage example:
    solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
    solution('aaabbbcccc', 'bbb') # should return 1
*/

//My solution
    function solution(fullText, searchText){
      return fullText.split(searchText).length - 1;
    }

//Solution(s) I like(links):
//1) Clever(9) https://www.codewars.com/kata/reviews/516f30297c907a79f2000682/groups/51eaac997bed72c65100009f
    function solution(fullText, searchText){
      return (fullText.match(new RegExp(searchText, 'g')) || []).length;
    }
//2) Best(2) https://www.codewars.com/kata/reviews/516f30297c907a79f2000682/groups/595665c3bff8ccf8cd0000a1
    const solution = (text, search) => text.split(search).length - 1;
//3) Clever(3) https://www.codewars.com/kata/reviews/516f30297c907a79f2000682/groups/53c0dd43e44500076f0003b0
    var solution = function occurances(fullText, searchText){
      var count = 0,
          index = -1;
      while(index = fullText.indexOf(searchText, index + 1), index != -1) count++;
      return count;
    };
//#endregion

//#region 7015 Remove anchor from URL
/* 7015 Remove anchor from URL (https://www.codewars.com/kata/remove-anchor-from-url)
Description:
  Complete the function/method so that it returns the url with anything after the anchor (#) removed.

  Examples:
    // returns 'www.codewars.com'
    removeUrlAnchor('www.codewars.com#about')
    // returns 'www.codewars.com?page=1'
    removeUrlAnchor('www.codewars.com?page=1')
*/

//My solution
    function removeUrlAnchor(url){
      //return url.split('#')[0]; // BEST PRACTICE
      let index = url.indexOf('#')>-1 ? url.indexOf('#') : url.length;
      return url.substr(0, index);
    }

//Solution(s) I like(links):
//1) Best(9) https://www.codewars.com/kata/reviews/51f2b4448cadf20ed0000389/groups/523f9bbc0f1d9ce46d00008b
  function removeUrlAnchor(url){
    return url.replace(/#.*/gi,""); //delete part after #
  } // OR url.replace(/#\w+/, '');
//2) Clever(3) https://www.codewars.com/kata/reviews/51f2b4448cadf20ed0000389/groups/580760101dd451bcf500021a
    let removeUrlAnchor = url => url.split('#')[0];

//#endregion


//#region 7016 String ends with?
/* 7016 String ends with? (https://www.codewars.com/kata/string-ends-with)
Description:
    Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

    Examples:

    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
*/

//My solution
    function solution(str, ending){
      let endLength = ending.length;
      return ending === str.slice(-endLength); //cand use str.substr()
    }

//Solution(s) I like(links):
//1) Best(34) https://www.codewars.com/kata/reviews/51f2d1cafc9c0f745c000380/groups/575cd0b881ce1de7af00013f
    function solution(str, ending){
      return str.endsWith(ending);
    }
    //OR
    const solution = (str, ending) => str.endsWith(ending);
//2) Best(54) and Clever(77) https://www.codewars.com/kata/reviews/51f2d1cafc9c0f745c000380/groups/537edfe3c701750d110005b8
    function solution(str, ending){
      return new RegExp(ending+"$", "i").test(str);
    }
//3) Best(16) https://www.codewars.com/kata/reviews/51f2d1cafc9c0f745c000380/groups/538584018e16f8f3b9000510
    function solution(str, ending){
      if (typeof(str) != "string" || typeof(ending) != "string")
        throw "wrong type";
      if (ending.length>str.length)
        return false;
      return str.substr(str.length-ending.length, ending.length) == ending;
    }
//4) Clever(12) https://www.codewars.com/kata/reviews/51f2d1cafc9c0f745c000380/groups/5230d21ee1988ec9e30002c2
    function solution(str, ending){
      return str.match(ending+"$")==ending;
    }
//5) Best(12) https://www.codewars.com/kata/reviews/51f2d1cafc9c0f745c000380/groups/520fb518c3775a2d47000091
    function solution(str, ending){
      return str.substr(-ending.length) == ending;
    }
//#endregion

//#region 7017 Sort arrays - 1
/* 7017 Sort arrays - 1 (https://www.codewars.com/kata/sort-arrays-1)
Description:
  Just a simple sorting usage. Create a function that returns the elements of the input-array in a sorted manner.
*/

//My solution
    // input: names - unsorted array
    // output: sorted array
    sortme =  names => names.sort();

//Solution(s) I like(links):
//1) Best(3) https://www.codewars.com/kata/reviews/51f431c2afadc317f40000a7/groups/520b7dda9ed66b94010001ff
    sortme = function( names ){
      return names.sort(function(a, b) { return a > b ? 1 : a < b ? -1 : 0 });
    }
//2) Clever(8) https://www.codewars.com/kata/reviews/51f431c2afadc317f40000a7/groups/56d743cf736bd0980a00147d
    sortme = Array.sort;
//#endregion


//#region 7018 No oddities here
/* 7018 No oddities here (https://www.codewars.com/kata/no-oddities-here)
Description:
  Write a small function that returns the values of an array that are not odd.
  All values in the array will be integers. Return the good values in the order they are given.
    function noOdds( values )
*/

//My solution
    function noOdds( values ){
      return values.filter( x => x%2 === 0);
    }

//Solution(s) I like(links):
//1) Best(7)  https://www.codewars.com/kata/reviews/51fd6bc82bc150b28e0000d1/groups/55e889f209cc003ce70000c7
    var noOdds = values => values.filter(x => !(x % 2));
//2) Best(71) and Clever(35) !!Comments https://www.codewars.com/kata/reviews/51fd6bc82bc150b28e0000d1/groups/53831168051ca95b45000002
    function noOdds( values ){
      function isEven(number){
      return number%2 == 0;
      }

      return values.filter(isEven);
    }
//3) Clever(2) https://www.codewars.com/kata/reviews/51fd6bc82bc150b28e0000d1/groups/55caa5cf6f57c78f7b00005b
    function noOdds( values ){
      return values.join('').match(/[24680]+/gm).map(Number)
    }
//#endregion


//#region 7019 Limit string length - 1
/* 7019 Limit string length - 1 (https://www.codewars.com/kata/limit-string-length-1)
Description:
  Complete the solution, so that it returns the truncated version of the string followed by '...'.

  Example:
    solution('Testing String',3) // should return 'Tes...'
    solution('Testing String',8) // should return 'Testing ...'
    solution('Test',8) // should return 'Test'
*/

//My solution
    const solution = (str,limit) => {
      let x = str.substr(0,limit);
      return str.length > limit ? x + '...' : x;
    };

//Solution(s) I like(links):
//1) Best(36) Comment https://www.codewars.com/kata/reviews/5208fc3cb613bc725f000145/groups/5208fc3cb613bc725f000144
    function solution(string,limit){
      return string.length > limit ? string.substr(0,limit) + "..." : string;
    }
//2) Best(8) https://www.codewars.com/kata/reviews/5208fc3cb613bc725f000145/groups/526084359a0022cfa2001608
    function solution(string, limit){
      return string.length > limit ? string.slice(0, limit) + '...' : string;
    }
//3) Best(2) https://www.codewars.com/kata/reviews/5208fc3cb613bc725f000145/groups/59845b8d472d85db7900008f
    const solution=(s,l)=>(s.length<=l)?s:s.substr(0,l)+'...';

//#endregion

//#region 7020 Adding useful functional functionality to JavaScript arrays
/* 7020 Adding useful functional functionality to JavaScript arrays (https://www.codewars.com/kata/adding-useful-functional-functionality-to-javascript-arrays)
Description:
    The JavaScript standard now includes functional additions to array like map, filter and reduce, but sadly is missing the convenience functions range and sum . Implement a version of range and sum (which you can then copy and use in your future Kata to make them smaller).

    Array.range(start, count) should return an array containing 'count' numbers from 'start' to 'start + count' Example: Array.range(0, 3) returns [0, 1, 2]

    Array.sum() return the sum of all numbers in the array Example: [0, 1, 2].sum() returns 3 Example: Array.range(-1,4).sum() should return 2

    While not forbidden try to write both function without using a for loop
*/

//My solution
    Array.range = function(start, count) {
      return new Array(count).fill(0).map((_,i)=> start+i);
    }

    Array.prototype.sum = function() {
      return this.reduce((a,b) => a+b,0); //0 is inital array value
    }

//Solution(s) I like(links):
//1) Best(24) https://www.codewars.com/kata/reviews/52195c9bb576caf142000082/groups/5385ef73c25c8a6c79000b1f
    Array.range = function(start, count) {
      return Array.apply(null, Array(count)).map(function(e, i) {
        return start + i;
      });
    }

    Array.prototype.sum = function() {
      return this.reduce(function(prev, next) {
        return prev + next;
      }, 0);
    }
//2) Best(7) https://www.codewars.com/kata/reviews/52195c9bb576caf142000082/groups/545047c32433c328a7000828
    Array.range = function(start, count) {
      var arr = [];
      while (count >0){
          arr.push(start++);
          count--;
      }
      return arr;
    };

    Array.prototype.sum = function() {
      return this.reduce(function(a,b){
          return a + b;
      }, 0);
    };
//#endregion

//#region 7021 True Min
/* 7021 True Min (https://www.codewars.com/kata/true-min)
Description:
  The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.
  Note: This min function need not handle more than two arguments.

      function min(a, b){
        return (a<b)?a:b;
      }
*/

//My solution
    function min(a, b){
      //Use === everywhere, otherwise Kata won't pass
      if(a === null) a=0;
      if(b === null) b=0;

      return ( (isNaN(a) || isNaN(b)) || (typeof a === 'undefined' || typeof b === 'undefined') )
              ? NaN : (a<b )?a:b;
    }

//Solution(s) I like(links):
//1) Best(10) Comment https://www.codewars.com/kata/reviews/52378b3ee72f21e1ea000048/groups/531745f8a2741ee852000b8e
    function min(a, b){
      return (isNaN(a) || isNaN(b)) ? NaN : ((a < b) ? +a : +b);
    }
//2) Best(10) and Clever (15) !Comments https://www.codewars.com/kata/reviews/52378b3ee72f21e1ea000048/groups/53c328e8415a703ed4000285
    function min(a, b){
      a === null && (a = 0);
      b === null && (b = 0);
      if (isNaN(a) || isNaN(b)) { return NaN; }
      return (a < b) ? a : b;
    }
//3) Best(3) https://www.codewars.com/kata/reviews/52378b3ee72f21e1ea000048/groups/53a991eda9198e4f4c000e88
    function min(a, b){
      if(a === null){
        a = 0;
      }
      if(b === null){
        b = 0;
      }

      if(typeof a === "number" && typeof b === "number"){
        if(!isNaN(a) && !isNaN(b)){
          return (a < b) ? a : b
        }
      }

      return NaN;
    }
//4) Clever(2) !Comments https://www.codewars.com/kata/reviews/52378b3ee72f21e1ea000048/groups/524e3d4f77e06bdc01000470
    function min(a, b){
      return !isNaN(a) && !isNaN(b) ? ((a<b)?a:b)+0 : 'NaN';
    }
//5) Clever(3) Comment https://www.codewars.com/kata/reviews/52378b3ee72f21e1ea000048/groups/524e702877e06bac89000709
    min = function(a, b) {
      return -Math.max(-a, -b);
    }
//#endregion


//#region 7022 (Don't) Make Me Repeat Myself
/* 7022 (Don't) Make Me Repeat Myself (https://www.codewars.com/kata/dont-make-me-repeat-myself)
Description:
  You're working on some interesting console application and you want to line up some of your lines just right. A lot of your data is nested down so you've got code like this all over:

      console.log('Root ->');
      console.log('    Sub-node');
      console.log('    Sub-node->');
      console.log('        Sub-sub-node');
      ...
  but that just looks terrible and doesn't scale well for variable levels of nesting. Oh, if only you could write something more like:

      console.log('Root->');
      console.log(' '.repeat(4) + 'Sub-node');
      console.log(' '.repeat(4) + 'Sub-node->');
      console.log(' '.repeat(8) + 'Sub-sub-node');
      ...
  Oh, that's right. You can.

  for loops are cool, I guess. Other kinds of solutions are a lot cooler.
*/

//My solution
    String.prototype.repeat = function(count) {
      if (count < 1) return '';
      return Array(count+1).join(this); //empty elements so last 1 dissapear durin JOIN (so count+1)
    };

//Solution(s) I like(links):
//0) almost same as mine https://www.codewars.com/kata/reviews/5241de3d8d333fefe30006a4/groups/52421baf8fb2a8d8e60003ce
//1) Clever(33) Comment https://www.codewars.com/kata/reviews/5241de3d8d333fefe30006a4/groups/524300418fb2a8cf13000b2b
    String.prototype.repeat = function(count) {
      return count ? this + this.repeat(--count) : '';
    };
//2) Clever (2) https://www.codewars.com/kata/reviews/5241de3d8d333fefe30006a4/groups/567c1cc7e8e8e3e7bb00003b
    String.prototype.repeat = function(count) {
      return Array.apply(null, {length: count}).map(e=>this).join('');
    };

//#endregion



//#region 7023 Honey to the Bee
/* 7023 Honey to the Bee (https://www.codewars.com/kata/honey-to-the-bee)
Description:
  Find out why the amount of honey in the hive is not increasing.
*/

//My solution
    function Bee(capacity, hive) {
      this.capacity = capacity;
      this.hive = hive;
    }

    function Hive() {
      this.pollen = 100;
    }

    //TODO: The amount of honey in the hive is not increasing.
    Hive.prototype.addPollen = function(pollen) {
      this.pollen += pollen;
    }

    Hive.prototype.getPollen = function() {
      return this.pollen;
    }

    Bee.prototype.unloadPollen = function() {
      //add this. to hive.addPollen(this.capacity);
      this.hive.addPollen(this.capacity);
    }

//Solution(s) I like(links):
//1) Best(1) https://www.codewars.com/kata/reviews/52437f32636a67edb00002fa/groups/5ba1715c69e0b9878d00072a
    class Bee {
      constructor(capacity, hive) {
        Object.assign(this, { capacity, hive })
      }

      unloadPollen() {
        const { hive, capacity } = this
        hive.addPollen(capacity)
      }
    }

    class Hive {
      constructor() {
        this.pollen = 100
      }

      addPollen(pollen) {
        this.pollen += pollen
      }

      getPollen() {
        return this.pollen
      }
    }
//2) Best(1)
    function Bee(capacity, hive) {
      this.capacity = capacity;
      this.hive = hive;
    }

    function Hive() {
      this.pollen = 100;
      this.addPollen = function(pollen) {
        this.pollen += pollen;
      }
    }

    Hive.prototype.getPollen = function() {
      return this.pollen;
    }

    Bee.prototype.unloadPollen = function() {
      this.hive.addPollen(this.capacity);
    }
//#endregion
