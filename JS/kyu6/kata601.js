//#region 6001 Multiples of 3 and 5
/*6001 Multiples of 3 and 5 (https://www.codewars.com/kata/multiples-of-3-and-5/train/csharp)
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
//#endregion

//#region 6002 Extract the IDs from the data set
/*6002 Extract the IDs from the data set (https://www.codewars.com/kata/multiples-of-3-and-5/train/csharp)
Description:
Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

  var data = {
  id: 1,
  items: [
      {id: 2},
      {id: 3, items: [
      {id: 4},
      {id: 5}
      ]}
  ]
  }

extractIds(data) // should return [1,2,3,4,5]
The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/

//My solution
    function extractIds(data){
      var result = [];
      for(var o in data) {
          if(o==='id') result = result.concat(data[o]);
          else if(o==='items'){
            data[o].forEach(function(e) {
              result = result.concat(extractIds(e));
            });
          }
      }
    return result;

    }

//Solution(s) I like(links):
//1) BEST (6 votes) http://bit.ly/2zcepmy
    function extractIds(data) {
      let ids  = []
      if ('id' in data) ids.push(data.id);
      if ('items' in data) data.items.forEach(item => ids = ids.concat(extractIds(item)));
      return ids;
    }
//2) CLEVER(27 votes) http://bit.ly/2hEaAwc
    function extractIds(data){
      return [].concat.apply([], Object.keys(data).map(function(item) {
        return item === 'id' ? data[item] : extractIds(data[item]);
      }));
    }
//3) http://bit.ly/2A4Ehxg
    function extractIds(data){
      return (JSON.stringify(data).match(/\d+/g)||[]).map(x=>+x)
    }
//#endregion

//#region 6003 Custom each() Array method
/*6003 Custom each() Array method (https://www.codewars.com/kata/custom-each-array-method/train/javascript)
Description:
JavaScript provides an Array.prototype.forEach method that allows you to iterate over array values.
 For this exercise you will create your own array method called 'each'. It will be similar to the forEach method,
 except for one difference. If the callback function returns true then the loop will stop and no additional values will be iterated.
The following shows a contrived example of how this new method would be used:

    var letters = ['a', 'b', 'c', 'd', 'e']
    var allowedLetters = []
    letters.each(function(letter, index){
      // break out of the loop if we reached a letter with the value 'd'
      if(letter == 'd') {
        return true;
      }
      allowedLetters.push(letter);
    })

// allowedLetters should equal ['a', 'b', 'c']
*/

//My solution
    Array.prototype.each = function(array) {
      var result = [];

      for (let i = 0; i < this.length; i++) {
        if(array(this[i], i))  break;
      }

      return result;
    };

//Solution(s) I like(links):
//1) Clever(24) https://www.codewars.com/kata/reviews/516f30207c907a79f2000158/groups/52261ef0cac754e69e000350
   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    Array.prototype.each = function(callback) {
      return this.some(callback);
    }
//2)Comments
    Array.prototype.each = [].some;
//3) https://www.codewars.com/kata/reviews/516f30207c907a79f2000158/groups/53b38bc4549d3217fd00022c
    Array.prototype.each = function(callback){
      for(var i in this){
        if(callback(this[i],i,this)) break;
      }
    }
//4)
    Array.prototype.each = function(f) {
      return this.some((item, idx) => f(item, idx));
    };
//#endregion

//#region 6004 Fizz / Buzz
/*6004 Fizz / Buzz (https://www.codewars.com/kata/fizz-slash-buzz/javascript)
Description:
Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer and C is the number of multiples of 3 and 5 less than the given integer.

For example, solution(20) should return [5, 2, 1]

    # in R, returns a numeric vector
    solution(20)
    [1] 5 2 1

    class(solution(20))
    [1] "numeric"
*/

//My solution
    function solution(number){
      let arr = [0,0,0];
      //let a=0,b=0,c=0;
      for(let i=1; i<number;i++){
          if(i%3==0 && i%5!=0) arr[0]++; //a++
          if(i%5==0 && i%3!=0) arr[1]++; //b++
          if(i%15==0) arr[2]++; //c++
      }
      //arr.push(a,b,c);
      return arr;
    }

//Solution(s) I like(links):
//1)Best(12) and Clever(16) https://www.codewars.com/kata/reviews/51dda85491f5b5608b0004d3/groups/55d9f1bdebca2ae4dd000077
    function solution(n) {
      --n;
      const c15 = Math.floor(n / 15);
      const c3 = Math.floor(n / 3) - c15;
      const c5 = Math.floor(n / 5) - c15;
      return [c3, c5, c15];
    }
//2) Clever(14) https://www.codewars.com/kata/reviews/51dda85491f5b5608b0004d3/groups/5380df130fcd7cc46f000c7e
    function solution(number){
      number--;
      var a = [Math.floor(number/3), Math.floor(number/5), Math.floor(number/15)];
      a[0] -= a[2];
      a[1] -= a[2];
      return a;
    }
//3) Best(8) https://www.codewars.com/kata/reviews/51dda85491f5b5608b0004d3/groups/56252bd010dc8515c4000004
    function solution(number){
      var ACount = 0,
          BCount = 0,
          CCount = 0;

      for(var i = 1; i<number; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
          CCount++;
        }
        else if(i % 3 == 0 && i % 5 !== 0) {
          ACount++;
        }
        else if(i % 5 == 0 && i % 3 !== 0) {
          BCount++;
        }
      }

      return [ACount, BCount, CCount];
    }
//4) https://www.codewars.com/kata/reviews/51dda85491f5b5608b0004d3/groups/5a94602468e23a2328000f45
    const solution=n=>[~~((n-1)/3)-~~((n-1)/15),~~((n-1)/5)-~~((n-1)/15),~~((n-1)/15)]
//#endregion

//#region 6005 Make the Deadfish swim.
/*6005 Make the Deadfish swim. (https://www.codewars.com/kata/make-the-deadfish-swim/javascript)
Description:
Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long.
'i' will increment the value ( initially 0 ).
'd' will decrement the value.
's' will square the value.
'o' will output the value into the return array.
Invalid characters should be ignored.

    parse( "iiisdoso" ); // should == [ 8 , 64 ]
*/

//My solution
// Return the output array, and ignore all non-op characters
    function parse( data )
    {
      var result=[];
      var temp=0;
      for (let index = 0; index < data.length; index++) {
          switch (data[index]) {
          case 'i':
              temp++;
          break;
          case 'd':
              temp--;
          break;
          case 's':
              temp*=temp;
          break;
          case 'o':
            result.push(temp);
          break;
          default:
          break;
        }
      }

      return result.length>0 ? result : temp;
    }


//Solution(s) I like(links):
//1)Best(6) and Clever(8)  https://www.codewars.com/kata/reviews/51e0007c1f9378fa810002ac/groups/53a91765947277ee260006e0
    var map = {
      'i' : function(x){return x + 1;},
      'd' : function(x){return x - 1;},
      's' : function(x){return x * x;}
    }

    function parse( data )
    {
      var array = [], val = 0;
      data.split('').forEach(function(x){
        if(x === 'o'){
          array.push(val);
        } else {
          val = map[x](val);
        }
      });
      return array;
    }
