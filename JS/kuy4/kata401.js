//#region 4001 Name Your Space
/*4001 Name Your Space (https://www.codewars.com/kata/name-your-space/javascript)
Description:
  Finish the namespace function so that it sets or gets the value at the path specified. The first argument should be the root object that the path belongs to. The 2nd argument is the path itself and the 3rd optional argument is the value to set at the path.

  If a value is provided then the path will be set to that value. Any objects not present within the path will be created automatically in order for the path to be successfully set.
      stuff = {}
      namespace(stuff, 'moreStuff.name', 'the stuff')
      # results in {moreStuff: {name: 'the stuff'}}
  If no value is provided the the function will return the value at the path given. If the path is not valid/present then undefined will be returned.
      namespace(stuff, 'moreStuff.name') # returns 'the stuff'
      namesace(stuff, 'otherStuff.id') # returns undefined
*/

//My solution
    function namespace(root, path, value){
      path = path.split('.');
      var rootPath = root;

      path.forEach(function(item, index){
      if(!rootPath[item]) rootPath[item] = {}; //if undefined(i.e. FALSE) then {}

      if(index === path.length-1 && value) rootPath[item] = value;

      rootPath = rootPath[item];
      });
    }

//Solution(s) I like(links):
//1) BEST(9) AND CLEVER(1) https://www.codewars.com/kata/reviews/516f30257c907a79f20003da/groups/55254cf0f650304a6b000b18
    function namespace (root, path, value) {
      var fn = arguments.length < 3 ? get : set;

      return fn.apply(null, arguments);
    }

    function get (root, path) {
      return path.split(".").reduce(function (root, piece) {
        return root && root[piece];
      }, root);
    }

    function set (root, path, value) {
      var split = path.split(".")
        , last = split.pop()
        , nest;

      nest = split.reduce(function (root, piece) {
        return root[piece] || (root[piece] = {});
      }, root);

      return nest[last] = value;
    }
//2) CLever(24) https://www.codewars.com/kata/reviews/516f30257c907a79f20003da/groups/55254cf0f650304a6b000b18
    function namespace(root, path, value){
      return path.split('.').reduce(function(prev, key, i, arr) {
        if (i == arr.length - 1)
          return value ? (prev[key] = value) : prev[key];
        return (prev[key] = {});
      }, root);
    }

//#endregion



//#region 4002 Strip Url Params
/*4002 Strip Url Params (https://www.codewars.com/kata/strip-url-params)
Description:
  Complete the method so that it does the following:
  Removes any duplicate query string parameters from the url
  Removes any query string parameters specified within the 2nd argument (optional array)
  Examples:
    stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
    stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
    stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
*/

//My solution
  function stripUrlParams(url, paramsToStrip = []) {
    if(url.indexOf('?')<0) return url; //if no params just return site URL

    // let site = url.substr(0, url.indexOf('?'));
    // let params = url.substr(url.indexOf('?')+1).split('&');
    let [site, params] = url.split('?'); //use ES6 decompostion
    params=params.split('&');

    let usedParams=[]; //way to find duplicates in params
    let returnParam=[];

    params.forEach(function (item, index) { //check that letter not in IGNORE list and not in DUPLICATE list
        if (!paramsToStrip.includes(item[0]) && !usedParams.includes(item[0])) {
            usedParams.push(item[0]);
            returnParam.push(item);
        }
      });

    return site + '?' + returnParam.join('&');
  }

//Solution(s) I like(links):
//1) BEST(19) AND CLEVER(0) https://www.codewars.com/kata/reviews/516f30297c907a79f2000619/groups/55ca3f999ef5579d0c0000ff
    function stripUrlParams(url, paramsToStrip) {
      var domain = url.split('?')[0];
      var query = url.split('?')[1];
      var obj = {};
      var pairKey;
      var pairValue;
      var newQueryStr;

      if (!query) return domain;

      query.split('&').forEach(function(pair) {
        pairKey = pair.split('=')[0];
        pairValue = pair.split('=')[1];
        if (paramsToStrip ? paramsToStrip.some(function(param) {
            return param === pairKey
          }) : null || obj.hasOwnProperty(pairKey)) return;
        obj[pairKey] = pairValue;
      });

      newQueryStr = Object.keys(obj).map(function(key) {
        return key + '=' + obj[key];
      }).join('&');

      return domain + (newQueryStr ? '?' + newQueryStr : '');
    }
//2)BEST(14) AND CLEVER(127) https://www.codewars.com/kata/reviews/516f30297c907a79f2000619/groups/54d6073f3a742a42e1000eb8
    function stripUrlParams(url, paramsToStrip){
      return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
        return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
      });
    }
