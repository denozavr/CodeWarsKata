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


//#region 7024 generateRules
/* 7024 generateRules (https://www.codewars.com/kata/generaterules)
Description:
  While creating IPtables rules to protect your server you want to write a function generateRules to help you with this. The function generateRules should take two arguments:
    1  a function which takes 1 port argument and creates a single IPtables rule
    2 an array with the ports for which the IPtables rules should be generated.
  The generateRules function should return one string with the iptables commands.
  This is how the generateRules function will be used:

      var myrules = generateRules(makeTCPRule, [22,80,443]);
  For this example the result would be this string (without linebreakings!):

    "iptables -I INPUT -p tcp --dport 22 -j ACCEPT ;
    iptables -I INPUT -p tcp --dport 80 -j ACCEPT ;
    iptables -I INPUT -p tcp --dport 443 -j ACCEPT ;"
  The makeTCPRule function is already provided for you and looks like this:

    function makeTCPRule(x){
      return "iptables -I INPUT -p tcp --dport " + x + " -j ACCEPT ;";
    }
*/

//My solution
    function generateRules(func,portList){
      let result="";
      for(let port of portList) {
        result = result + makeTCPRule(port); //was func on codewars site
      }
      return result;
    }

    //func is this function
    function makeTCPRule(x){
      return "iptables -I INPUT -p tcp --dport " + x + " -j ACCEPT ;";
    }


//Solution(s) I like(links):
//1) Best(5) Comment
    function generateRules(func,portList){
      return portList.map(func).join('');
    }
//2) Clever(1) https://www.codewars.com/kata/reviews/5220b7f87e831a7e7900041a/groups/5afdb75b4ca83be5b6005e67
    const generateRules = (func, ports) => ports.map(func).join('');
//3) Clever(1) https://www.codewars.com/kata/reviews/5220b7f87e831a7e7900041a/groups/5b6436841b98fbee96001589
    function generateRules(func, portList) {
      return portList.reduce((a, b) => a + func(b), '');
    }
//#endregion


//#region 7025 Manipulate URL Parameters
/* 7025 Manipulate URL Parameters (https://www.codewars.com/kata/manipulate-url-parameters)
Description:
  You need to write a function ( addOrChangeUrlParameter(url, keyValueParameter) ) that can manipulate URL parameters.
  It should be able to
  add a parameter to an existing URL,
  but also to
  change a parameter if it already exists.
  Example:

    addOrChangeUrlParameter("www.example.com", "key=value")
    // -> 'www.example.com?key=value' (adds a parameter).

    addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" )
    // -> 'www.example.com?key=value&key2=value2' (adds another parameter).

    addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" )
    // ->'www.example.com?key=newValue' (changes the parameter).
*/

//My solution
    /**
     * Play with URLs
     * @param {string} url - The URL that's we want to manipulate
     * @param {string} param - The parameter that we want to change or add
     * @returns {string} The result URL.
     */
    function addOrChangeUrlParameter (url, param) {
      if (!param) { return url; }
      let urlArr = url.split('?');
      //if URL params empty/undefined return [] otherwise split them
      let paramArr = (!urlArr[1]) ? [] : urlArr[1].split('&');
      let isFound = false;

      url = urlArr[0];

      paramArr = paramArr.map( (value) => (value.split('=')[0] === param.split('=')[0])
              ? (isFound = true, param) : value
      );

      if (!isFound)  paramArr.push(param);

      return `${url}?${paramArr.join('&')}`;
    }

//Solution(s) I like(links):
//1) Clever(27) Comment https://www.codewars.com/kata/reviews/524300d5add6f657e2000902/groups/52550ca20e60476501000211
    function addOrChangeUrlParameter (url, param) {
      url = url.replace(new RegExp(param.split('=')[0]+'=[^&]*'), param);
      return url + (url.indexOf(param) >= 0 ? '' : (url.indexOf('?')>=0?'&':'?')+param);
    }