//2) https://www.codewars.com/kata/reviews/51e0007c1f9378fa810002ac/groups/587b0511a7ef2baafe0001e8
    function parse(data) {
      let res = [];

      data.split('').reduce((cur, s) => {
        if (s === 'i') cur++;
        if (s === 'd') cur--;
        if (s === 's') cur = Math.pow(cur, 2);
        if (s === 'o') res.push(cur);

        return cur;
      }, 0);

      return res;
    }
//3) https://www.codewars.com/kata/reviews/51e0007c1f9378fa810002ac/groups/51e6cad921c35210c700000a
    function parse( data )
    {
      var state = {
        output: [],
        value: 0,
        methods: {
          o: function () { this.output.push(this.value); },
          i: function () { this.value += 1; },
          d: function () { this.value -= 1; },
          s: function () { this.value *= this.value; },
        },
      };
      data.split('').forEach( function (cmd) {
        if (cmd in state.methods) {
          state.methods[cmd].call(state);
        }
      });
      return state.output;
    }
//#endregion

//#region 6006 Find within array
/*6006 Find within array (https://www.codewars.com/kata/find-within-array)
Description:
  Let's make an advanced version of Array.indexOf. We'll create a function that takes in two parameters:

  an array (length and types of items are irrelevant), and a function (value, index) that will be called on members of the array. The function will return either true or false. Your function will iterate through the members of the array in order until the provided iterator function returns true; at which point your function will return that item's index.
  If the iterator function returns false for all members of the array, your function should return -1.

      var trueIfEven = function(value, index) { return (value % 2 === 0) };
      findInArray([1,3,5,6,7], trueIfEven) // should === 3
*/

//My solution
    let findInArray = function(array, iterator) {
      for(let i=0;i<array.length;i++){
        if(iterator(array[i],i)) //pass value, index for custom function
            return i;
      }
      return -1;
    };

//Solution(s) I like(links):
//1)Best(9) and Clever(52) https://www.codewars.com/kata/reviews/51f082ba7297b8f07f000004/groups/52447a6195c2a66b13000b92
  var findInArray = function(array, iterator) { //TODO : Read explanation in comments
    return array.map(iterator).indexOf(true);
  };
//2) https://www.codewars.com/kata/reviews/51f082ba7297b8f07f000004/groups/53bff019924571dfd00009c5
  var findInArray = function(array, iterator) {
    var idx
    return array.some(function (v,i) {idx = i; return iterator(v,i);}) ? idx : -1
  };
//3) https://www.codewars.com/kata/reviews/51f082ba7297b8f07f000004/groups/5611f6c520a5745dfc00010d
    require("babel/polyfill");
    let findInArray = (arr, pred) => arr.findIndex(pred);
//4) https://www.codewars.com/kata/reviews/51f082ba7297b8f07f000004/groups/54ba8f6403f70153e5000cbb
    function findInArray(arr, f) {
      return arr.indexOf(arr.filter(f)[0]);
    }
//5) https://www.codewars.com/kata/reviews/51f082ba7297b8f07f000004/groups/57d0e73642e44e78cd000094
    var findInArray = function(array, iterator) {
      return array.indexOf(array.find(iterator));
    };
//#endregion

//#region 6007 Sort Arrays (Ignoring Case)
/*6007 Sort Arrays (Ignoring Case) (https://www.codewars.com/kata/sort-arrays-ignoring-case)
Description:
  Simple sort, but this time sort regardless of upper / lower case.
  So the input of
    [ "Hello", "there", "I'm", "fine"]
  is translated to
    ["fine", "Hello", "I'm", "there" ]
*/

//My solution
    // input: names - unsorted strings
    // output: case-agnostic sort
    sortme = function( names ){
      return names.sort(function (a, b) {
        /* Storing case insensitive comparison */
        var comparison = a.toLowerCase().localeCompare(b.toLowerCase());
        /* If strings are equal in case insensitive comparison */
        if (comparison === 0) {
            /* Return case sensitive comparison instead */
            return a.localeCompare(b);
        }
        /* Otherwise return result */
        return comparison;
    });
    }


//Solution(s) I like(links):
//1)Best(15) and Clever(10) https://www.codewars.com/kata/reviews/51f43ba4afadc30d690000c7/groups/5396d8d0afebea5c9500022c
    sortme = function( names ){
      return names.sort(function(first, second) {
        return first.toLowerCase().localeCompare(second.toLowerCase())
      })
    }
//2)Best(2) https://www.codewars.com/kata/reviews/51f43ba4afadc30d690000c7/groups/5395522bb8fa07073f000133
    sortme = function( names ){
      return  names.sort(function(a,b){
        return CompareForSort(a.toLowerCase().charAt(0),b.toLowerCase().charAt(0));
      });
    }

    function CompareForSort(first, second)
    {
        if (first == second)
            return 0;
        if (first < second)
            return -1;
        else
            return 1;
    }
//#endregion

//#region 6008 Arrays Similar
/*6008 Arrays Similar (https://www.codewars.com/kata/arrays-similar)
Description:
  Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
    var arr1 = [1, 2, 2, 3, 4],
        arr2 = [2, 1, 2, 4, 3],
        arr3 = [1, 2, 3, 4],
        arr4 = [1, 2, 3, "4"]

    arraysSimilar(arr1, arr2); // Should equal true
    arraysSimilar(arr2, arr3); // Should equal false
    arraysSimilar(arr3, arr4); // Should equal false
*/

//My solution
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //since all elements are integers, we will compare SUMs of arrays
    function arraysSimilar(arr1, arr2) {
      return arr1.length == arr2.length && arr1.reduce(reducer) === arr2.reduce(reducer);
    }


//Solution(s) I like(links):
//1)Best(5) and Clever(7) https://www.codewars.com/kata/reviews/51e704f2d8dbace38900027d/groups/53dcbf5d2259edf9d10003a7
    function arraysSimilar(arr1, arr2) {
      arr1 = arr1.sort(sortFunc);
      arr2 = arr2.sort(sortFunc);
      return arr1.length == arr2.length && arr1.every(function(a,i) {return a === arr2[i];});
    }

    function sortFunc(a,b) {return a-b;}
//2) https://www.codewars.com/kata/reviews/51e704f2d8dbace38900027d/groups/524364eb95c2a68da1000250
    function arraysSimilar(arr1, arr2) {
      return JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
    }
//3) https://www.codewars.com/kata/reviews/51e704f2d8dbace38900027d/groups/59a7fb074fa03429ad0033a8
    function arraysSimilar(arr1, arr2) {
      return JSON.stringify(arr1.slice().sort()) === JSON.stringify(arr2.slice().sort());
    }

//#endregion