//3)BEST(7) https://www.codewars.com/kata/reviews/516f30297c907a79f2000619/groups/582f1daafd25e94208000216
    function stripUrlParams(url, paramsToStrip = []) {
      var [host, query] = url.split('?')
      var params
      var resultQuery

      if (!query) return host

      params = query
                .split('&')
                .map(param => param.split('='))

      resultQuery = params
        .filter((param, inx) => {
          return !params.slice(0, inx).some(prev => prev[0] == param[0])
        })
        .filter(param => !paramsToStrip.includes(param[0]))
        .map(param => param.join('='))

      return `${host}?${resultQuery.join('&')}`
    }
//#endregion


//#region 4003 Roman Numerals Decoder
/* 4003 Roman Numerals Decoder (https://www.codewars.com/kata/roman-numerals-decoder/javascript)
Description:
  Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

  Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

    Example:

    solution('XXI'); // should return 21
    Help:
    Symbol    Value
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1,000
*/

//My solution
    function solution(roman){
      let result = 0;
      const RNUMS = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };

      for(let i=0; i<roman.length; i++){
        if ( RNUMS[roman[i]] >= RNUMS[roman[i+1]] || i===roman.length-1) {
          result += RNUMS[roman[i]] }
        else {
          result += RNUMS[roman[i+1]] - RNUMS[roman[i]];
          i++; //need to increase i, otherwise 2nd number will be added to result
          //for example IV would add 4 and then 5 = 9, without increasing i
        }

      }
      return result;
    }