//2) Best(2) https://www.codewars.com/kata/reviews/524300d5add6f657e2000902/groups/5b5b2e24f81bc652c5002e83
    function addOrChangeUrlParameter (url, param) {
      var main = url.match(/.+?(?=\?|$)/)[0];
      var params = {};
      url.replace(main,"").replace("?","").split("&").map((x)=>{params[x.split('=')[0]]=x.split('=')[1]});
      (param||"").split("&").map((x)=>{params[x.split('=')[0]]=x.split('=')[1]});

      return main += Object.keys(params).reduce((tot,x)=>{if(x){return tot += x + "=" + params[x]+"&"}else{return tot;}},"?").replace(/(&$)|(\?$)/,'');
    }
//3) Clever(3) https://www.codewars.com/kata/reviews/524300d5add6f657e2000902/groups/59c8ffa6e921ec84c000286c
    function addOrChangeUrlParameter (url, param) {
      var reg = new RegExp(param.replace(/=[^&]+/, '')+'=[^&]+');
      return reg.test(url) ? url.replace(reg, param) : /\?/.test(url) ? url+'&'+param : url+ (param ? '?'+param : '');
    }
//#endregion

//#region 7026 Javascript Namespacing
/*  7026 Javascript Namespacing (https://www.codewars.com/kata/javascript-namespacing)
Description:
  Define a class named MyClass inside a namespace MyNamespace. The class constructor should accept a single string argument. It should also have a function named sayHello that returns the string passed into the constructor.

  Example:
    var myObject = new MyNamespace.MyClass('Hello!');
    var phrase = myObject.sayHello(); // phrase should be 'Hello!'

  The interesting part is that MyClass should only be accessible via the namespace and should not define any extra global variables. Code should not redefine an existing namespace, but should also function if the namespace is not previously defined.
*/

//My solution
    // Define MyNamespace ...
    if(!MyNamespace) {
      let MyNamespace = {};
    }

    MyNamespace.MyClass = class MyClass {
      constructor(val) {
        this.val = val;
      }

      sayHello() {
        return this.val;
      }
    }

//Solution(s) I like(links):
//1) Best(19) !!COmment https://www.codewars.com/kata/reviews/524c6a2e55025e3fba000212/groups/524d881e6966f96f2300025b
    var MyNamespace = MyNamespace || {};

    MyNamespace.MyClass = function(phrase){
      this.phrase = phrase;
    };

    MyNamespace.MyClass.prototype.sayHello = function(){
      return this.phrase;
    };

//2) Clever(3) Comment https://www.codewars.com/kata/reviews/524c6a2e55025e3fba000212/groups/53d85f39e584ddc5520006ec
    var MyNamespace;

    MyNamespace.MyClass = function(msg) {
      this.msg = msg;
      this.sayHello = function() {
        return this.msg;
      };
    };
//3) Clever(2) https://www.codewars.com/kata/reviews/524c6a2e55025e3fba000212/groups/53888e20443aaecbf3000967
    (function (root) {
      var MyNamespace = root.MyNamespace = (root.MyNamespace || {} )

      var MyClass = MyNamespace.MyClass = function (str) {
        this.str = str;
        this.sayHello = function () { return this.str; };
      }


      })(this);
//#endregion


//#region 7027 Flatten
/* 7027 Flatten (https://www.codewars.com/kata/flatten-1)
Description:
  Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

    flatten([1,2,3]) // => [1,2,3]
    flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
    flatten([[[1,2,3]]]) // => [[1,2,3]]
 */

//My solution
    var flatten = function (array){
      return [].concat(...array);
    }

//Solution(s) I like(links):
//1) Best(22) COmment  https://www.codewars.com/kata/reviews/5251f603dc71afdb4f0002d5/groups/537e1c8bbf6c94c0e0000616
    var flatten = function (array){
      return array.reduce(function(a,z) {
        return a.concat(z);
      }, []);
    }
//2) Clever(179) & Best(82) !!Comment
    var flatten = function (lol){
      return [].concat.apply([],lol);
    }
//3) CLever(7) https://www.codewars.com/kata/reviews/5251f603dc71afdb4f0002d5/groups/5287757164abe1a5c5000347
    var flatten = function (lol){
      var arr = [];
      lol.forEach(function(el){ arr = arr.concat(el);});
      return arr;
    }
