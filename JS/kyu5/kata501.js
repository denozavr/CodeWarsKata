//#region 5001 flatten()
/*5001 flatten() (https://www.codewars.com/kata/flatten/javascript)
Description:
For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

    flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
    flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
*/

//My solution
    // create your flatten method here
    function flatten(...a) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      return [...a].join(",").split(",");
    }

//Solution(s) I like(links):
//1) BEST(12) AND CLEVER(40 votes) https://www.codewars.com/kata/reviews/516f30217c907a79f20001a1/groups/5423035fb9d44dd13d00065d
    function flatten(){
      return [].slice.call(arguments).reduce(function(a,b){
        return a.concat(Array.isArray(b) ? flatten.apply(null,b) : b);
      },[]);
    }
//2) CLever(7) https://www.codewars.com/kata/reviews/516f30217c907a79f20001a1/groups/53906f50158ac567bf0006fb
    var flatten = function (s) {
      return [].slice.call(arguments).toString().split(',');
    };
//3) CLever(7) https://www.codewars.com/kata/reviews/516f30217c907a79f20001a1/groups/53f7b12c0b04a075db00122a
    function flatten(){ return JSON.parse("["+JSON.stringify( [].slice.call(arguments) ).replace(/[\[\]]/g, "" )+"]") }
//4) https://www.codewars.com/kata/reviews/516f30217c907a79f20001a1/groups/582ec188a465cfcf5300005d
    var flatten=function(...arr){
      return arr.toString().split(",");
    }

//#endregion