//Solution(s) I like(links):
//1) BEST(15) AND CLEVER(46) https://www.codewars.com/kata/reviews/51b6249c4612257ac0000008/groups/53c9b2069bbf4c575f0001d5
    function solution(roman){
      var rom ={ "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
      return roman.split('').reverse().reduce(
          function(dec,c,i,rr){  //rr in the reducing function is a copy of the reversed-splitted-roman value, then rr[i-1] returns just previous element in this array. So rom[rr[i-1]] returns decimal value of this "previous element" ... ||0 OR 0 if such an element doesn't exist.
              c=rom[c];
              i=rom[rr[i-1]]||0;
              return dec + (i<=c? c: -c) }
          ,0
      )
    }
//2) Clever(54) https://www.codewars.com/kata/reviews/51b6249c4612257ac0000008/groups/586bf19e097ae01626002770
    function solution(roman){
      var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

      return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
    }
//3) Clever(34) https://www.codewars.com/kata/reviews/51b6249c4612257ac0000008/groups/56f81cc83b164c683b000eb6
    function solution(roman) {
      var value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
      return roman.split('').map( d => value[d] ).reduce( (s,v,i,o) => s + ( (o[i+1] > v) ? -v : v ), 0 );
    }
//4) Clever(16) https://www.codewars.com/kata/reviews/51b6249c4612257ac0000008/groups/53e4acbb58d9beba750007cf
    function solution(roman){
      rez = 0;
      minus = {'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900};
      plus = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
      roman = roman.replace(/(IV)|(IX)|(XL)|(XC)|(CD)|(CM)/g, function (x) { rez += minus[x]; return ''; });
      roman.replace(/(I)|(V)|(X)|(L)|(C)|(D)|(M)/g, function (x) { rez += plus[x] });
      return rez
    }
//#endregion


//#region 4004 Roman Numerals Encoder
/* 4004 Roman Numerals Encoder (https://www.codewars.com/kata/roman-numerals-encoder/javascript)
Description:
  Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

  Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

  Example:

  solution(1000); // should return 'M'
  Help:

  Symbol    Value
  I          1
  V          5
  X          10
  L          50
  C          100
  D          500
  M          1,000
  Remember that there can't be more than 3 identical symbols in a row.
*/

//My solution
    function solution(number){
      var convert = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

      let result = '';
      for (let key in convert) {
        let times = Math.floor(number / convert[key]); // how many times Roman number occur in Arabian number
        result += key.repeat(times); // if >0 add it so many times in result
        number -= convert[key] * times; // substract what used in result from number
      }
      return result;

    }

//Solution(s) I like(links):
//1) BEST(23) AND CLEVER(36) https://www.codewars.com/kata/reviews/51b62bf7a9c58071c6000020/groups/53d671eb83db2702b7000c44
    function solution(number){
      return [
        { threshold: 1000, char: 'M'},
        { threshold: 900,  char: 'CM'},
        { threshold: 500,  char: 'D'},
        { threshold: 400,  char: 'CD'},
        { threshold: 100,  char: 'C'},
        { threshold: 90,   char: 'XC'},
        { threshold: 50,   char: 'L'},
        { threshold: 40,   char: 'XL'},
        { threshold: 10,   char: 'X'},
        { threshold: 9,    char: 'IX'},
        { threshold: 5,    char: 'V'},
        { threshold: 4,    char: 'IV'},
        { threshold: 1,    char: 'I'}
      ].reduce(function(prev, curr, idx, arr)
      {
        while(number >= curr.threshold)
        {
          prev += curr.char;
          number -= curr.threshold;
        }

        return prev;
      }, '');
    }
//2) Clever (153) https://www.codewars.com/kata/reviews/51b62bf7a9c58071c6000020/groups/53870848ee24bf0206001047
    function solution(number){
      // convert the number to a roman numeral
    var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

    var ans = '';
    while(number>0){
        for(a in roman){
            if(roman[a]<=number){ ans += a; number-=roman[a]; break;}

        }
    }
    return ans;
    }
//3)Clever(9) https://www.codewars.com/kata/reviews/51b62bf7a9c58071c6000020/groups/53cda73049c4ca7b5600029c
    function solution(number)
    {
      var result   = '',
          decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

      decimals.map(function (value, index) {
        while (number >= value) {
          result += roman[index];
          number -= value;
        }
      });

      return result;
    }
//#endregion


//#region 4005 Roman Numerals Helper
/* 4005 Roman Numerals Helper (https://www.codewars.com/kata/roman-numerals-helper)
Description:
  Create a RomanNumerals helper that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

  Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
  Examples:
    RomanNumerals.toRoman(1000); // should return 'M'
    RomanNumerals.fromRoman('M'); // should return 1000

  Help:
  Symbol    Value
  I          1
  V          5
  X          10
  L          50
  C          100
  D          500
  M          1,000
*/

//My solution
    class RomanNumeralsHelper {

      constructor() {
        this.toRom = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
      }

    toRoman(number){

      let result = '';
      for (let key in this.toRom) {
        let times = Math.floor(number / this.toRom[key]); // how many times Roman number occur in Arabian number
        result += key.repeat(times); // if >0 add it so many times in result
        number -= this.toRom[key] * times; // substract what used in result from number
      }
      return result;

    }

    fromRoman(roman){
      var rom ={ "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
      return roman.split('').reverse().reduce(
          function(dec,c,i,rr){  //rr in the reducing function is a copy of the reversed-splitted-roman value, then rr[i-1] returns just previous element in this array. So rom[rr[i-1]] returns decimal value of this "previous element" ... ||0 OR 0 if such an element doesn't exist.
              c=rom[c];
              i=rom[rr[i-1]]||0;
              return dec + (i<=c? c: -c) }
          ,0
      )
    }
    }

    let RomanNumerals = new RomanNumeralsHelper();

//Solution(s) I like(links):
//1) BEST(14) AND CLEVER(6) https://www.codewars.com/kata/reviews/51b66252ed2069c7c0000008/groups/5393b6226d3d44533b000d3c
    var numerals = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];

    RomanNumerals = {
      toRoman: function(v) {
        var s = '';
        numerals.forEach(function(n) {
          while (v >= n[1]) {
            s += n[0];
            v -= n[1];
          }
        });
        return s;
      },
      fromRoman: function(s) {
        var v = 0;
        numerals.forEach(function(n) {
          while (s.substr(0, n[0].length) == n[0]) {
            s = s.substr(n[0].length);
            v += n[1];
          }
        });
        return v;
      }
    };
//2)Best(7) and Clever(3) https://www.codewars.com/kata/reviews/51b66252ed2069c7c0000008/groups/55f37121c058b72a5500003e
    function RomanNumeralsHelper(){
      this.values = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};
    }

    RomanNumeralsHelper.prototype.fromRoman = function(rom){
      var matches = rom.match(/CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I/gi);
      return matches.reduce((acc, n) => { return acc + this.values[n]; },bind(this), 0);
    }

    RomanNumeralsHelper.prototype.toRoman = function(value){
      var output = "";
      Object.keys(this.values).forEach((num) => {
        while(value >= this.values[num]){
          value -= this.values[num];
          output += num;
        }
      });
      return output;
    }

    var RomanNumerals = new RomanNumeralsHelper();
//#endregion

//#region 4006 Range Extraction
/*4006 Range Extraction (https://www.codewars.com/kata/range-extraction/javascript)
Description:
  A format for expressing an ordered list of integers is to use a comma separated list of either individual integers
  or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
  Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

  Example:
    solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
    // returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/

//My solution
    function solution(list){
      let result = [];
      let start = 0;
      let end = 0;
      for (let i = 0; i < list.length; i++){
        if (list[i] - list[i + 2] === -2) { //if 3 consequitive numbers 1,2,3 (1-3 = 2)
          start = i; //start index of range
          end = i + 2; //end index of range (could be more)
        for (let j = i + 2; j < list.length; j++){
          if (list[j] - list[j + 1] == -1) { // if 2 consequitive numbers increase end index
            end = j + 1;
          } else {
            result.push(list[start]+ "-" + list[end]);
            i = j; // move start to end index
            break;
          }
        }
        } else {
          result.push(list[i]);
        }
      }
      return result.join(',');
    }


//Solution(s) I like(links):
//1) best(43) and clever(6) https://www.codewars.com/kata/reviews/51ba7e87b08c1cd60f00004a/groups/55396a247d66252a73000019
    function solution(individualIntegers) {
      return individualIntegers
        .reduce(splitIntoRanges, [])
        .map(convertToRange)
        .join(",");
    }

    function splitIntoRanges(ranges, number) {
      if (!ranges.length) {
        ranges.push([number]);
        return ranges;
      }

      var lastRange = ranges[ranges.length - 1];
      var lastNumber = lastRange[lastRange.length - 1];

      number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
      return ranges;
    }

    function convertToRange(range) {
      return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
    }

//2) clever(93) https://www.codewars.com/kata/reviews/51ba7e87b08c1cd60f00004a/groups/54ef355c7f914260e50016b6
    function solution(list){
      for(var i = 0; i < list.length; i++){
          var j = i;
          while(list[j] - list[j+1] == -1) j++;
          if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
      }
      return list.join();
    }
//#endregion

//#region 4007 Strip Comments
/*4007 Strip Comments (https://www.codewars.com/kata/strip-comments)
Description:
  Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

  Example:

  Given an input string of:

    apples, pears # and bananas
    grapes
    bananas !apples
  The output expected would be:

    apples, pears
    grapes
    bananas
  The code would be called like so:

      var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
      // result should == "apples, pears\ngrapes\nbananas"
*/

//My solution
    function solution(input, markers){
      let lines = input.split('\n');
      for (let i in markers) {
        for (let j in lines) {
          var index = lines[j].indexOf(markers[i]);
          if (index >= 0) {
            lines[j] = lines[j].substr(0, index-1);
          }
        }
      }
      return lines.join('\n');
    }


//Solution(s) I like(links):
//1) best(15) and clever(30) !!Comments https://www.codewars.com/kata/reviews/51c8e7f3049befd8ca0000bd/groups/575474139a45241dac0010c5
    function solution(input, markers) {
      return input.split('\n').map(
        line => markers.reduce(
          (line, marker) => line.split(marker)[0].trim(), line
        )
      ).join('\n')
    }
//2) Clever(130) !!Comments https://www.codewars.com/kata/reviews/51c8e7f3049befd8ca0000bd/groups/53b7cf934db8fd8c270002e8
    function solution(input, markers){
      return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
    }
//#endregion

//#region 4008 UriBuilder
/*4008 UriBuilder (https://www.codewars.com/kata/UriBuilder)
Description:
  Create a basic UriBuilder object that will be used specifically to build query params on an existing URI. It should support a params property and a build method. It will handle the URL having pre-existing params that need to be managed. The URL must be properly encoded (i.e. "a b" should be encoded as "a%20b")

  Examples of how the builder will be used:
    var builder = new UriBuilder('http://www.codewars.com')
    builder.params.page = 1
    builder.params.language = 'javascript'

    // new builder instance to demonstrate pre-existing params.
    builder = new UriBuilder('http://www.codewars.com?page=1')

    builder.params.page = 2
    // should return 'http://www.codewars.com?page=2'
    builder.build()

    // if you delete params then they will disappear from the url string
    delete builder.params.page

    // should return 'http://www.codewars.com'
    builder.build()

Note: For extra style points you can have your solution handle array values as query parameters, however there are no tests that explicitly test for them.
*/

//My solution
    // TODO: create UriBuilder object
    class UriBuilder{
      constructor(http){
        http = http.split("?");
        this.handleParams(http[1]);//http params
        this.http = http[0]; //URL without params
      }

      handleParams(params){
        this.params = {};
        params = params.split("&")
                      .map(x => { x = x.split("=");
                        return {
                          paramName : x[0],
                          value : x[1]
                        }
                      });

        for(let i=0;i<params.length;i++){
          this.params[params[i].paramName] = params[i].value;
        }
      }

      build(){
        let result = [];

        for (var parameter in this.params) {
          if (this.params.hasOwnProperty(parameter)) {
              //without encodeURIComponent spaces handled incorrectl (%20)
              result.push(`${parameter}=${encodeURIComponent(this.params[parameter])}`);
          }
        }

        result = result.join("&");
        return this.http + (result.length > 0 ? `?${result}` : "");
      }
    }



//Solution(s) I like(links):
//1) best(4) https://www.codewars.com/kata/reviews/51eeadd438ef8d03ec000024/groups/52530f7aba7113cc5e0003ef
    function UriBuilder(base_uri) {
      var parts = base_uri.split('?');

      this.base_uri = parts[0];
      this.params = {};

      if (parts[1] !== undefined) {
        var that = this;
        parts[1].split('&').map(function(param) {
          var p = param.split('=');
          that.params[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
        });
      }
    }

    UriBuilder.prototype.build = function() {
      if (!Object.keys(this.params).length) {
        return this.base_uri;
      }

      var params = [];
      for (var key in this.params) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(this.params[key]));
      }

      return this.base_uri + '?' + params.join('&');
    }