//4) Clever(4) https://www.codewars.com/kata/reviews/5251f603dc71afdb4f0002d5/groups/53b134903675e05fc20004c4
    var flatten = function (array){
      // TODO: Program me
      var flat = [];

      for (var i in array)
        flat = flat.concat(array[i]);

      return flat;
    }
//#endregion


//#region 7028 Sentences with Functions
/* 7028 Sentences with Functions (https://www.codewars.com/kata/sentences-with-functions)
Description:
  Implement all required functions in order to create the following sentences by calling those functions:
    Adam(has(a(dog()))); // must return "Adam has a dog."
    The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
 */

//My solution
    function Adam(x) {return x  ? `Adam ${x}` : 'Adam.'}
    function has(x) {return x ? `has ${x}` : 'has.'}
    function a(x) {return x ? `a ${x}` : 'a.'}
    function dog(x) {return x ? `dog ${x}` : 'dog.'}
    function The(x) {return x ? `The ${x}` : 'The.'}
    function name(x) {return x ? `name ${x}` : 'name.'}
    function of(x) {return x ? `of ${x}` : 'of.'}
    function the(x) {return x ? `the ${x}` : 'the.'}
    function is(x) {return x ? `is ${x}` : 'is.'}
    function also(x) {return x ? `also ${x}` : 'also.'}


//Solution(s) I like(links):
//1) Best(3) https://www.codewars.com/kata/reviews/52567c56cb6ac86b56000519/groups/52809895c9998ad790000754
  function append(str, add) { return add + (str ? " " + str : "."); }
  function Adam(str) { return append(str, "Adam"); }
  function has(str) { return append(str, "has"); }
  function a(str) { return append(str, "a"); }
  function dog(str) { return append(str, "dog"); }
  function The(str) { return append(str, "The"); }
  function name(str) { return append(str, "name"); }
  function of(str) { return append(str, "of"); }
  function the(str) { return append(str, "the"); }
  function is(str) { return append(str, "is"); }
  function also(str) { return append(str, "also"); }

//2) Clever(39) & Best(19) !!Comment https://www.codewars.com/kata/reviews/52567c56cb6ac86b56000519/groups/537df947989c706c4000041e
  function getName(args) {
    if (args.length==0) {return arguments.callee.caller.name +'.' }
      return arguments.callee.caller.name +' '+ args[0];
    };

    function Adam() {return getName(arguments)}
    function has() {return getName(arguments)}
    function a() {return getName(arguments)}
    function dog() {return getName(arguments)}
    function The() {return getName(arguments)}
    function name() {return getName(arguments)}
    function of() {return getName(arguments)}
    function the() {return getName(arguments)}
    function is() {return getName(arguments)}
    function also() {return getName(arguments)}
//3) Clever(35) & Best(11) Comment https://www.codewars.com/kata/reviews/52567c56cb6ac86b56000519/groups/525da6a2a1b088df41001396
    [
      'Adam', 'has', 'a', 'dog', 'The', 'name', 'of', 'the', 'is', 'also'
    ].map(function (word) {
      this[word] = createWord(word);
    }, this);

    function createWord(word) {
      return function (next) {
        if (arguments.length) return word + ' ' + next;
        return word + '.';
      };
    }
//3) Clever(24) https://www.codewars.com/kata/reviews/52567c56cb6ac86b56000519/groups/53bd54928eb47701240009cc
    _fn = function(name, str) {
      return name + (str ? ' ' + str : '.');
    }

    'Adam has a The name of the dog is also'.split(' ').forEach(function(name) {
      this[name] = _fn.bind(null, name);
    })
//4) Clever(4)  !!Comment https://www.codewars.com/kata/reviews/52567c56cb6ac86b56000519/groups/52567e9476c9b8f2df0002b1
    function Adam() { return 'Adam has a dog.'; }
    function has() {}
    function a() {}
    function dog() {}
    function The() { return 'The name of the dog is also Adam.'; }
    function name() {}
    function of() {}
    function the() {}
    function is() {}
    function also() {}
//#endregion


//#region 7029 For the sake of argument
/* 7029 For the sake of argument (https://www.codewars.com/kata/for-the-sake-of-argument)
Description:
  Write a function named numbers that returns true if all the parameters it is passed are of the Number type. Otherwise, the function should return false. The function should accept any number of parameters.

  Example usage:
    numbers(1, 4, 3, 2, 5); // true
    numbers(1, "a", 3); // false
    numbers(1, 3, NaN); // true
 */