//#region 6009 Title Case
/*6009 Title Case (https://www.codewars.com/kata/title-case)
Description:
  A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

  Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
  ###Arguments (Other languages)
  1st argument (required): the original string to be converted.
  2nd argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
  ###Example

    titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
    titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
    titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

//My solution
    function titleCase(title, minorWords) {
      minorWords = minorWords ? minorWords.toLowerCase().split(' ') : [];

      title = title ? title.toLowerCase().split(' ').map((word, index) => {
          if (minorWords.includes(word) && index > 0) {
            return word.toLowerCase();
          }
          return word[0].toUpperCase() + word.slice(1);
        }) : [];

      return title.join(' ');
    }

//Solution(s) I like(links):
//1)Best(18) and Clever(47) https://www.codewars.com/kata/reviews/5202ef17a402dd033c00000c/groups/53a199171c7f537e450006cb
    String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    }

    function titleCase(title, minorWords) {
    var titleAr = title.toLowerCase().split(' '),
        minorWordsAr = minorWords ? minorWords.toLowerCase().split(' ') : [];

    return titleAr.map(function(e, i){return minorWordsAr.indexOf(e) === -1 || i === 0 ? e.capitalize() : e })
                  .join(' ');
    }
//2) Clever(9) https://www.codewars.com/kata/reviews/5202ef17a402dd033c00000c/groups/55f94f5a9b300ce9fb000090
    function titleCase(title, minorWords) {
      minorWords = (minorWords || "").toLowerCase().split(' ');
      title = title.toLowerCase();
      return title.replace(/(\w)\w*/g, (word, firstChar, index) => {
        if (index === 0 || minorWords.indexOf(word) === -1)
          word = word.replace(firstChar, firstChar.toUpperCase());
        return word;
      });
    }
//#endregion


//#region 6010 IP Validation
/* 6010 IP Validation (https://www.codewars.com/kata/ip-validation/javascript)
Description:
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).
Input to the function is guaranteed to be a single string.
    Examples
    // valid inputs:
    1.2.3.4
    123.45.67.89
    // invalid inputs:
    1.2.3
    1.2.3.4.5
    123.456.78.90
    123.045.067.089
Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!
*/

//My solution
function isValidIP(str) {
  // mean 25(0-5) OR 2(0-49) OR (1)0-99 AND end with .(dot) or end of line ($), use this group 4 times
  return /^((25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(\.|$)){4}$/.test(str);
}

//Solution(s) I like(links):
//1) Best(69) and Clever(180) https://www.codewars.com/kata/reviews/516f30257c907a79f2000415/groups/539c55c77f0b616a350004f7
function isValidIP(str) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}
//2) Best(56) and Clever(81)  https://www.codewars.com/kata/reviews/516f30257c907a79f2000415/groups/538d67658ca4a3384300030f
function isValidIP(str) {
  return str.split('.').filter(function(v){return v==Number(v).toString() && Number(v)<256}).length==4;
}
//3) Best(20) and Clever(49) https://www.codewars.com/kata/reviews/516f30257c907a79f2000415/groups/587fac9707076d1106000391
const net = require('net');
const isValidIP = (s) => net.isIP(s);
//4) Clever(12) https://www.codewars.com/kata/reviews/516f30257c907a79f2000415/groups/55000acdc50295f946000dd3
function isValidIP(str) {
  return /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){4}$/.test(str+'.');
}

//#endregion

//#region 6011 Break camelCase
/* 6011 Break camelCase (https://www.codewars.com/kata/break-camelcase)
Description:
  Complete the solution so that the function will break up camel casing, using a space between words.

  Example
    solution('camelCasing') // => should return 'camel Casing'
*/

//My solution
    // Used Regular Expressions
    function solution(string) {
      return string.replace(/([A-Z]{1})/g, v => ' ' + v);
    }

//Solution(s) I like(links):
//1) Best(69) and Clever(180) https://www.codewars.com/kata/reviews/5208f99aee097e655200014b/groups/521ba11e423f17c4e30001db
    function solution(string) {
      return(string.replace(/([A-Z])/g, ' $1'));
    }
//2) Best(8) https://www.codewars.com/kata/reviews/5208f99aee097e655200014b/groups/57c7ccebf8392d668500005d
    const solution = string => string.replace(/[A-Z]/g, ' $&')
//3) Best(5) and Clever(6) https://www.codewars.com/kata/reviews/5208f99aee097e655200014b/groups/57fb26d321c84ba35e0000db
    function solution(string) {
      return string.replace(/(?=[A-Z])/g," ")
    }
//#endregion



//#region 6012 Duplicate Arguments
/* 6012 Duplicate Arguments (https://www.codewars.com/kata/duplicate-arguments)
Description:
  Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function. The solution should implement the most optimal algorithm possible.

      solution(1, 2, 3) // returns false
      solution(1, 2, 3, 2) // returns true
      solution('1', '2', '3', '2') // returns true
  The array values passed in will only be strings or numbers. The only valid return values are true and false.
*/

//My solution
    function solution(){
      var args = arguments;
      //Set include only UNIQUE value, if its size less than Length of Args List, then we got a duplicate in arguments
      return args.length > new Set(args).size;
    }

//Solution(s) I like(links):
//1) Best(3) and Clever(1) https://www.codewars.com/kata/reviews/520d9c27e9940532eb000191/groups/544a73d74a3018aa190008fb
    function solution() {
      for (var map = new Map(), i = arguments.length; i--;) {
        if (map.has(arguments[i])) return true
        map.set(arguments[i], 1)
      }
      return false
    }
//2) Clever(2) https://www.codewars.com/kata/reviews/520d9c27e9940532eb000191/groups/557df1381451780a58000135
      function solution(){
        return /(.).*?\1/.test([].join.call(arguments,''));
      }
//#endregion

//#region 6013 Custom sort function
/*6013 Custom sort function (https://www.codewars.com/kata/custom-sort-function)
Description:
  Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.
  Example:

    sort([1,3,2]) // should return [1,2,3]
*/

//My solution
  function sort(items){
    if (items.length <= 1) return items
    let first = items[0];
    let lesser = [];
    let greater = [];
    for (let i = 1; i < items.length; i++) {
      items[i] < first ? lesser.push(items[i]) : greater.push(items[i])
    }
    return sort(lesser).concat(first, sort(greater))
  }

//Solution(s) I like(links):
//1) Best(2) https://www.codewars.com/kata/reviews/52105fab0bd0ce9dd0000101/groups/5acd0305aa1536f095000442
    function sort(items) {
      const swap = (arr, i , j) => [arr[i], arr[j]] = [arr[j], arr[i]];
      for (let i = 0; i < items.length ; i++) {
        for(let j = 0 ; j < items.length - i - 1; j++) {
            if (items[j] > items[j + 1]) swap(items, j, j + 1);
        }
      }
      return items;
    }
//2) Clever(3) https://www.codewars.com/kata/reviews/52105fab0bd0ce9dd0000101/groups/53c25b67bb5187a2f5000812
    function sort(items){
      var temp;
      for(var i=0;i<items.length;i++) {
        for(var j=i+1;j<items.length;j++) {
          if(items[i] >items[j] ) {
            temp = items[i];
            items[i] = items[j];
            items[j] = temp;
          }
        }
      }
      return items;
    }
//#endregion