//2) best(3) Comment https://www.codewars.com/kata/reviews/51eeadd438ef8d03ec000024/groups/53a0956a441dbceb46000841
    function UriBuilder(url){
      var t = url.split('?'),
          base = t[0],
          pString = t[1];

      this.params = pString.split('&').map(function(s){
        return s.split('=').map(decodeURIComponent);
      }).reduce(function(obj, p){
        obj[p[0]] = p[1];
        return obj;
      }, {});

      this.build = function(){
        return Object.keys(this.params).reduce((function(s, pname){
            return s + encodeURIComponent(pname) + "=" + encodeURIComponent(this.params[pname]) + '&';
        }).bind(this), base + '?').replace(/[&]$/,'');
      }
    }

//3) Clever(3) Comment https://www.codewars.com/kata/reviews/51eeadd438ef8d03ec000024/groups/544663caf971f7e19f000cdc
    function UriBuilder(url){
      this.url = url;
      this.params = {};
      this.a = ['http://www.codewars.com?a=1', 'http://www.codewars.com?a=2', 'http://www.codewars.com?a=2&b=1', 'http://www.codewars.com?b=1' ,'http://www.codewars.com?b=a%20b'];
      this.i = 0;
      this.build = function(){
        return this.a[this.i++];
      };
    };
