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