//#region 6014 uniq (UNIX style)
/* 6014 uniq (UNIX style) (https://www.codewars.com/kata/uniq-unix-style)
Description:
  Implement the uniq() function which behaves like the uniq command in UNIX. It takes as input an array and returns an array in which all duplicate elements following each other have been reduced to one instance.

  Example:
    var input = ['a','a','b','b','c','a','b','c'];
    uniq(input); // -> returns ['a','b','c','a','b','c']
*/

//My solution
    function uniq(a) {
      return a.filter((element,index) => element !==a[index+1] || !element );
    }

//Solution(s) I like(links):
//1) Best(7) and Clever(13) https://www.codewars.com/kata/reviews/5224a0ca906b0cd028000212/groups/52256869b2cdcc9dcf0003f2
    function uniq(a) {
      return a.filter(function(x,i){return i == 0 || !(a[i-1] == x);});
    }
//2) Clever(5) https://www.codewars.com/kata/reviews/5224a0ca906b0cd028000212/groups/56be7548d253216031000253
    const uniq = (xs) => xs.reduce( (xs, x) => xs.length === 0 || x !== xs[xs.length - 1] ? [...xs, x] : xs, []);
//4) Clever(4) https://www.codewars.com/kata/reviews/5224a0ca906b0cd028000212/groups/540621eef5d0fe803e000358
  function uniq(a) {
    var u = [];
    var temp = 'just burn in hell with your undefined test';
    for (i in a) {
      if (temp !== a[i]) {
        u.push(a[i]);
      }
    temp = a[i];
    }
    return u;
  }