//#endregion

//#region 4009 Most frequently used words in a text
/* 4009 Most frequently used words in a text (https://www.codewars.com/kata/most-frequently-used-words-in-a-text)
Description:
    Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
  A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
  Matches should be case-insensitive, and the words in the result should be lowercased.
  Ties may be broken arbitrarily.
  If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
  Examples:
      top_3_words("In a village of La Mancha, the name of which I have no desire to call to
      mind, there lived not long since one of those gentlemen that keep a lance
      in the lance-rack, an old buckler, a lean hack, and a greyhound for
      coursing. An olla of rather more beef than mutton, a salad on most
      nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
      on Sundays, made away with three-quarters of his income.")
      # => ["a", "of", "on"]

      top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
      # => ["e", "ddd", "aa"]

      top_3_words("  //wont won't won't")
      # => ["won't", "wont"]

  Bonus points (not really, but just for fun):
  Avoid creating an array whose memory footprint is roughly as big as the input text.
  Avoid sorting the entire array of unique words.
*/

//My solution
    function topThreeWords(text) {
      let dict = new Map();
      // don't replace ' (single quote)
      text = text.toLowerCase().replace(/[\,\.\:\/]/g, '');

      //if text with replaced punctuation and spaces is empty, return empty array
      if( !text.replace(/\W/g,'') ) return [];

      //split words and don't select spaces
      let words = text.split(' ').filter(x => x.length>0);

      for(let word of words) {
        if(dict.has(word)) {
          let value = dict.get(word);
          dict.set(word, value+1);
        } else
          dict.set(word, 1);
      }

      let sortedDict =[...dict].sort( (a,b) => b[1] - a[1]);

      return sortedDict.slice(0,3).map(word => word[0]);
    }

//Solution(s) I like(links):
//1) best(5) https://www.codewars.com/kata/reviews/51e056fe544cf36c410000ff/groups/5b92e143986d6e2e0e0009b5
    // 07.09.2018
    let topThreeWords = text => {
      let dict = new Map();
      text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
          let word = match.toLowerCase();
          dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
      });
      dict.delete("'");
      return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
    };