//My solution
const numbers = function (...nums){
  return nums.every(x => typeof x === 'number');
}
//const numbers = (...nums) => nums.every(x => typeof x === "number");

//Solution(s) I like(links):
//1) Best(27) & Clever(40) https://www.codewars.com/kata/reviews/5258b43fe6925df5ab003641/groups/53a49b19fcf6ef5e7a000307
    function numbers() {
      return [].every.call(arguments, function(value) {
        return typeof value === "number";
      });
    }
//2) Best(7) https://www.codewars.com/kata/reviews/5258b43fe6925df5ab003641/groups/539e72256ef2b28d5700102f
    function numbers () {
      var params = Array.prototype.slice.call(arguments)

      return params.every(isNumber);
    }

    function isNumber (arg) {
      return typeof arg === 'number';
    }
//3) Best(2) https://www.codewars.com/kata/reviews/5258b43fe6925df5ab003641/groups/58ef876b9e8347829f000128
    function numbers() {
      return [...arguments].every(x => typeof x === "number");
    }
//4) Clever(12) https://www.codewars.com/kata/reviews/5258b43fe6925df5ab003641/groups/537db773bf6c94a222000069
    var numbers = function() {
      return Array.prototype.filter.call(arguments, function(n) { return typeof n !== 'number'; }).length === 0;
    }
//5) Clever(3) https://www.codewars.com/kata/reviews/5258b43fe6925df5ab003641/groups/570828ced531cd9495000a65
    const numbers = (...arr) => arr.reduce((a, b) => a && typeof (b) == "number", true);
//#endregion


//#region 7030 Reverse words
/* 7030 Reverse words (https://www.codewars.com/kata/reverse-words)
Description:
    Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

    Examples
      "This is an example!" ==> "sihT si na !elpmaxe"
      "double  spaces"      ==> "elbuod  secaps"
 */

//My solution
function reverseWords(str) {
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('').reverse().join('');
  }
  return arr.join(' ');
}

//Solution(s) I like(links):
//1) Best(205) & Clever(95) !!Comment https://www.codewars.com/kata/reviews/5259b20d6021e9e14c0010d7/groups/5259b20d6021e9e14c0010d6
    function reverseWords(str) {
      return str.split(' ').map(function(word){
        return word.split('').reverse().join('');
      }).join(' ');
    }

    //Similar: https://www.codewars.com/kata/reviews/5259b20d6021e9e14c0010d7/groups/5635e3799f4af428e1000043
    function reverseWords(str) {
      return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
    }
//2) Best(2) https://www.codewars.com/kata/reviews/5259b20d6021e9e14c0010d7/groups/5a0b4d821733983c51001e67
    var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
//3) Clever(131) Comment https://www.codewars.com/kata/reviews/5259b20d6021e9e14c0010d7/groups/525e5a9d91e2b8c04b000570
    function reverseWords(str) {
      // Go for it
      //split words into seperate arrays
      return str.split("").reverse().join("").split(" ").reverse().join(" ");
    }
//4) Clever(5) Comment https://www.codewars.com/kata/reviews/5259b20d6021e9e14c0010d7/groups/525c69b61515e6e768000158
    function reverseWords(str) {
      var newStr = "";
      for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
      }
      return newStr.split(" ").reverse().join(" ");
    }
//#endregion


