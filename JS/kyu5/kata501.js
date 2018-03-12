//#region 5001 flatten()
/*5001 flatten() (https://www.codewars.com/kata/flatten/javascript)
Description:
For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

    flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
    flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
*/

//My solution
    //https://davidwalsh.name/spread-operator (see comments also)
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


//#region 5002 RGB To Hex Conversion
/*5002 RGB To Hex Conversion (https://www.codewars.com/kata/rgb-to-hex-conversion)
Description:
  The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

  The following are examples of expected output values:
    rgb(255, 255, 255) // returns FFFFFF
    rgb(255, 255, 300) // returns FFFFFF
    rgb(0,0,0) // returns 000000
    rgb(148, 0, 211) // returns 9400D3
*/

//My solution
    function rgb(...rgb){ //rest parameters ES6
      let hex = "";
      rgb.forEach(function(entry) {
          hex+= entry<=0 ? '00' :
                entry>=255 ? 'FF' : entry.toString(16).toUpperCase();
      });
      return hex;
    }

//Solution(s) I like(links):
//1) BEST(104) AND CLEVER(65) https://www.codewars.com/kata/reviews/516f30207c907a79f20000e6/groups/53aab4f85f1361277b000ddf
    function rgb(r, g, b){
      return toHex(r)+toHex(g)+toHex(b);
    }

    function toHex(d) {
        if(d < 0 ) {return "00";}
        if(d > 255 ) {return "FF";}
        return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
    }
//2) BEST(22) AND CLEVER(48) https://www.codewars.com/kata/reviews/516f30207c907a79f20000e6/groups/51cc24d0d6fdd1fc3c0004ac
    function rgb(r, g, b){
      return [r,g,b].map(function(x) {
        return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
      }).join('').toUpperCase();
    }
//3) Clever(55) https://www.codewars.com/kata/reviews/516f30207c907a79f20000e6/groups/51dbbf18191c27b6a1000012
  function rgb(r, g, b) {
    return [].slice.call(arguments).map(function (v) {
      var ret = Math.max(0, Math.min(255, v)).toString(16).toUpperCase();
      return (ret.length<2 ? '0' : '') + ret;
    }).join('');
  }
//4) https://www.codewars.com/kata/reviews/516f30207c907a79f20000e6/groups/5aa657624eff740a770010f3
    rgb = (r, g, b) => [r,g,b].map(el => el > 255 ? 255 : el < 0 ? 0 : el)
                              .map(el => el.toString(16).toUpperCase())
                              .map(el => el === "0" ? "00" : el)
                              .join('');
//#endregion