//2) Clever(2) Comment https://www.codewars.com/kata/reviews/51e056fe544cf36c410000ff/groups/5b92e246f0a3b25f22000036
    Object.defineProperty( Function.prototype, "on", { value: function on(fn) { return (...a) => a.map(fn).reduce(this) ; } } );
    Object.defineProperty( Function.prototype, "down", { get: function down() { return (v,w) => this(w,v) ; } } );
    const fst = ([fst]) => fst ;
    const snd = ([,snd]) => snd ;
    const compare = (v,w) => Number(v>w) - Number(v<w) ;
    const topThreeWords = text =>
      Array.from( (  text.toLowerCase()
                        .match( /[a-z]['a-z]*|['a-z]*[a-z]/gi )
                  || []
                  ).reduce( (z,v) => z.set( v, z.get(v) + 1 || 1 ) , new Map )
                )
          .sort(compare.down.on(snd))
          .slice(0,3)
          .map(fst)
          ;
//#endregion


//#region 4010 Nesting Structure Comparison
/* 4010 Nesting Structure Comparison (https://www.codewars.com/kata/nesting-structure-comparison)
Description:
  Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structure as the first array.
  For example:

      // should return true
      [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
      [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );

      // should return false
      [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
      [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );

      // should return true
      [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );

      // should return false
      [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
  For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
*/

//My solution
    Array.prototype.sameStructureAs = function (other) {
      // Return 'true' if and only if 'other' has the same
      // nesting structure as 'this'.

      // Note: You are given a function isArray(o) that returns
      // whether its argument is an array.
      return checkStruct(this) === checkStruct(other);
    };

    function checkStruct(arr) {
      return Array.isArray(arr) ? `[ ${arr.map(checkStruct)}]` : '';
    }

//Solution(s) I like(links):
//1) best(11) !!Comment https://www.codewars.com/kata/reviews/520446778469526ec0000004/groups/54b83bcd9e13a683c4000101
    Array.prototype.sameStructureAs = function (other) {
      if (!Array.isArray(other) || this.length != other.length)
        return false;

      for(var i = 0; i < this.length; ++i) {
        if (Array.isArray(this[i])) {
          if (!this[i].sameStructureAs(other[i])) {
            return false;
          }
        } else if (Array.isArray(other[i])) {
          return false;
        }
      }

      return true;
    };
//2) Best(24) and Clever(113) !!Comment https://www.codewars.com/kata/reviews/520446778469526ec0000004/groups/53d24e5f7e03ccfe9b0005a9
    Array.prototype.sameStructureAs = function (other) {
      return (this.length === other.length) ? this.every(function(el, i){
        return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
      }) : false;
    };
//3) best(4) https://www.codewars.com/kata/reviews/520446778469526ec0000004/groups/54cb9823cb2a5b857f0001ef
  Array.prototype.sameStructureAs = function (other) {
    return isArray(other) && this.length == other.length && this.every(function (a, i) {
      var b = other[i];
      return isArray(a) ? a.sameStructureAs(b) : isArray(a) == isArray(b);
    });
  };
//4) Clever(3) Comment https://www.codewars.com/kata/reviews/520446778469526ec0000004/groups/564b49efac8a7ca4cc000051
    Array.prototype.sameStructureAs = function (other) {
      if (!isArray(other)) return false;

      return this.join("").replace(/[^.,]/g, 1) === other.join("").replace(/[^.,]/g, 1);
    };
//5) Clever(4) https://www.codewars.com/kata/reviews/520446778469526ec0000004/groups/587719784ddfd8c3ba0006ad
    Array.prototype.sameStructureAs = function (o) {
      return isArray(o)&&JSON.stringify(this).replace(/"(\[|\])"/g,"x").replace(/[^\[,'\]]/g,"") === JSON.stringify(o).replace(/"(\[|\])"/g,"x").replace(/[^\[,'\]]/g,"")
    };
//#endregion




//#region 4011 Codewars style ranking system
/* 4011 Codewars style ranking system (https://www.codewars.com/kata/codewars-style-ranking-system)
Description:
  Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.

  Business Rules:
    A user starts at rank -8 and can progress all the way to 8.
    There is no 0 (zero) rank. The next rank after -1 is 1.
    Users will complete activities. These activities also have ranks.
    Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank
    The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
    A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
    Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression).
    A user cannot progress beyond rank 8.
    The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.
    The progress is scored like so:

    Completing an activity that is ranked the same as that of the user's will be worth 3 points
    Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
    Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
    Completing an activity ranked higher than the current user's rank will accelerate the rank progression. The greater the difference between rankings the more the progression will be increased. The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.

  Logic Examples:
    If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
    If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
    If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
    If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank
    If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)

  Code Usage Examples:
      var user = new User()
      user.rank // => -8
      user.progress // => 0
      user.incProgress(-7)
      user.progress // => 10
      user.incProgress(-5) // will add 90 progress
      user.progress # => 0 // progress is now zero
      user.rank # => -7 // rank was upgraded to -7

    Note: Codewars no longer uses this algorithm for its own ranking system. It uses a pure Math based solution that gives consistent results no matter what order a set of ranked activities are completed at.
*/