//#region 7031 Javascript filter - 1
/* 7031 Javascript filter - 1 (https://www.codewars.com/kata/525d9b1a037b7a9da7000905)
Description:
  While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

  If you have the input-array:

    [ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
  it should output

    [ [ "bar_", "bar@bar.com" ] ]
  You have to use the filter-method which returns each element of the array for which the filter-method returns true.

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/

//My solution
    function searchNames( logins ){
      return logins.filter(function(login_name) {
        // return emails that ends with '_'
        return login_name[0].slice(-1) === '_';
      });
    }

//Solution(s) I like(links):
//1) Best(7) & Clever(16) https://www.codewars.com/kata/reviews/525d9b71037b7a0dd80008c4/groups/53975d71afebea81b50009cc
    function searchNames( logins ){
      return logins.filter(function(arr){
        return arr[0].match(/_$/);});
    }

    //modern
    function searchNames( logins ){
      return logins.filter(a => a[0].match(/_$/));
    }
//2) Best(8) https://www.codewars.com/kata/reviews/525d9b71037b7a0dd80008c4/groups/5267de4e2406727d4a0006ff
    function searchNames( logins ){
      return logins.filter(function(entry) { return entry[0].lastIndexOf('_') == entry[0].length-1; });
    }

//3) Clever(3) https://www.codewars.com/kata/reviews/525d9b71037b7a0dd80008c4/groups/538e73f18ca4a385870014c5
    function searchNames( logins ){
      console.log(logins);
        return logins.filter(function(x){return x[0].search(/\_$/) !== -1})
      }
//4) Best(3) https://www.codewars.com/kata/reviews/525d9b71037b7a0dd80008c4/groups/592e7da47f362b67c20001a7
    function searchNames( logins ){
      return logins.filter(a=>a[0].endsWith('_'));
    }
//5) Best(4) https://www.codewars.com/kata/reviews/525d9b71037b7a0dd80008c4/groups/538e2de38ca4a3a5f9001105
    function searchNames( logins ){
      var problemLogins = logins.filter(filterLastUnderscore);
      return problemLogins
    }

    function filterLastUnderscore(login){
      var name = login[0];
      var lastChar = name.charAt(name.length - 1)
      if (lastChar === '_'){
        return true;
      } else {
        return false;
      }
    }
//#endregion


//#region 7032 Triangular Treasure
/* 7032 Triangular Treasure (https://www.codewars.com/kata/525e5a1cb735154b320002c8)
Description:
  Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

    1st (1)   2nd (3)    3rd (6)
    *          **        ***
               *         **
                         *
  You need to return the nth triangular number. You should return 0 for out of range values:

    triangular(0)==0,
    triangular(2)==3,
    triangular(3)==6,
    triangular(-10)==0
*/

//My solution
    function triangular(n) {
      let sum = 0;
      for(let i = 1; i <= n; i++){
        sum += i;
      }
      return sum;
    }

//Solution(s) I like(links):
//1) Best(72) & Clever(104) !Comment https://www.codewars.com/kata/reviews/525e5b2117c7cdc6d8000340/groups/52699cc3383e1c6aae001682
    // Return the nth triangular number
    function triangular( n ) {
      return (n > 0) ? ((n * n) + n) / 2 : 0;
    }
//2) Best(17) & Clever(13) https://www.codewars.com/kata/reviews/525e5b2117c7cdc6d8000340/groups/5398d5bdc729dace170013ac
    // Return the nth triangular number
    var max_n = Math.floor(Math.sqrt(Number.MAX_VALUE));

    function triangular(n) {
      if (n < 1 || n >= max_n) return 0;

      return (n * (n + 1)) / 2;
    }
//3) Clever(10) https://www.codewars.com/kata/reviews/525e5b2117c7cdc6d8000340/groups/53a7115a3d87dd1f8e000c73
    // Return the nth triangular number
    function triangular( n ) {
      return n <= 0 ? 0 : (n * (n+1))>>1;
    }
//4) Clever(6)  https://www.codewars.com/kata/reviews/525e5b2117c7cdc6d8000340/groups/53a90155a9198e5304000605
    // Return the nth triangular number
    function triangular( n ) {
      // edge cases: n <= 0 is already covered.

      // number of stars to make triangle, aka the result
      var sumStars = 0;
      // To make the triangle, each row has one less star. The first row has n stars.
      // So start from n, and add n-1, then n-2, then n-3, etc. stars
      // Once we get to 0, we have our triangle
      while (n > 0) {
        sumStars += n;
        n -= 1;
      }
      // The number of stars in traingle is result
      return sumStars;
    }
//5) Clever(5) Comment https://www.codewars.com/kata/reviews/525e5b2117c7cdc6d8000340/groups/527715cf4ca29a409b000662
    function triangular (n) {
      if (n < 1) {
        return 0;
      } else if (n === 1) {
        return 1;
      } else {
        return triangular (n - 1) + n;
      }
    }

//#endregion
