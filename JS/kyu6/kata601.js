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