//My solution
    class User {

      constructor() {
        this.range = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
        this.position = 0;
        this.rank = this.range[this.position];
        this.progress = 0;
      }

      incProgress(rank) {
        if (rank === 0 || rank < -8 || rank > 8) throw new Error('error');
        if (rank === this.rank) {
          this.progress += 3;
        }
        if ((this.rank - rank === 1) || (this.rank === 1 && rank === -1)) {
          this.progress += 1;
        }
        if (rank > this.rank) {
          if (this.rank <= -1 && rank >= 1) {
            this.progress += 10 * Math.pow((rank - this.rank - 1), 2);
          } else {
            this.progress += 10 * Math.pow((rank - this.rank), 2);
          }
        }
        if (this.progress >= 100 && this.rank < 8) {
          while (this.progress >= 100) {
            this.position++;
            this.rank = this.range[this.position];
            this.progress -= 100;
          }
        }
        if (this.rank === 8) {
          this.progress = 0;
        }
      }

    }

  //Solution(s) I like(links):
//1) best(25) https://www.codewars.com/kata/reviews/521679fd64dc2cdac0000140/groups/5250c16e1777d16198000409
    var User = (function () {
      ////////// Hidden //////////
      var hierarchy = [ -8,-7,-6,-5,-4,-3,-2,-1, 1, 2, 3, 4, 5, 6, 7, 8 ];
      var progress = { min: 0, max: 100 };
      var rank = { min: hierarchy[0], max: hierarchy[hierarchy.length - 1] };

      progress.acceleration = function (userRank, activityRank) {
        var d = rank.difference(userRank, activityRank);
        if (d === -1)       return 1;
        else if (d === 0)   return 3;
        else if (d > 0)     return 10 * d * d;
        else                return 0;
      };
      progress.update = function (user, acceleration) {
        user.progress += acceleration;
        user.progress = (user.rank === rank.max) ? progress.min : user.progress % progress.max;
      };
      rank.difference = function (userRank, activityRank) {
        return hierarchy.indexOf(activityRank) - hierarchy.indexOf(userRank);
      };
      rank.update = function (user, acceleration) {
        var d = ~~((user.progress + acceleration) / progress.max);
        var i = hierarchy.indexOf(user.rank) + d;
        if (i >= hierarchy.length) i = hierarchy.length -1;
        user.rank = hierarchy[i];
      };
      rank.valid = function (r) {
        return hierarchy.indexOf(r) > -1;
      };

      ////////// Exposed //////////
      var User = function () {
        this.progress = progress.min;
        this.rank = rank.min;
      };
      User.prototype.incProgress = function (activityRank) {
        if (!rank.valid(activityRank)) throw new Error("Invalid activity rank given");
        var accel = progress.acceleration(this.rank, activityRank);
        rank.update(this, accel);
        progress.update(this, accel);
      };
      return User;
    }).call();
//2) Clever(17) https://www.codewars.com/kata/reviews/521679fd64dc2cdac0000140/groups/543e049723ccbd9aac00106c
    // it must support rank, progress and the incProgress(rank) method

    var ranks = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];

    User = function() {
      this._progress = 0;

      this.incProgress = function(rank) {
        if (rank > 8) throw Error();
        if (rank == 0) throw Error();
        if (rank < -8) throw Error();
        if (rank > 0) rank--;
        var thisrank = this.rank;
        if (thisrank > 0) thisrank--;
        var cmp = rank - thisrank;
        if (cmp == 0) this._progress += 3;
        if (cmp == -1) this._progress += 1;
        if (cmp > 0) this._progress += 10 * cmp * cmp;
      }

      Object.defineProperty(this, "rank", { get: function () {
        return ranks[Math.min(15,Math.floor(this._progress/100))];
      }});

      Object.defineProperty(this, "progress", { get: function () {
        return Math.min(this._progress, 1500) % 100;
      }});
    }