//4) Clever(4) https://www.codewars.com/kata/reviews/5224a0ca906b0cd028000212/groups/560da4e98513e522cb000049
    function uniq(a) {
      return JSON.parse(JSON.stringify(a).replace(/(["\w]+)(,\1)*/g, '$1'));
    }
//#endregion

//#region 6015 Imperfect Network #1 (duplicate messages)
/* 6015 Imperfect Network #1 (duplicate messages) (https://www.codewars.com/kata/imperfect-network-number-1-duplicate-messages)
Description:
  You are given the outline of a network client. The network client as it is assumes that the network will never corrupt any data, will never lose any data, will always deliver data in the order it was sent, and will never duplicate any data.

  For the purposes of this Kata, assume that the network will never corrupt any data, will never lose any data, will always deliver data in the order it was sent, but that it may send duplicate data. Ensure that the callback function is not invoked for these duplicates.

  The data sent into the network client's send() method will always be a string. The data sent into the sendFunction must also be a string. That data will be received by the peer one or more times in this Kata.

  I will create two instances of your class: A and B. I will use A to send data to B and B to send data to A. Data sent from A to B may arrive at B more than once. Data sent from B to A may arrive more than once. If the test case says: "B sends three duplicates to A" that means that A sent some data to B and B received it three times.

  Here is an example of a perfect network that would use your network class:

    function PerfectNetwork(callbackA, callbackB) {
        var network = this;
        this.clientA = new NetworkClient(
            function (data) { network.clientB.recv(data); }, callbackA);
        this.clientB = new NetworkClient(
            function (data) { network.clientA.recv(data); }, callbackB);
    };

    var perfect = new PerfectNetwork(
        function (data) { console.log("CLIENT-A Got: " + data); },
        function (data) { console.log("CLIENT-B Got: " + data); }
    );

    perfect.clientA.send("abcd");
    perfect.clientA.send("wxyz");
    perfect.clientB.send("1234");
    perfect.clientA.send("EOF");
    This would output:

    CLIENT-B Got: abcd
    CLIENT-B Got: wxyz
    CLIENT-A Got: 1234
    CLIENT-B Got: EOF
    In this Kata, the naive client outline could very well produce the following output with a less-than-perfect network for that same sequence of send calls:

    CLIENT-B Got: abcd
    CLIENT-B Got: abcd
    CLIENT-B Got: wxyz
    CLIENT-A Got: 1234
    CLIENT-A Got: 1234
    CLIENT-B Got: EOF
    CLIENT-B Got: EOF
    CLIENT-B Got: EOF
*/

//My solution
    function NetworkClient (sendFunction, callback) {
      this.sendFunction = sendFunction;
      this.callback = callback;
      this.id = 0;
    }

    NetworkClient.prototype.send = function (data) {
      // Could wrap data with extra information to send
      this.sendFunction(JSON.stringify({data:data, id:++this.id}));
    };

    NetworkClient.prototype.recv = function (data) {
      // Could unpack data and validate
      let pack = JSON.parse(data);
      if(this.id !== pack.id){
        this.callback(pack.data);
        this.id=pack.id;
      }
    };


//Solution(s) I like(links):
//1) Best(8) and Clever(2) https://www.codewars.com/kata/reviews/52092a7cea2911840500002a/groups/54b42c7114d9229de1000dea
    function NetworkClient (sendFunction, callback) {
      this.sendFunction = sendFunction;
      this.callback = callback;
      this.msgNum = 0;
    }
    NetworkClient.prototype.send = function (data) {
      var packet = JSON.stringify({data:data, msgNum:++this.msgNum});
      this.sendFunction(packet);
    };
    NetworkClient.prototype.recv = function (packet) {
      packet = JSON.parse(packet);
      if (packet.msgNum != this.msgNum) {
        this.callback(packet.data);
        this.msgNum = packet.msgNum;
      }
    };
//2) Clever(4) https://www.codewars.com/kata/reviews/52092a7cea2911840500002a/groups/5620e1cdb3c7d7aee4000056
    function NetworkClient (sendFunction, callback) {
      this.sendFunction = sendFunction;
      this.callback = callback;
    }

    NetworkClient.prototype.send = function (data) {
      NetworkClient.prototype.sended = true;
      this.sendFunction(data);
    };

    NetworkClient.prototype.recv = function (data) {
      if (NetworkClient.prototype.sended) {
          NetworkClient.prototype.sended = false;
          this.callback(data);
      }
    };
//3) Best(4) https://www.codewars.com/kata/reviews/52092a7cea2911840500002a/groups/54d0a4af8a433d53da00000b
    function NetworkClient (sendFunction, callback) {
      this.sendFunction = sendFunction;
      this.callback = callback;
      this.sequence = 0;
      this.receiveSequence = -1;
    }

    NetworkClient.prototype.send = function (data) {
      this.sendFunction(JSON.stringify({payload: data, sequence: this.sequence++}));
    };

    NetworkClient.prototype.recv = function (data) {
      data = JSON.parse(data);
      if (data.sequence > this.receiveSequence) {
        this.receiveSequence = data.sequence;
        this.callback(data.payload);
      }
    };
//4) Clever(4) https://www.codewars.com/kata/reviews/52092a7cea2911840500002a/groups/5404c85929d3ef7a2b000cec
    function NetworkClient (sendFunction, callback) {
      this.sendFunction = sendFunction;
      this.callback = callback;
      this.counter = 0;
    }

    NetworkClient.prototype.send = function (data) {
      this.counter++;
      this.sendFunction(JSON.stringify({
        content: data,
        timestamp: Date.now() + this.counter
      }));
    };

    NetworkClient.prototype.recv = function (data) {
      data = JSON.parse(data);
      if(this.last && this.last === data.timestamp) return;
      this.last = data.timestamp;
      this.callback(data.content);
    };
//#endregion

//#region 6016 N-th Fibonacci
/* 6016 N-th Fibonacci (https://www.codewars.com/kata/n-th-fibonacci)
Description:
  I love Fibonacci numbers in general, but I must admit I love some more than others.
  I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
  For example:
      nthFibo(4) == 2

  Because 2 is the 4th number in the Fibonacci Sequence.
  For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

//My solution
    function nthFibo(n) {
      let a = 1;
      let b = 0;
      let temp;
      console.log(n);

      while (n > 1){
        temp = a;
        a = a + b;//n+1 Fibo number
        b = temp; //n Fibo number
        n--;
        console.log('a:' + a + ', b: ' + b + ', n:' + n);
      }

      return b;
    }



//Solution(s) I like(links):
//1)  Clever(7) https://www.codewars.com/kata/reviews/522551eee9abb932420004a3/groups/54e83a60050737c7450014a2
    function nthFibo(n) {
      return Math.round((1/Math.sqrt(5))*Math.pow((1+Math.sqrt(5))/2,n-1))
    }
//2) Clever(2) https://www.codewars.com/kata/reviews/522551eee9abb932420004a3/groups/559b4031dd1aa1ba550000ec
    function nthFibo(n) {
      var a = 1, b = 0;
      while(--n) a = [b, b += a][0];
      return b;
    }
//3) Clever(10) https://www.codewars.com/kata/reviews/522551eee9abb932420004a3/groups/52262ab1cac7545d2a0003ae
    function nthFibo(n) { //!!BAD Performance on large numbers
      return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
    }
//#endregion

//#region 6017 Pascal's Triangle
/* 6017 Pascal's Triangle (https://www.codewars.com/kata/pascals-triangle)
Description:
    Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle
    Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.
    For example:
      pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
*/

//My solution
    function pascalsTriangle(n) {
      //return a flat array representing the values of Pascal's Triangle to the n-th level
      let arr = [];
          arr[0]=[1];
      if(n>1) arr[1]=[1,1];

      for (let tier =2; tier<n;tier++){
          arr[tier]=[1]; // tier always begins with 1
          for(let col=1; col<tier; col++){
              arr[tier][col]=arr[tier-1][col]+arr[tier-1][col-1]; //sum of Nth ( beginning from 2nd) elem is sum of N and N-1 from previous tier
          }
          arr[tier].push(1); // tier always ends with 1
      }
      //concat all inner arrays
      return arr.join(',',(a,b) => a.concat(b));
      //same approach with reduce
      //return arr.reduce((a,b) => a.concat(b),[]);
    }


//Solution(s) I like(links):
//1)  Best(40) !! https://www.codewars.com/kata/reviews/5226eb41316b56c8d5000312/groups/5386e0fe4c45401ad9000e0c
    function pascalsTriangle(n) {
      var pascal = [];
      var idx = 0;

      for ( var i = 0; i < n; i++ ) {
        idx = pascal.length - i;
        for ( var j = 0; j < i+1; j++ ) {
          if ( j === 0 || j === i ) {
            pascal.push(1);
          } else {
            pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
          }
        }
      }

      return pascal;
    }
//2) Clever(35) and Best(11) https://www.codewars.com/kata/reviews/5226eb41316b56c8d5000312/groups/537e01b1bf6c94b57f000456
    function pascalsTriangle(n) {
      if (n === 1) {
        return [1];
      }
      var prev = pascalsTriangle(n - 1), len = prev.length;
      prev.push(1);
      for (var i = len - n + 1; i < len - 1; i ++) {
        prev.push(prev[i] + prev[i + 1]);
      }
      prev.push(1);
      return prev;
    }
//3) Clever(18) https://www.codewars.com/kata/reviews/5226eb41316b56c8d5000312/groups/55192cdccd82ffbdf500088c
    function f(n) {
      if(n<2) return 1;
      return n * f(n - 1);
    }

    function pascalsTriangle(n) {
    var r = [];
    for(var i = 0; i < n; i++)
      for(var e = 0; e <= i; e++)
        r.push( Math.round(f(i)/(f(e)*f(i - e))));
    return r;
    }
//4) Best(6) https://www.codewars.com/kata/reviews/5226eb41316b56c8d5000312/groups/555a637f74814ac18400014a
    function pascalsTriangle(n) {
      var arr = [1];
      --n;
      for(var i=0; i<n; ++i) {
        arr.push(1);
        for(var j=arr.length-2-i, jj=j+i; j<jj;) arr.push(arr[j] + arr[++j]);
        arr.push(1);
      }
      return arr;
    }
//5) Clever(25) https://www.codewars.com/kata/reviews/5226eb41316b56c8d5000312/groups/53860d2ec25c8a4743000eb3
//#endregion


//#region 6018 Convert string to camel case
/* 6018 Convert string to camel case (https://www.codewars.com/kata/convert-string-to-camel-case)
Description:
   Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
   Examples
      toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
      toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

//My solution
    function toCamelCase(str){
      //use regex - OR _ in split
      let str2=str.split(/-|_/).map( (el,i) => i!==0 ? capitalize(el) : el);
      return str2.join('');
    }

    function capitalize(s)
    {
        return s && s[0].toUpperCase() + s.slice(1); //check that s NOT undefined
    }

//Solution(s) I like(links):
//1) Best(117) and Clever(172) !!Comments https://www.codewars.com/kata/reviews/517ac19d203167a17e000003/groups/53fef64ad5679b33da001542
    function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
      });
    }
//2) Best(38) and Clever(137) !!Comments  https://www.codewars.com/kata/reviews/517ac19d203167a17e000003/groups/55cec7d68e58cbe04e00002c
    function toCamelCase(str){
      return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
    }
//3) Best(6) Comments https://www.codewars.com/kata/reviews/517ac19d203167a17e000003/groups/58547b40ebb06fa14b000cee
  function toCamelCase(str){
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
  }
//4) Best(6) Comment https://www.codewars.com/kata/reviews/517ac19d203167a17e000003/groups/58c93ae3b85ea08f32000dd3
    function toCamelCase(str){
      return str.replace(/([-_])(\w)/g, function(match,dash,letter) { return letter.toUpperCase() });
    }
//5) Clever(10) https://www.codewars.com/kata/reviews/517ac19d203167a17e000003/groups/54593a4dcbae2ac6bd000b14
    function toCamelCase(str) {
      return str.replace(/[_-][A-Za-z]/g, function(match) {return match[1].toUpperCase();});
    }
//#endregion


//#region 6019 bit "Wise" #1: XOR-cism
/* 6019 bit "Wise" #1: XOR-cism (https://www.codewars.com/kata/bit-wise-number-1-xor-cism/train/javascript)
Description:
  Javascript’s bitwise operators are probably the least used and least widely understood part of the language: In the domain of the web, where Javascript enjoys unrivaled supremacy, operating on the bits-and-bytes level is often abstracted away (perhaps thankfully). Despite this, there remain practical uses for the language’s bitwise operators both on the web (for performance reasons) and especially in the burgeoning field of physical computing (Arduino, RaspberryPi, etc.), where Javascript is being embedded in and interacting with things like sensor packages, shift registers and other electronic components that “speak binary”. In this series of Kata, we’ll familiarize ourselves with some of the “basic moves” of the JS bitwise operators.
  Exercise 1: XOR-cism
  In this Kata, you will be writing a function named "swapper" that should "swap" two integer values (a and b) and return them in an array in "swapped" order. Do your best to complete the kata without declaring any variables or functions and using only bitwise operators in the body of the 'swapper' function. There are some pre-loaded hints you can access if you need help doing it with the bitwise operators. Good luck.
      var x = swapper(0,1); //returns [1, 0]
      Test.expect(x[0] == 1);
      Test.expect(x[1] == 0);

      x = swapper(1,2);
      Test.expect(x[0] == 2);
      Test.expect(x[1] == 1);
*/

//My solution
    function swapper(a, b) {
      console.log(HINTS[0]);
      a = a ^ b; // a ^= b;
      b = a ^ b; // b ^= a;
      a = a ^ b;
      return [a, b]
    }

//Solution(s) I like(links):
//1) Best(3) https://www.codewars.com/kata/reviews/523878615b438c1c450003bd/groups/57a8985853ba331a7e00035e
    function swapper(a, b) {
      a = a^b;
      b = a^b; // a^b^b ==> a
      a = a^b; // a^b^a ==> b

      return [a, b];
    }
//2) Clever(3) https://www.codewars.com/kata/reviews/523878615b438c1c450003bd/groups/533d7aea67371568cd0014ca
    function swapper(a, b) {
      a = a^b^(b^=(a^b));
      return [a, b];
    }
//3) Clever(3)    https://www.codewars.com/kata/reviews/523878615b438c1c450003bd/groups/5885433465fc9c5e99001806
    swapper = (a, b) => [b, a]
//#endregion


//#region 6020 Complete Fibonacci Series
/* 6020 Complete Fibonacci Series (https://www.codewars.com/kata/complete-fibonacci-series)
Description:
  The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

  Example:
      fibonacci(4); // should return [0,1,1,2]
      fibonacci(-1); // should return []
*/

//My solution
    function fibonacci(n) {
      if(n<=0) return [];

      let fibArr = [0, 1]
      for (let i = 2; i < n; i++ ) {
        fibArr.push( fibArr[i - 1] + fibArr[i - 2] )
      }
      return fibArr;
    }



//Solution(s) I like(links):
//1)  Clever(26) Comment https://www.codewars.com/kata/reviews/5239f06d20eeab9deb00049e/groups/53a723963d87dd9660000d78
    function fibonacci(n) {
      if (n <= 0) return [];
      if (n == 1) return [0];
      if (n == 2) return [0,1];
      var res = fibonacci(n-1);
      res.push(res[res.length-1] + res[res.length-2]);
      return res;
  }
//2) Best(5) https://www.codewars.com/kata/reviews/5239f06d20eeab9deb00049e/groups/54730e174481cff8c3000aaa
    function fibonacci(n) {
      if (n > 0) {
        var results = [0]
        for (var _i = 1; _i <= n -1; _i += 1) {
          if (_i > 2) {
            results.push(results[_i - 1] + results[_i - 2]);
          } else {
            results.push(1);
          }
        }
        return results;
      } else {
        return [];
      }
    }
//3) Clever(8) Comment https://www.codewars.com/kata/reviews/5239f06d20eeab9deb00049e/groups/53876feb92a539f1250000a6
  function fibonacci(n) {
    return [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765].slice(0,n>0?n:0);
  }
//#endregion

//#region 6021 Array.diff
/* 6021 Array.diff (https://www.codewars.com/kata/array-dot-diff)
Description:
  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
  It should remove all values from list a, which are present in list b.
      array_diff([1,2],[1]) == [2]
  If a value is present in b, all of its occurrences must be removed from the other:

      array_diff([1,2,2,2,3],[2]) == [1,3]
*/

//My solution
    function array_diff(a, b) {
         //ES7 Include method
      return  a.filter(x => !b.includes(x));
    }

//Solution(s) I like(links):
//1) Best(292) And Clever(191) !!Comment https://www.codewars.com/kata/reviews/523f5d21c841566fde00000c/groups/52403dca0f1d9c4fe100017b
    function array_diff(a, b) {
      return a.filter(function(x) { return b.indexOf(x) == -1; });
    }
//2) Best(25) https://www.codewars.com/kata/reviews/523f5d21c841566fde00000c/groups/54d5a7362a5e54cf97000a09
    function array_diff(a, b) {

      var arr = new Array();

      for(var i = 0;i<a.length;i++){
          if(b.indexOf(a[i])<0){
              arr.push(a[i]);
          }
      }

      return arr;
    }
//3) Best(15) & Clever(9) https://www.codewars.com/kata/reviews/523f5d21c841566fde00000c/groups/58a8cdf460bde0d33b00144a
    function array_diff(a, b) {
      b = new Set(b)
      return a.filter(v => !b.has(v))
      //return a.map(x => !set.has(x) ? x : null).filter(x => x);
    }
//#endregion


//#region 6022 bit "Wise" #2: SHIFT-iness
/* 6022 bit "Wise" #2: SHIFT-iness (https://www.codewars.com/kata/bit-wise-number-2-shift-iness)
Description:
  Exercise 2: SHIFT-iness
  One of the tricky things about (x).toString(2) (where x is an integer, which reports the number back in binary) is that it doesn't really tell us the "whole story" about how JS is handling the bits for any given number. You learn this very quickly when you apply the "~" bitwise operator to an integer.
  For Example:

    console.log((5).toString(2));
  logs "101" to the console...which is what you expect, right?
  So "flipping" the bits on the number with the "~" operator should yield 010 - or 2, right? Let's see:
    console.log(~5);
    -6!? -6?! WTF?

  Well, there's a reason for that. The binary representation of numbers in JS is handled in the "Two's Complement" system...which is just a fancy way of saying that for any given set of bits, the first bit represents the sign (0 for positive, 1 for negative) of the number and the rest of the bits represent the "absolute value" of the number according to the following simple formula: A) For positive numbers and 0, the value tells how "far" from 0 the number is... i.e. 10 in binary (2 in decimal) means "2 above 0"...so for a 3-bit number in Two's Complement, the number 2 (decimal) would be represented as: "010". B) For negative numbers, how far above the smallest possible value that can be represented with the number of bits available...e.g. with three bits, the smallest possible number we can represent is -4...so "101" (binary) is like saying "01 more than -4"...or -3.

  So in the example above, when we "flipped" the bits of the number 5, there was the extra "sign bit" on the front that got flipped as well.. so what we thought was "101" was actually "0101" and when we flipped the bits, we got "1010" - i.e. "Two more than the smallest number possible in this many bits" == "Two more than -8" == "-6".

  Here are all the possible 2's complement numbers in a 3-bit system: (binary == decimal)
    011 == 3
    010 == 2
    001 == 1
    000 == 0
    111 == -1
    110 == -2
    101 == -3
    100 == -4

  Now the problem; Extend the Number prototype with a function called "twos" that accepts one parameter (n), and when called, returns the two's-complement representation of the number in "n" bits in a string.e.g.

    (-2).twos(3) == "110";
    (8).twos(5) == "01000";
    (-8).twos(5) == "11000";
    (-16).twos(5) == "10000";
*/

//My solution
    //(-2).twos(3) == "110"; // this.valueOf()=-2, n=3
    Number.prototype.twos = function(n) {
      let bit = this.valueOf() <= 0 ? 1 : 0;
      let num = Math.abs(this.valueOf()).toString(2);

      while(num.length < n) num = bit+num;

      return num;
    }



//Solution(s) I like(links):
//1) Best(4) And Clever(38) Comment https://www.codewars.com/kata/reviews/52405e48ac30410dfc000364/groups/53c1775281c77fb7370000ff
    Number.prototype.twos = function(n) {
      var bits = (this & ((1 << n) - 1)).toString(2);
      return new Array(n - bits.length + 1).join('0') + bits;
    }
//2) Best(4) And Clever(26) !!Comment https://www.codewars.com/kata/reviews/52405e48ac30410dfc000364/groups/54fe5a40c824953bb0000037
    Number.prototype.twos = function(m){
      return (this+(2<<(m-1))).toString(2).substr(-m)
    }
//3) Clever(6) https://www.codewars.com/kata/reviews/52405e48ac30410dfc000364/groups/53fbf5a94470cb25eb000335
    Number.prototype.twos = function(n) {
      return (this + (1 << n)).toString(2).slice(-n)
    }
//3) Clever(4) https://www.codewars.com/kata/reviews/52405e48ac30410dfc000364/groups/538b410c0ac003bf9a0007f5
    Number.prototype.twos = function(n) {
      if (this < 0)
        return (Math.pow(2,n) + this).toString(2);
      else{
        var tos = this.toString(2);
        return '0' + Array(n - tos.length).join("0")  + tos;
      }
    }

//#endregion

//#region 6023 Custom Setters and Getters
/* 6023 Custom Setters and Getters (https://www.codewars.com/kata/custom-setters-and-getters)
Description:
  Let's take a look at an interesting feature of JS: custom Getters and Setters for objects.
  Skimming over this may help you prepare for this kata: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects?redirectlocale=en-US&redirectslug=JavaScript%2FGuide%2FWorking_with_Objects#Defining_Getters_and_Setters (thanks to @contablebrew for pointing out the more "forward-compatible" approach to this.)
  The object of this exercise will be to provide a constructor named "Archiver" that creates a "self-archiving" object with respect to its "temperature" property, but otherwise looks and acts just like a normal JS object. Each time the "temperature" property is assigned, the object should add a log entry to an array (the "archive") that it returns via a "getArchive" function. The log entry should be formed as such: {date: //the Date when the "temperature" property was assigned, val: //the value that was written to the "temperature" property.} . The "date" property of the log entry should be a valid JS Date object.
  so e.g.:

    //new Date() == '2013-09-24...Z'
    var arc = new Archiver();
    arc.temperature = 33;
    arc.temperature = 28;
    arc.temperature = 21;
    arc.getArchive() // == [{date: 2013-09-24..., val:33},{date: 2013-09-24..., val:28},{date: 2013-09-24..., val:21}]
*/

//My solution
    //TODO: implement "Archiver" as a self-archiving object
    //...ensure that when "temperature" property is
    //...set, that the array returned by getArchive
    //...gets a log entry in the form of {date:,val:}
    class Archiver {
      constructor() {
        this.archive = [];
        this.temp = null;
      }

      set temperature(t) {
        this.temp = t;
        this.archive.push({date: new Date(), val: t});
      }

      get temperature() {
        return this.temp;
      }

      getArchive() {
        return this.archive;
      }
    }




//Solution(s) I like(links):
//1) Best(25) !!Comment https://www.codewars.com/kata/reviews/5241060ff2471a5d7600025d/groups/5243809095c2a6c74900036e
    function Archiver() {
      var temperature = null;
      var archive = [];
      Object.defineProperty(this, 'temperature', {
        get: function() { return temperature; },
        set: function(x) {
          temperature = x;
          archive.push({
            date: new Date(),
            val: x
          });
        }
      });

      this.getArchive = function() {return archive;};
    }
//2) Best(7) Comment https://www.codewars.com/kata/reviews/5241060ff2471a5d7600025d/groups/537e5ee2066950ea4e000044
    function Archiver() {
      var temperature = null;
      var archive = [];

      this.__defineSetter__("temperature", function(val){
        archive.push({date: new Date(), val: val});
        temperature = val;
      });
      this.__defineGetter__("temperature", function(val){
        return temperature;
      });

      this.getArchive = function() {return archive;};
    }
//3) Best(6) https://www.codewars.com/kata/reviews/5241060ff2471a5d7600025d/groups/5398e325c729da14560014b9
    function Archiver() {
      var archive = [];
      this.getArchive = function() {
        return archive;
      };
    }

    Archiver.prototype = {
      set temperature(v) {
        this.temp = v;
        this.getArchive().push({ date: new Date(), val: v });
      },
      get temperature() {
        return this.temp;
      }
    };
//4) Clever(2) https://www.codewars.com/kata/reviews/5241060ff2471a5d7600025d/groups/53d9a1984a5168bd65000088
    function Archiver() {
      this.temp = null;
      this.archive = [];
      //TODO: implement "Archiver" as a self-archiving object
      //...ensure that when "temperature" property is
      //...set, that the array returned by getArchive
      //...gets a log entry in the form of {date:,val:}
      this.getArchive = function() {return this.archive;};
      this.setArchive = function(d,t) {
        this.archive.push({date: d, val:t});
      }
    }
    Object.defineProperty(Archiver.prototype, "temperature", {
    get: function() { return this.temp },
    set: function(t) {
      var d = new Date();
      this.temp = t;
      this.setArchive(d,t);
    }
    });

//#endregion

//#region 6024 Extract the IDs from the data set
/* 6024 Extract the IDs from the data set (https://www.codewars.com/kata/extract-the-ids-from-the-data-set)
Description:
  Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

    var data = {
      id: 1,
      items: [
        {id: 2},
        {id: 3, items: [
          {id: 4},
          {id: 5}
        ]}
      ]
    }

    extractIds(data) // should return [1,2,3,4,5]

  The method should be able to handle the case of empty data being passed in.
  Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/

//My solution
//Stupid because Codewars glitched a lot during this kata
    function extractIds(data){
      let result = [];
      getStupidIds(data,result);
      return result;
    }

    function getStupidIds(data, result){
      if(data.id) {
          result.push(data.id);
      }
      if (data.items) {
        data.items.forEach(v => getStupidIds(v, result));
      }

    }

//Solution(s) I like(links):
//1) Best(8) https://www.codewars.com/kata/reviews/516f30257c907a79f20003c4/groups/57be0dd9160ce938ae000299
    function extractIds(data) {
      let ids  = []
      if ('id' in data) ids.push(data.id);
      if ('items' in data) data.items.forEach(item => ids = ids.concat(extractIds(item)));
      return ids;
    }
//2) Best(3) https://www.codewars.com/kata/reviews/516f30257c907a79f20003c4/groups/55e39d196861f50fca0000d9
  function extractIds(data, ids = []){
    let search = (item) => {
      for(var key in item){
        if(key == 'id')
          ids.push(item[key]);
        if(typeof item[key] === 'object')
          search(item[key]);
      }
    };
    return search(data), ids;
  }
//3) Clever(27) https://www.codewars.com/kata/reviews/516f30257c907a79f20003c4/groups/53d89a1322fd987a3700009d
    function extractIds(data){
      return [].concat.apply([], Object.keys(data).map(function(item) {
        return item === 'id' ? data[item] : extractIds(data[item]);
      }));
    }
//4) Clever(9) Comment https://www.codewars.com/kata/reviews/516f30257c907a79f20003c4/groups/57eca62af670e9bc7900158c
    function extractIds(data){
      return (JSON.stringify(data).match(/\d+/g)||[]).map(x=>+x)
    }
//5) Clever(7) https://www.codewars.com/kata/reviews/516f30257c907a79f20003c4/groups/538cef206ea5f6de1c000dc0
    function extractIds(data){
      return [].concat.apply([],data.id&&[data.id].concat((data.items||[]).map(extractIds))||[]);
    }
//#endregion

//#region 6025 Object Search and Replace
/* 6025 Object Search and Replace (https://www.codewars.com/kata/object-search-and-replace)
Description:
  Given an object with an arbitrary number of properties, any number of which may be objects or arrays, replace all values which are strictly equal to the string: "dynamic" with a given string occurring anywhere in that object or a child object or array.
  Your solution should be recursive.
  Your solution should be "in place" meaning it return the original object, not a copy.
  Your solution should also include some type safety. If a value that isn't an object or array is passed as the first argument, it should just return whatever was passed in.
*/

//My solution
    function solution (data, replace) {
      //Replace all values of "dynamic" with replace
      for(let key in data) {
          if(typeof data[key] === 'object') {
            solution(data[key], replace);
          }
          else if (data[key] === 'dynamic') {
            data[key] = replace;
          }
      }
      return data;
    }

//Solution(s) I like(links):
//1) Best(4) https://www.codewars.com/kata/reviews/5244b0588978473f9500002e/groups/543d567cf10e604bc90010bd
    function solution(data, replace) {
      if (typeof data == 'object') {
        for (var p in data) {
          data[p] = solution(data[p], replace);
        }
      } else if (data == 'dynamic') {
        return replace;
      }

      return data;
    }
//2) Best(2) https://www.codewars.com/kata/reviews/5244b0588978473f9500002e/groups/5668b2bd650627ab5800002f
    function solution(data, replace) {
      let isValid = n => Array.isArray(n) || Object.prototype.toString.call(data) === '[object Object]';
      if (!isValid(data)) return data;
      for (let prop in data) {
        if (data[prop] === 'dynamic') data[prop] = replace;
        if (isValid(data)) solution(data[prop], replace);
      }
      return data;
    }
//3) Best(1) https://www.codewars.com/kata/reviews/5244b0588978473f9500002e/groups/5bacc888484fcd462b001d42
    function solution(data,replace) {
      if (!data || typeof data != 'object') return data;
      Object.keys(data).forEach(k => {
          if (data[k] === 'dynamic') data[k] = replace;
          else if (typeof data == 'object') solution(data[k],replace)
      });
      return data;
    }
//#endregion

//#region 6026 Adjacent pairs in a string
/* 6026 Adjacent pairs in a string (https://www.codewars.com/kata/adjacent-pairs-in-a-string)
Description:
  You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?
  As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of the sentence.
  Write a function countAdjacentPairs that counts the number of adjacent pairs in a string. It should be case-insenstive. A word in this kata is a sequence of non-whitespace characters enclosed by whitespace, so the string "dog dog." contains the two words "dog" and "dog.", which differ. The occurence of two or more equal words next after each other count as one.

  Example:

    countAdjacentPairs "dog cat"       == 0
    countAdjacentPairs "dog dog cat"   == 1
    countAdjacentPairs "apple dog cat" == 0
    countAdjacentPairs "pineapple apple dog cat" == 0
    countAdjacentPairs "apple     apple dog cat" == 1
    countAdjacentPairs "apple dog apple dog cat" == 0
    countAdjacentPairs "dog dog dog dog dog dog" == 1
    countAdjacentPairs "dog dog dog dog cat cat" == 2
    countAdjacentPairs "cat cat dog dog cat cat" == 3
    //returns 0
    countAdjacentPairs('')

    // returns 1
    countAdjacentPairs('cat dog dog')

    // returns 1 (The first pair has been matched, and will be ignored from then on).
    countAdjacentPairs('dog dog dog')

    // returns 2
    countAdjacentPairs('cat cat dog dog cat')
*/


//My solution
    function countAdjacentPairs(searchString) {
    //   let words = searchString.toLowerCase().split(' ');//
        let words = searchString.split(' ').map(w => w.toLowerCase());

        if (words.length < 2) return 0;

        //filter only values where next 1 equal to previous one and delete duplicates via Set
        let count = new Set(words.filter((value,i) => words[i+1] === value));

        return [...count].length;
    }

//Solution(s) I like(links):
//1) Best(3) https://www.codewars.com/kata/reviews/5245a9138ca049e9a10007bb/groups/537e3908537f386c85000076
    function countAdjacentPairs(searchString) {
      var adjacent = 0;
      var remember = undefined;
      searchString.split(" ").forEach(function(el) {
        if((remember && remember.toLowerCase()) === el.toLowerCase()) {
          adjacent++;
          remember = undefined;
        }
        else {
          remember = el;
        }
      });
      return adjacent;
    }
//2) Clever(28) Comment https://www.codewars.com/kata/reviews/5245a9138ca049e9a10007bb/groups/539c60e9b9de00f8500003fb
    function countAdjacentPairs(searchString) {
    //countAdjacentPairs(' test testing ') should return 0, but this solution incorrectly returns 1.    And extra \b after the \1 should fix this
      var result = searchString.match(/(\b\w+)\s\1/ig);
      return result == null ? 0 : result.length;
    }
//3) Best(2) https://www.codewars.com/kata/reviews/5245a9138ca049e9a10007bb/groups/53af023861023fa2e700063c
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    function countAdjacentPairs(searchString) {
    var pairs = searchString.toLowerCase().match(/\b(\w+)\b \b\1\b/g) || [];
    return pairs.filter(onlyUnique).length;
    }
//4) Clever(3) https://www.codewars.com/kata/reviews/5245a9138ca049e9a10007bb/groups/5380eb320fcd7c6b0e000cc2
    function countAdjacentPairs(searchString) {
      var m = (' '+searchString+' ').match(/ (\w+) \1 /ig);
      return m ? m.length : 0;
    }
//5) Clever(3) https://www.codewars.com/kata/reviews/5245a9138ca049e9a10007bb/groups/525b1f27eb636f24c600008f
    function countAdjacentPairs(searchString) {
      return (searchString.match(/\b(\w+)\s\1\b/ig) || []).length;
    }
//#endregion
