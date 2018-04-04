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

//#region 5003 Extract the domain name from a URL
/*5003 Extract the domain name from a URL (https://www.codewars.com/kata/extract-the-domain-name-from-a-url-1/javascriptn)
Description:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

    domainName("http://github.com/carbonfive/raygun") == "github"
    domainName("http://www.zombie-bites.com") == "zombie-bites"
    domainName("https://www.cnet.com") == "cnet"
*/

//My solution
    function domainName(url){
      var urlNew = url.replace('www.','').replace('http://','').replace('https://','');
      //urlNew = urlNew.substring(urlNew.indexOf('//') > 0 ? urlNew.indexOf('//') +2 : 0);
      return urlNew.substring(0,urlNew.indexOf("."));
    }

//Solution(s) I like(links):
//1) BEST(34) AND CLEVER(43) https://www.codewars.com/kata/reviews/553a8bb91e0399d6f70001b9/groups/553d374436a4caa623000079
    function domainName(url){ //This looks like it will catch subdomains. Nice.
      return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
    }
//2) BEST(17) AND CLEVER(28) https://www.codewars.com/kata/reviews/553a8bb91e0399d6f70001b9/groups/556601041d41686b3800008e
    function domainName(url){
      return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
    }
//3) Clever(15) https://www.codewars.com/kata/reviews/553a8bb91e0399d6f70001b9/groups/597889c2fbf63d8e4a000070
    function domainName(url){
      return url.replace(/.+\/\/|www.|\..+/g, '')
    }
    // This is my favourite solution here. The first 2 parts are getting rid of the prefix (http:// or www. or both) the last bit is taking care of anything between a dot(.) till the end of the string. Mind that by the time it gets to that last part, www. does not exist anymore so the 1st dot(.) it sees is after the domain name. I was at first surprised that the | (OR) works here, but thanks to the g flag it repeats the loop one index at a time untill gets to the end of the string.
//4) https://www.codewars.com/kata/reviews/553a8bb91e0399d6f70001b9/groups/577b4fc4ae2807af81000030
    function domainName(url){
      return url.replace("www.","").match(/[\w-]+(?=\.)/)[0];
    }
//5) https://www.codewars.com/kata/reviews/553a8bb91e0399d6f70001b9/groups/5aa8da8e6fbca5e15c004ce9
    const domainName = url => url
      .match(/^(?:https?:\/\/)?(.+?)(?:\/.+)?$/)[1]
      .replace(/^www\./, '')
      .split('.')
      .shift()
 //#endregion


//#region 5004 Wrapped Function
/* 5004 Wrapped Function (https://www.codewars.com/kata/wrapped-function)
Description:
Create a function method that allow you to wrap an existing function. The method signature would look something like this:
    function speak(name){
      return "Hello " + name;
    }

    speak = speak.wrap(function(original, yourName, myName){
      greeting = original(yourName);
      return greeting + ", my name is " + myName;
    })

    var greeting = speak("Mary", "Kate");
*/

//My solution
// extend the Function object to include a wrap instance method
    Function.prototype.wrap = (function(original, yourName, myName){
        var that = this;

      return function(yourName, myName){
        return original(that, yourName, myName);
      };
    });

//Solution(s) I like(links):
//1) BEST(30) AND CLEVER(83) https://www.codewars.com/kata/reviews/516f301e7c907a79f2000027/groups/53aa6171fa11a29ba3000a39
    Function.prototype.wrap = function(callback) {
      return callback.bind(this, this);
    }
//2) Best(15) https://www.codewars.com/kata/reviews/516f301e7c907a79f2000027/groups/560181dfcf80117dcd00006c
    Function.prototype.wrap = function (f) {
      return (...args) => f(this, ...args)
    };
//3) https://www.codewars.com/kata/reviews/516f301e7c907a79f2000027/groups/536a42cb56eb454f72000a15
    Function.prototype.wrap = function(callback) {
      var that = this;
      return function(yn, mn) {
        callback(that, yn, mn);
      }
    };

//#endregion