//3)Best(3) https://www.codewars.com/kata/reviews/521679fd64dc2cdac0000140/groups/58454f7afc7d0f10f60001bd
    // it must support rank, progress and the incProgress(rank) method
    class User{
      constructor(){
        this.RANK = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];
        this.pos=0;
        this.rank = this.RANK[this.pos];
        this.progress = 0;
      }

      incProgress(taskRank){
        taskRank = this.RANK.indexOf(taskRank);
        if(taskRank < 0) throw ("error");
        let diff = taskRank - this.pos;

            if(diff ==  0) this.progress+=3;
        else if(diff >   0) this.progress += diff*diff*10;
        else if(diff == -1) this.progress += 1;
        // new rank & progress
        this.pos += Math.floor(this.progress/100);
        this.progress = this.progress%100;
        if(this.pos >= 15) {this.pos = 15; this.progress = 0;}
        this.rank = this.RANK[this.pos];
      }

    }

//4) Clever(7) https://www.codewars.com/kata/reviews/521679fd64dc2cdac0000140/groups/538762a0ee24bfbac10015dd
    function User(){
      this.rank = -8;
      this.progress = 0;
      this.ranking = {
        "-8": 0,
        "-7": 1,
        "-6": 2,
        "-5": 3,
        "-4": 4,
        "-3": 5,
        "-2": 6,
        "-1": 7,
        "1": 8,
        "2": 9,
        "3": 10,
        "4": 11,
        "5": 12,
        "6": 13,
        "7": 14,
        "8": 15
      };
    };

    User.prototype.addPoints = function(points){
      this.progress += points;
      var levels = Math.floor(this.progress / 100);
      if(levels > 0){
        for(;levels > 0; levels--){
          this.rank += this.rank == -1?2:1;
        }
        this.progress = this.progress % 100;
      }
      if(this.rank == 8) this.progress = 0;
    };

    User.prototype.incProgress = function(rank){
      if(rank < -8 || rank === 0 || rank > 8) throw error;
      var diff = this.ranking[rank] - this.ranking[this.rank];

      if(diff === 0){
        this.addPoints(3);
      }else if(diff > 0){
        this.addPoints(10 * diff * diff);
      }else if(diff === -1){
        this.addPoints(1);
      }
    }
//#endregion

//#region 4012 Snail
/* 4012 Snail (https://www.codewars.com/kata/snail/javascript)
Description:
  Snail Sort
  Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

    array = [[1,2,3],
            [4,5,6],
            [7,8,9]]
    snail(array) #=> [1,2,3,6,9,8,7,4,5]
  For better understanding, please follow the numbers of the next array consecutively:

    array = [[1,2,3],
            [8,9,4],
            [7,6,5]]
    snail(array) #=> [1,2,3,4,5,6,7,8,9]

  NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

  NOTE 2: The 0x0 (empty matrix) is represented as [[]]
*/

//My solution
    function snail(array) {
      let results = [];

      while(array.length) {
        results = results.concat(array.shift());

        array.forEach(function (current) {
          results.push(current.pop());
        });

        array.forEach(function (current) {
          current.reverse();
        });

        array.reverse();
      }

      return results;
    }

//Solution(s) I like(links):
//1) Clever(141) !!Comment https://www.codewars.com/kata/reviews/5220c5750b1ba099360003e2/groups/55213b8f48b3baa1b90009ff
    snail = function(array) {
      var result;
      while (array.length) {
        // Steal the first row.
        result = (result ? result.concat(array.shift()) : array.shift());
        // Steal the right items.
        for (var i = 0; i < array.length; i++)
          result.push(array[i].pop());
        // Steal the bottom row.
        result = result.concat((array.pop() || []).reverse());
        // Steal the left items.
        for (var i = array.length - 1; i >= 0; i--)
          result.push(array[i].shift());
      }
      return result;
    }
//2) Clever(58) COmment https://www.codewars.com/kata/reviews/5220c5750b1ba099360003e2/groups/583b55348bbc048410000c2c
    function snail(array) {
      var vector = [];
      while (array.length) {
        vector.push(...array.shift());
        array.map(row => vector.push(row.pop()));
        array.reverse().map(row => row.reverse());
      }
      return vector;
    }
//3) Best(5) https://www.codewars.com/kata/reviews/5220c5750b1ba099360003e2/groups/57442b74ce32aa4ae4000835
    snail = function(array) {
      var size = array.length;

      if (size == 0)
        return [];

      if (size == 1)
        return array[0];

      var top    = array[0].slice(0, -1);
      var right  = array.slice(0, -1).map(a => a[size - 1]);
      var bottom = array[size -1].slice(1).reverse();
      var left   = array.slice(1).map(a => a[0]).reverse();
      var inner  = array.slice(1, -1).map(a => a.slice(1, -1));

      return [].concat(top, right, bottom, left, snail(inner));
    }
//#endregion
