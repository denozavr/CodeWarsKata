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

//#region 5005 Ninja vs Samurai: Attack + Block
/* 5005 Ninja vs Samurai: Attack + Block (https://www.codewars.com/kata/ninja-vs-samurai-attack-plus-block)
Description:
  Something is wrong with our Warrior class. All variables should initialize properly and the attack method is not working as expected.
  If properly set, it should correctly calculate the damage after an attack (if the attacker position is == to the block position of the defender: no damage; otherwise, the defender gets 10 damage if hit "high" or 5 damage if hit "low". If no block is set, the defender takes 5 extra damage.
  For some reason, the health value is not being properly set. The following shows an example of this code being used:

    var ninja = new Warrior('Ninja');
    var samurai = new Warrior('Samurai');

    ninja.block = Position.high;
    samurai.attack(ninja, Position.low);
    // ninja.health should == 95
  The warrios must be able to fight to the bitter end, and good luck to the most skilled!
  Notice that health can't be below 0: once hit to 0 health, a warrior attribute deceased becomes true; if hit again, the zombie attribute becomes true too!
*/

//My solution(ready code just fix 1 line)
    Position = {
      high: 'h',
      low: 'l'
    }

    Warrior = function(name){
      this.name = name;
      this.health = 100;
    }

    Warrior.prototype = {
      attack: function(enemy, position){
        if (enemy.block != position){
          var damage = position == Position.high ? 10 : 5;
          // if enemy is not blocking at all then give more damage
          if (!enemy.block){
            damage += 5;
          }
          setHealth.call(enemy,enemy.health - damage);  //!!!WAS just  setHealth.call(enemy.health - damage); sot THIS was not set properly
        }
      }
    }

    // private functions
    function setHealth(value){
      this.health = Math.max(0, value);
      if (this.health == 0){
        this.deceased = true;
        this.zombie = false;
      }
      else if(this.deceased){
        this.zombie = true;
      }
    }


//Solution(s) I like(links):
//1)  https://www.codewars.com/kata/reviews/517b2bcf8557c200b8000018/groups/52243e04b2cdcc5b89000082
    enemy.setHealth(enemy.health - damage);
//2) ES6 https://www.codewars.com/kata/reviews/517b2bcf8557c200b8000018/groups/599d55cc1c6da9452e000bf8
    const Position = {
      high: 'h',
      low: 'l'
    }

    class Warrior {
      constructor (name) {
        this.name = name;
        this.health = 100;
        this.deceased = false;
        this.zombie = false;
      }

      attack (enemy, position) {
        const damage = this._getDamage (enemy.block, position);
        this._processDamage.call(enemy, damage);
      }

      /** Private */
      _processDamage (value) {
        this.zombie = !this.health && value;
        this.health = Math.max(0, this.health - value);
        this.deceased = !!this.health;
      }

      _getDamage (block, position) {
        let damage = 0;

        if (block !== position) {
          damage = position === Position.high ? 10 : 5;
          // if enemy is not blocking at all then give more damage
          if (!block) {
            damage += 5;
          }
        }

        return damage;
      }
    }

//#endregion


//#region 5006 PaginationHelper
/* 5006 PaginationHelper (https://www.codewars.com/kata/paginationhelper)
Description:
  For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
  The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
  The following are some examples of how this class is used:

    var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
    helper.pageCount(); //should == 2
    helper.itemCount(); //should == 6
    helper.pageItemCount(0); //should == 4
    helper.pageItemCount(1); // last page - should == 2
    helper.pageItemCount(2); // should == -1 since the page is invalid

    // pageIndex takes an item index and returns the page that it belongs on
    helper.pageIndex(5); //should == 1 (zero based index)
    helper.pageIndex(2); //should == 0
    helper.pageIndex(20); //should == -1
    helper.pageIndex(-10); //should == -1
*/

//My solution
    // TODO: complete this object/class
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    function PaginationHelper(collection, itemsPerPage){
      this.collection = collection
      this.itemsPerPage = itemsPerPage
    }

    // returns the number of items within the entire collection
    PaginationHelper.prototype.itemCount = function() {
      return this.collection.length;
    }

    // returns the number of pages
    PaginationHelper.prototype.pageCount = function() {
      return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    PaginationHelper.prototype.pageItemCount = function(pageIndex) {
      return this.pageCount() <= pageIndex ? -1
           : Math.min(this.itemsPerPage, this.itemCount() - (this.itemsPerPage * pageIndex) );
    }

    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    PaginationHelper.prototype.pageIndex = function(itemIndex) {
      return (itemIndex < 0 || itemIndex >= this.itemCount()) ? -1
          : Math.floor(itemIndex/this.itemsPerPage);

    }


//Solution(s) I like(links):
//1) ES6 Best(7) https://www.codewars.com/kata/reviews/516f30257c907a79f20003e9/groups/5701319386306a876a00098a
    class PaginationHelper {
      constructor(collection, itemsPerPage) {
        this.collection = collection
        this.itemsPerPage = itemsPerPage
        this.pages = Math.ceil(collection.length / itemsPerPage)
      }

      itemCount() {
        return this.collection.length
      }

      pageCount() {
        return this.pages
      }

      pageItemCount(pageIndex) {
        if (pageIndex >= this.pages || pageIndex < 0) {
          return -1
        } else if (pageIndex === this.pages - 1) {
          return (this.collection.length % this.itemsPerPage)
        } else {
          return this.itemsPerPage
        }
      }

      pageIndex(itemIndex) {
        if (itemIndex >= 0 && itemIndex < this.collection.length) {
          return Math.max(Math.ceil(itemIndex / this.itemsPerPage) - 1, 0)
        } else {
          return -1
        }
      }
    }

//#endregion

//#region 5007 Arbitrary word wrapping
/* 5007 Arbitrary word wrapping (https://www.codewars.com/kata/arbitrary-word-wrapping)
Description
  You are writing an app that displays a fixed width font and has a strict limit of 25 characters per line in one particular text area.
  Write a function that takes in a string, inserts newline characters, and adds a hyphen on the end of a line if a word is continued on the next line.
  White space should be left in the result string as is.
  Test Fixture Cut-n-Paste:
    var input = "The quick brown fox jumped over the lazy developer.";
    var expectedResult ="The quick brown fox jump-\ned over the lazy develop-\ner.";
    var result = wordWrap(input);
    Test.expect(result === expectedResult);
*/

//My solution
    var wordWrap = function (str) {
      if (!str || str.length<25) return str;

      if( str[25] === ' ' )
        return str.substr(0,25) + '\n' + wordWrap(str.substr(25));
      else
        return str.substr(0,24) + '-\n' + wordWrap(str.substr(24));
    };

        //24 chars, because left last char for hyphen(-)
        //var chunks = str.match(/.{1,24}/g);
        // return chunks.join('-\n');

//Solution(s) I like(links):
//1) Best(3) https://www.codewars.com/kata/reviews/51e8241aed85d42c810002ad/groups/5445b3dc990c92b4730004f3
    var wordWrap = function (str) {
      var arr=[],r = /(^.{25}\s|^.{24}\s\w)/
      while(str.length>0){
        if(str.length>=25&&!r.test(str)){
          str = str.slice(0,24) +'-'+ str.slice(24)
        }
        arr.push(str.slice(0,25))
        str = str.slice(25)
      }
      return arr.join('\n')

    };
//2) Clever(11) https://www.codewars.com/kata/reviews/51e8241aed85d42c810002ad/groups/5404ead100ab39b5ec00016d
    var wordWrap = function (str) {
      return str.replace( /(.{24})/g, "$1-\n" ).replace( /-\n(.) /g, "$1\n " )
    };
//3)Clever(3) https://www.codewars.com/kata/reviews/51e8241aed85d42c810002ad/groups/561589d40a7ce43eff000030
    var wordWrap = function (str) {
      if (str.length <= 25) return str;
      return (str[24] === ' ' || str[25] === ' ')
        ? str.slice(0,25) + '\n' + wordWrap(str.slice(25))
        : str.slice(0,24) + '-\n' + wordWrap(str.slice(24));
    };
//#endregion

//#region 5008 Beeramid
/* 5008 Beeramid (https://www.codewars.com/kata/beeramid)
Description
  Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
  A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
  Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
  1) your referral bonus, and
  2) the price of a beer can

  For example:
    beeramid(1500, 2); // should === 12
    beeramid(5000, 3); // should === 16
*/

//My solution
    // Returns number of complete beeramid levels
    let beeramid = function(bonus, price) {
      if(bonus < price) return 0;
      let cans = Math.floor(bonus / price);
      let level = 0;
      let count = 0;
      while(count <= cans) {
          level++;
          count +=level*level;
      }
      return level-1;
    }


//Solution(s) I like(links):
//1) Best(4) and Clever(3) https://www.codewars.com/kata/reviews/51e04f6b544cf3f6550000c4/groups/5446b794990c92b90d00130f
    var beeramid = function(bonus, price) {
      var beers = Math.floor(bonus / price), levels = 0;
      while(beers >= ++levels * levels) {
        beers -= levels * levels;
      }
      return levels - 1;
    }
//2) Clever(1) https://www.codewars.com/kata/reviews/51e04f6b544cf3f6550000c4/groups/57f49e9081f9f23759000091
    // Returns number of complete beeramid levels
    var beeramid = function(bonus, price) {
      for (var i = 1; ; i++) {
        if (level(i) > Math.floor(bonus / price)) return i - 1;
      }
    }

    var level = function(cur) {
      if (cur > 1)  return cur * cur + level(cur - 1);
      else return 1;
    }
//#endregion

//#region 5009 Mean Square Error
/* 5009 Mean Square Error (https://www.codewars.com/kata/mean-square-error)
Description
  Complete the function that

  accepts two arrays of equal length
  compares the value each member in one array to the corresponding member in the other
  squares the absolute value difference between those two values
  and returns the average of those squared absolute value difference between each member pair.
      solution([1,2,3], [4,5,6]) // should === 9 ((9 + 9 + 9) / 3)
      solution([10, 20, 10, 2], [10, 25, 5, -2]) // should === 16.5 ((0 + 25 + 25 + 16) / 4)
      solution([-1,0], [0,-1]) // should === 1 ((1 + 1) / 2)
*/

//My solution
    let solution = function(firstArray, secondArray) {
      let sum = 0;
      firstArray.forEach(function(value, index){
        let scndElem = secondArray[index];
        sum += Math.pow((value - scndElem),2);
      })
      return sum / firstArray.length;
    }


//Solution(s) I like(links):
//1) Best(3) https://www.codewars.com/kata/reviews/51edd51599a189fe7f000018/groups/57e2942ae108c09608000f6a
    var solution = function(firstArray, secondArray) {
      var arr = [];
      for (var i = 0; i < firstArray.length; i++) {
        arr.push(Math.pow(secondArray[i] - firstArray[i], 2));
      }
      return arr.reduce((a,b) => a+b)/arr.length;
    }
//2) Clever(2) https://www.codewars.com/kata/reviews/51edd51599a189fe7f000018/groups/59b1c7b3182024c7b400095e
    const solution = (a, b) => a.reduce((sum, n, i) => sum + (n - b[i])**2, 0) / a.length;
//3) https://www.codewars.com/kata/reviews/51edd51599a189fe7f000018/groups/57cc94a658a06ba5a00001bc
    const solution = (first, second) => {
      return first
        .map((el, i) => Math.pow(el - second[i], 2) / first.length)
        .reduce((current, prev) => current + prev, 0)
    }
//#endregion


//#region 5010 Sort arrays - 3
/* 5010 Sort arrays - 3 (https://www.codewars.com/kata/sort-arrays-3/javascript)
Description
    This time the input is an array of course-ids that are formatted in the following way:
      name-yymm
    The return of the function shall first be sorted by yymm, then by the name (which varies in length).
*/

//My solution
    // input: courses - array of course-names "name-yymm"
    // output: sorted by "yymm", then "name"
    sortme = function( courses ){
      let data = (course) => {
        course = course.split("-");
        return course[1] + course[0]; //yymm-name
      };
      return courses.sort((x, y) => data(x) > data(y));
    }


//Solution(s) I like(links):
//1) Best(3) https://www.codewars.com/kata/reviews/51f43f8dafadc31c2d0000d5/groups/5618fd4dc61724e719000068
    const compare = (a, b) => a.slice(-4) - b.slice(-4) || a.localeCompare(b);
    const sortme = (courses) => courses.sort(compare);
//2) Best(2) https://www.codewars.com/kata/reviews/51f43f8dafadc31c2d0000d5/groups/5afdb02f4ca83b14d4005d55
    function sortme(courses) {
      const sortKey = s => s.slice(-4) + s.slice(0, -5);
      return courses.sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
    }
//3) Clever(3) https://www.codewars.com/kata/reviews/51f43f8dafadc31c2d0000d5/groups/5422eb79fb1d3cdd9a00078d
    function sortme(courses) {
      return courses.sort(function(a, b) {
        a = a.split('-');
        b = b.split('-');

        return a[1] < b[1] ? -1
          : a[1] > b[1] ? 1
          : a[0].localeCompare(b[0]);
      });
    }
//4) Clever(2) https://www.codewars.com/kata/reviews/51f43f8dafadc31c2d0000d5/groups/53c7c70faf7292882c0007c1
    function sortme(courses) {
      function swap(source) {
          return source.replace(/(.*)-(.*)/, '$2-$1');
      }

      return courses.sort(function (a, b) {
          return swap(a).localeCompare(swap(b));
      });
    }
//#endregion


//#region 5011 Calculate age in years
/* 5011 Calculate age in years (https://www.codewars.com/kata/calculate-age-in-years)
    Description
    Complete the following function that will return the difference in years (age) for a birthdate, and optionally a "now" date. Both arguments to the function are expected to be Date objects. The returned difference can be either positive or negative.

      getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
      getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
      getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
      getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8
*/

//My solution
    function getAge(birthDate, nowDate = new Date()) {
      let years = (nowDate.getFullYear() - birthDate.getFullYear());

      //if birtmonth > current, then less then year
      // same if the same month but birthday > current day
      if (nowDate.getMonth() < birthDate.getMonth() ||
              (nowDate.getMonth() == birthDate.getMonth() && nowDate.getDate() < birthDate.getDate())) {
              years--;
      }

      return years;
    }

//Solution(s) I like(links):
//1) Best(2) https://www.codewars.com/kata/reviews/521660e064dc2ccdd9000090/groups/568c332e51ac93e72c00005e
    function getAge(birthDate, nowDate) {
      var currentDate = nowDate || new Date();

      var differenceInMs = currentDate - birthDate;
      var years = Math.round(differenceInMs/1000) / 31536000;
      var currentMonth = currentDate.getMonth();
      var birthMonth = birthDate.getMonth();
      var currentDay = currentDate.getDate();
      var birthDay = birthDate.getDate();

      //if both birth month and birth day are less than current month and current day, subtract one from age
      if (currentDay < birthDay && currentMonth === birthMonth) {
          years--;
      }
      return Math.round(years);
    }
//2) Clever(2) https://www.codewars.com/kata/reviews/521660e064dc2ccdd9000090/groups/56ac06539f22f5bca300004c
    function getAge(birthDate, nowDate) {
      nowDate = nowDate || new Date();
      var b = birthDate.getFullYear();
      var n = nowDate.getFullYear();
      birthDate.setYear(n);
      if(birthDate <= nowDate)
        return n-b;
      else
        return n-b-1;
    }
//#endregion


//#region 5012 Object extend
/* 5012 Object extend (https://www.codewars.com/kata/object-extend)
    Description
    Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.
    The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.
    Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).

      extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
      extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
      extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
      extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}
*/

//My solution
    let extend = function() {
      let args = Array.from(arguments);
      //args = args.filter(obj => isObject(obj));
      //null and array is also objects, so we will exclude them just in case
      args = args.filter(obj => typeof obj === "object" && obj !== null && !Array.isArray(obj));
      return Object.assign({},...args.reverse()); //reverse to change objects places 1,2 to 2,1 so then
      //2nd object don't rewrite 1st object values
    }

//Solution(s) I like(links):
//1) Best(7) and Clever(27) https://www.codewars.com/kata/reviews/51f9d3a6e5a42591ae0001ee/groups/56f697e89400f5b7d8000b25
    function extend(...args) {
      return Object.assign({}, ...args.filter(Object.isObject).reverse());
    }
//2) Clever(31) https://www.codewars.com/kata/reviews/51f9d3a6e5a42591ae0001ee/groups/53bf2eb336c1e88745000339
    var extend = function() {
      var combined = {};
      Array.prototype.slice.call(arguments).filter(isObject).reduceRight(function(i,obj){
        Object.keys(obj).forEach(function(k){combined[k] = obj[k]})
      },null);
      return combined;
    }
//3) Best(2) https://www.codewars.com/kata/reviews/51f9d3a6e5a42591ae0001ee/groups/581818b2d4f64fdbfe000013
    const extend = function(...args) {
      const result = args
          .reverse()
          .reduce((acc, next) => {
              return typeof next === 'object'
                  ? Object.assign(acc, next)
                  : acc;
          }, {});
      return result;
    }
//4) Best(2) https://www.codewars.com/kata/reviews/51f9d3a6e5a42591ae0001ee/groups/522f6ac8a4f4ea637e0000ef
    var extend = function() {
      var ret = {};
      for (var i=0, n=arguments.length; i < n; i++) {
        if (!isObject(arguments[i])) continue;
        for (var j in arguments[i]) {
          if (!(j in ret)) ret[j] = arguments[i][j];
        }
      }
      return ret;
    }
//#endregion


//#region 5013 Compose functions (T Combinator)
/* 5013 Compose functions (T Combinator) (https://www.codewars.com/kata/compose-functions-t-combinator)
Description
  Let's make a function called compose that accepts a value as a parameter, as well as any number of functions as additional parameters.

  The function will return the value that results from the first parameter being used as a parameter for all of the accepted function parameters in turn. So:

      var doubleTheValue = function(val) { return val * 2; }
      var addOneToTheValue = function(val) { return val + 1; }

      compose(5, doubleTheValue) // should === 10
      compose(5, doubleTheValue, addOneToTheValue) // should === 11
  If only a single parameter is passed in, return that parameter.
*/

//My solution
    var compose = function() {
      var args = [...arguments];

      if(arguments.length==1) { return args[0]; }

      for(let i=1; i <arguments.length; i++) {
        args[0]=arguments[i](args[0]);
      }
      return args[0];
    }

//Solution(s) I like(links):
//1) Best(23) https://www.codewars.com/kata/reviews/51f9d729e5a42566ee00020c/groups/521ad6b3423f17a625000047
    var compose = function(value) {
      for(var i = 1 ; i< arguments.length ; i++) {
        value = arguments[i](value);
      }
      return value;
    }
//2) Clever(20) https://www.codewars.com/kata/reviews/51f9d729e5a42566ee00020c/groups/55be076bbf426225e1000034
    const compose = (x, ...fs) => fs.reduce((a, f) => f(a), x);
//3) Best(14) https://www.codewars.com/kata/reviews/51f9d729e5a42566ee00020c/groups/5219493ba54c32453a000058
    var compose = function(input) {
      return [].slice.call(arguments, 1)
        .reduce(function (acc, fn) {
          return fn(acc);
        }, input);
    }
//4) Clever(3) https://www.codewars.com/kata/reviews/51f9d729e5a42566ee00020c/groups/544e7f732d7b7611820006c0
  function compose(val) {
    [].slice.call(arguments, 1).forEach(function(fn) {val = fn(val);});
    return val;
  }
//#endregion


//#region 5014 ISBN-10 Validation
/* 5014 ISBN-10 Validation (https://www.codewars.com/kata/isbn-10-validation)
Description
  ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. The last digit can be either on the range 0 to 9 or the letter 'X' used to indicate a value of 10.
  For an ISBN-10 to be valid, the sum of the digits multiplied by their position has to equal zero modulo 11. For example, the ISBN-10: 1112223339 is valid because:
    (((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
  Complete the validISBN10() function.

    validISBN10('1112223339') ; should return true
    validISBN10('1234554321') ; should return true
    validISBN10('1234512345') ; should return false
*/

//My solution
    function validISBN10(isbn) {
      // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
      let isRegex = /[\d]{9}(\d|X){1}/g.test(isbn);
      return isRegex && checkMoulo11(isbn);
    }

    function checkMoulo11(isbn) {
      var chars = isbn.split('');
      if(chars[9] && chars[9].toUpperCase() === 'X'){
        chars[9] = 10;
      }
      var sum = 0;
      for (var i = 0; i < chars.length; i++) {
        sum += ((10-i) * parseInt(chars[i],10));
      };
      return (sum % 11) === 0;
    };

//Solution(s) I like(links):
//1) Best(7) https://www.codewars.com/kata/reviews/51fc12de24a9d8cb0e000004/groups/539770b4afebea1670000b09
    function validISBN10(isbn) {
      var len = isbn.length;

      if (len !== 10) {
          return false;
      }

      return isbn.split('')
          .map(function (num, index) {
            return (num === 'X' && index === len - 1 ? 10 : parseInt(num, 10)) * (index + 1);
          })
          .reduceRight(function (a, b) {
              return a + b;
          }, 0) % 11 === 0;
    }
//2) Clever(6) https://www.codewars.com/kata/reviews/51fc12de24a9d8cb0e000004/groups/5661baacb587eea593000009
    const validISBN10 = isbn => isbn.length == 10 && isbn.split("").reduce((a, b, i) => a + (((b == "X") && (i == 9)) ? 10 : b) * (i + 1), 0) % 11 == 0;
//3) Best(3) https://www.codewars.com/kata/reviews/51fc12de24a9d8cb0e000004/groups/53b5a6733bafcd33ee00075a
    function validISBN10(string){
      var array = string.split('');
      array.push(array.pop().replace(/X/, 10));
      return string.length == 10 && array.reduce(function(prev, value, index){
        return prev + value * (index + 1);
      }, 0) % 11 == 0;
    }
//4) Best(2) https://www.codewars.com/kata/reviews/51fc12de24a9d8cb0e000004/groups/5405b7bd00ab3989cf0009bf
    function validISBN10(isbn) {
      var r =  isbn.split('').reduce(function(a, b, i){
        return a + (b == 'X' && i === 9 ? 10 : b) * (i + 1);
      }, 0);
      return r % 11 === 0 && isbn.length === 10;
    }
//#endregion


//#region 5015 Lazy Repeater
/* 5015 Lazy Repeater (https://www.codewars.com/kata/lazy-repeater)
Description
  The makeLooper() function (make_looper in Python) takes a string (of non-zero length) as an argument. It returns a function. The function it returns will return successive characters of the string on successive invocations. It will start back at the beginning of the string once it reaches the end.
  For example:

    var abc = makeLooper('abc');
    abc(); // should return 'a' on this first call
    abc(); // should return 'b' on this second call
    abc(); // should return 'c' on this third call
    abc(); // should return 'a' again on this fourth call
*/

//My solution
    function makeLooper(str) {
      // TODO: return a function that loops through 'str' on successive invocations
      let array = str.split('');

      return function() {
        //could you shift()
        let result = array.splice(0,1); // remove 1st element of array and put it in variable
        array.push(result); // and push it to the end of initial array os on 4th iteration 's' will be returned
        return result;
      };
    }

//Solution(s) I like(links):
//1) Clever(7) https://www.codewars.com/kata/reviews/51fc3beb41ecc97ee20000c6/groups/53873ccc4c454094080013d7
    function makeLooper(str) {
      var counter = 0;
      return function(){
        return str[counter++ % str.length];
      }
      //return () => str[counter++%str.length];
    }
//2) Clever(6) https://www.codewars.com/kata/reviews/51fc3beb41ecc97ee20000c6/groups/5b204b3d6e22d4183f0015c7
    makeLooper = (s,i=0) => () => s[i++ % s.length]
//3) Clever(1) https://www.codewars.com/kata/reviews/51fc3beb41ecc97ee20000c6/groups/5ba8bc8811db8b2dd9000421
    function lazyRepeater(){
      this.count%=this.name.length;
      return this.name.charAt(this.count++);
    }

    function makeLooper(str) {
      return lazyRepeater.bind({name: str, count: 0});
    }

//#endregion


//#region 5016 Imperfect Network #2 (out-of-order messages)
/* 5016 Imperfect Network #2 (out-of-order messages) (https://www.codewars.com/kata/imperfect-network-number-2-out-of-order-messages)
Description
  You are given the outline of a network client. The network client as it is assumes that the network will never corrupt any data, will never lose any data, will never duplicate any data, and will always deliver data in the order it was sent.
  For the purposes of this Kata, assume that the network will never corrupt any data, will never lose any data, but that it may not deliver data in the order it was sent, and that it may send duplicate data. Ensure that the callback function is invoked with the data in-order and without duplicates. Note: there will be two instances of the network client. You should not try to coordinate order between the clients. You should only guarantee that client B invokes its callback in the same order that client A sends and vice-versa.
  The data sent into the network client's send() method will always be a string. The data sent into the sendFunction must also be a string. That data eventually will be received by the peer one or more times in this Kata.
  Here is an example of a perfect network that would use your network class:

      function PerfectNetwork(callbackA, callbackB) {
          var network = this;
          this.clientA = new NetworkClient(
              function (data) { network.clientB.recv(data); }, callbackA);
          this.clientB = new NetworkClient(
              function (data) { network.clientA.recv(data); }, callbackB);
      };

      var network = new PerfectNetwork(
          function (data) { console.log("CLIENT-A Got: " + data); },
          function (data) { console.log("CLIENT-B Got: " + data); }
      );

      network.clientA.send("abcd");
      network.clientA.send("wxyz");
      network.clientB.send("1234");
      network.clientA.send("EOF");
  This would output:

      CLIENT-B Got: abcd
      CLIENT-B Got: wxyz
      CLIENT-A Got: 1234
      CLIENT-B Got: EOF
  In this Kata, the naive client outline could very well produce the following output with a less-than-perfect network for that same sequence of send calls:

      CLIENT-B Got: abcd
      CLIENT-A Got: 1234
      CLIENT-A Got: 1234
      CLIENT-B Got: EOF
      CLIENT-B Got: wxyz
      CLIENT-B Got: EOF
*/

//My solution
    function NetworkClient (sendFunction, callback) {
      this.sendFunction = sendFunction;
      this.callback = callback;
      this.count = 0;
      this.last = 0;
      this.queue = [];
    }

    NetworkClient.prototype.send = function (data) {
      // Could wrap data with extra information to send
      let dataObj = { id: this.count++, data: data};
      this.sendFunction(JSON.stringify(dataObj));
    };

    NetworkClient.prototype.recv = function (data) {
      // Could unpack data and validate
      let dataObj = JSON.parse(data);
      let i = this.last;
      this.queue[dataObj.id] = dataObj.data;
      while(this.queue[i]) { /// not undefined
          this.callback(this.queue[i]);
          i++;
      }
      this.last = i;
    };

//Solution(s) I like(links):
//1) Best(14) Comment https://www.codewars.com/kata/reviews/52094b0673c32d3fc5000068/groups/5518f055a73e70693c00043e
    function NetworkClient (sendFunction, callback) {
      this.sendFunction = sendFunction;
      this.callback = callback;
      this.sendCount = this.lastSeen = 0;
      this.received = [];
    }

    NetworkClient.prototype.send = function (data) {
      this.sendFunction(JSON.stringify({index: this.sendCount++, payload: data}));
    };

    NetworkClient.prototype.recv = function (data) {
      data = JSON.parse(data);
      this.received[data.index] = data.payload;
      for (var i = this.lastSeen; this.received[i] !== undefined; i++) this.callback(this.received[i]);
      this.lastSeen = i;
    };
//2) Best(3) https://www.codewars.com/kata/reviews/52094b0673c32d3fc5000068/groups/543eab92386034e52f00255a
    function NetworkClient (sendFunction, callback) {
      this.sendFunction = sendFunction;
      this.callback = callback;
      this.send_count = 0;
      this.bucket = [];
      this.proc_count = 0;
    }

    NetworkClient.prototype.send = function (data) {
      // Could wrap data with extra information to send
      var pack = {
        msg_id: this.send_count++,
        data: data
      };
      console.log('sending', pack);
      this.sendFunction(JSON.stringify(pack));
    };

    NetworkClient.prototype.recv = function (pack) {
      pack = JSON.parse(pack);
      var msg_id = pack.msg_id,
          data = pack.data,
          incoming;
      this.bucket[msg_id] = pack.data;
      while (this.bucket[this.proc_count]) {
        this.callback(this.bucket[this.proc_count]);
        this.proc_count++;
      }
    };
//3) Clever(1) https://www.codewars.com/kata/reviews/52094b0673c32d3fc5000068/groups/59cb0e8e5ceae01f8f0005ae
    const log = console.log.bind(console);
    console.log = function(){
        log('<PASSED::>');
    }
//4) Clever(2) https://www.codewars.com/kata/reviews/52094b0673c32d3fc5000068/groups/53cf7cad67b66aac0200001d
    function NetworkClient (sendFunction, callback) {
      this.sendFunction = sendFunction;
      this.callback = callback;
      this.catalog = [];
      this.queue = [];
      this.sendCount = 1;
      this.recvCount = 1;
    }

    NetworkClient.prototype.send = function (data) {
      data = this.sendCount + data;
      this.sendCount++;
      this.sendFunction(data);
    };

    NetworkClient.prototype.recv = function (data) {
      if (this.recvCount != data[0]) {
        this.queue.push(data);
        return;
      }
      if (this.catalog.indexOf(data) === -1) {
        this.recvCount++;
        this.catalog.push(data);
        this.callback(data.slice(1));
        if (this.queue.length) {
          this.recv(this.queue.pop());
        }
      }
    };
//#endregion

//#region 5017 Simple Pig Latin
/* 5017 Simple Pig Latin (https://www.codewars.com/kata/simple-pig-latin)
Description
  Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
  Examples
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
*/

//My solution
    function pigIt(str){
      let words = str.split(' ');
      let wordsPig = words.map( (word) =>
          word.match(/\w+/) ? //without it not work when sentence ends with ! or ?
          word.slice(1) + word[0] + 'ay' :
          word);
      return wordsPig.join(' ');
    }


//Solution(s) I like(links):
//1) Clever(589) and Best(118) !!Comments https://www.codewars.com/kata/reviews/520b9d2bd5c0050411000012/groups/537e36abdb521fb8e1000047
    function pigIt(str){
      return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3") //str.replace( /(\w)([\w-]*)\b/g, '$2$1ay' )
      //str.replace( /(\w{1})(\w+)/g, "$2$1ay")
    }
  //3 groups: 1) first letter, 2) rest of the word, then 3) either space or end of the string. The "g" in the end of it means that it has not to stop at the first match, but it has to find all the (non overlapping) occurrences of it.
//2) Best(6) !!Comment https://www.codewars.com/kata/reviews/520b9d2bd5c0050411000012/groups/5273f778d8108aed91000b67
    function pigIt(str){
      //Code here
      return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
    }
//3) Best(5) https://www.codewars.com/kata/reviews/520b9d2bd5c0050411000012/groups/5814cbee303d12084d0000f4
    function pigIt(str) {
      return str.replace(/\w+/g, (w) => {
        return w.slice(1) + w[0] + 'ay';
      });
    }
//#endregion


//#region 5018 Return substring instance count - 2
/* 5018 Return substring instance count - 2 (https://www.codewars.com/kata/return-substring-instance-count-2)
Description
  Complete the solution so that it returns the number of times the search_text is found within the full_text.
    searchSubstr( fullText, searchText, allowOverlap = true )
  so that overlapping solutions are (not) counted. If the searchText is empty, it should return 0. Usage examples:
    searchSubstr('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
    searchSubstr('aaabbbcccc', 'bbb') # should return 1
    searchSubstr( 'aaa', 'aa' ) # should return 2
    searchSubstr( 'aaa', '' ) # should return 0
    searchSubstr( 'aaa', 'aa', false ) # should return 1
*/

//My solution
    function searchSubstr( fullText, searchText, allowOverlap ){
      if(!fullText || !searchText) return 0;

      let reg = new RegExp(searchText, "gi");
      let count = 0;
      let match;
      while (match = reg.exec(fullText)) {
        count++;
        if(allowOverlap) {
          reg.lastIndex = match.index+1;
        }
      }
      return count;
    }

//Solution(s) I like(links):
//1) Best(8) !!Comments https://www.codewars.com/kata/reviews/521916daf626d55cf8000236/groups/545d193561778ee9710007cd
    function searchSubstr(fullText, searchText, allowOverlap) {
      if(searchText == '') return 0;
      var re = new RegExp(searchText, 'g');
      if(allowOverlap) {
        var count = 0;
        while(re.exec(fullText)) {count++; re.lastIndex -= searchText.length - 1;}
        return count;
      } else return (fullText.match(re) || []).length || 0;
    }
//2) Best(4) https://www.codewars.com/kata/reviews/521916daf626d55cf8000236/groups/5290f5a2ba3417629b00058a
    function searchSubstr( fullText, searchText, allowOverlap ){
      if (allowOverlap === undefined) {
        allowOverlap = true;
      }
      if (searchText == '') {
        return 0;
      }

      var count = 0;
      var index = fullText.indexOf(searchText);
      while (index !== -1) {
        count++;
        if (allowOverlap) {
          index = fullText.indexOf(searchText, index + 1);
        } else {
          index = fullText.indexOf(searchText, index + searchText.length);
        }
      }
      return count;
    }
//3) Clever(24) !!Comment https://www.codewars.com/kata/reviews/521916daf626d55cf8000236/groups/53aa1a585f136177a60006a9
    function searchSubstr( t, s, o ){
      return(t.length===0||s.length===0)?0:t.match(new RegExp((o||(o==undefined))?"(?=("+s+"))":t,"g")).length;
    }
//4) Clever(3) https://www.codewars.com/kata/reviews/521916daf626d55cf8000236/groups/562b9846a388c9e7c00000d1
    function searchSubstr(haystack, needle, allowOverlap) {
      if (!needle)
        return 0;
      let s = RegExp.escape(needle);
      let re = new RegExp(allowOverlap ? `(?=${s})` : s, "g");
      return (haystack.match(re) || []).length;
    }
//#endregion


//#region 5019 (Ready for) Prime Time
/* 5019 (Ready for) Prime Time (https://www.codewars.com/kata/ready-for-prime-time)
Description
    We need prime numbers and we need them now!
    Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

    For example:
      prime(11);
    Should return an array that looks like this:
      [2, 3, 5, 7, 11]
*/

//My solution
    function isPrime(num) {
      let prime = true;

      for (let i = 2; i < num; i++) {  // i <= Math.sqrt(num)
        if (num % i === 0) {
          prime = false;
        }
      }

      return (num < 2) ? false : prime;
    }

    function prime(num) {
      // Generate an array containing every prime number between 0 and the num specified (inclusive)
      let primes = [];

      for (let i = 1; i <= num; i++) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }

      return primes;
    }

//Solution(s) I like(links):
//1) Best(13) & Clever(30) !!Comment https://www.codewars.com/kata/reviews/521ef597c106a935c000051c/groups/53d402ed2f2a213c9a000c94
    // Generate an array containing every prime number between 0 and the num specified (inclusive)
    function prime(num) {
      var primes = [];
      loop: for (var i = 2; i <= num; i++) {
        for (var j = 0; j <= primes.length; j++)
          if (i % primes[j] === 0) continue loop;
        primes.push(i);
      }
      return primes;
    }
//2) Best(6) Comment https://www.codewars.com/kata/reviews/521ef597c106a935c000051c/groups/539dea04a540dbd3cd000620
    function prime(num) {
      if (num < 2) return []
      var primes = [2]
      for (candidate = 3; candidate <= num; candidate++)
        if (primes.every(function (prime) { return candidate % prime !== 0 }))
          primes.push(candidate)
      return primes
    }
//3) Clever(4) https://www.codewars.com/kata/reviews/521ef597c106a935c000051c/groups/542873826f30afca93000e21
    function prime(n) {
      var arr = Array.apply(null, Array(n+1)).map(function (d,i) { return i })

      function isPrime(number) {
        if (number <= 1) return false

        var limit = number >> 1
        for (var i = 2; i <= limit; i++) {
          if (number % i === 0) return false
        }
        return true
      }

      return arr.filter(isPrime)
    }

//#endregion



//#region 5020 Game - Electrons around the cores
/* 5020 Game - Electrons around the cores (https://www.codewars.com/kata/game-electrons-around-the-cores/)
Description
  Have you heard of the game "electrons around the cores"? I'm not allowed to give you the complete rules of the game, just so much:

  the game is played with 4 to 6 dice, so you get an array of 4 to 6 numbers, each 1-6
  the name of the game is important
  you have to return the correct number five times in a row and your solution is considered to be correct
  If you just press "submit", you'll get an array and the expected value!

  Here are some input/output pairs for you to wrap your mind around:

    [ 1, 2, 3, 4, 5 ] -> 6
    [ 2, 2, 3, 3 ] -> 4
    [ 6, 6, 4, 4, 1, 3 ] -> 2
    [ 3, 5, 3, 5, 4, 2 ] -> 12
  And yes, it is a shameless copy of a famous game.
*/

//My solution
function electrons_around_the_cores( dice ){
  // Just so you can try some numbers
  return  dice.count(5) * 4 + dice.count(3) * 2;
}

Array.prototype.count = function(num) {
 let result = 0;
 for(let el in this) {
  if(this[el] === num) {
     result++;
   }
  }
  return result;
};

//Solution(s) I like(links):
//1) Best(3) https://www.codewars.com/kata/reviews/522107aab209efd4b6000112/groups/5417361e5c5c64ef910001ac
    function electrons_around_the_cores( dice ){
      var sum = 0;
      dice.forEach(function(value) {
        if (value%2 === 1) {
          sum += value - 1;
        }
      });

      return sum;
    }
//2) Best(3) https://www.codewars.com/kata/reviews/522107aab209efd4b6000112/groups/54f11f234507b26e5f000c43
    function electrons_around_the_cores( dice ){
      return dice.reduce(function(prevTotal, currentDie){
        //each die's score is how many dots are around the central dot
        currentDie = (currentDie == 3 || currentDie == 5) ? currentDie - 1 : 0;
        return prevTotal + currentDie;
      }, 0);
    }
//3) Clever(4) https://www.codewars.com/kata/reviews/522107aab209efd4b6000112/groups/53f601c4c0c45d986900c660
    function electrons_around_the_cores( dice ){
      return dice.reduce(function(s,d){ return s+d%2*(d-1) },0)
    }
//#endregion


//#region 5021 Sum of (Two) Squares
/* 5021 Sum of (Two) Squares (https://www.codewars.com/kata/sum-of-two-squares)
Description
    Sum of (Two) Squares
    We are asking for a function to take a positive integer value, and return a list of all positive integer pairs whose values - when squared- sum to the given integer.

    For example, given the parameter 25, the function could return two pairs of 5,0 and 3,4 because 5^2 + 0^2 = 25 and 3^2 + 4^2 = 25.

    We might express that in pseudo-code like this:

        allSquaredPairs(25) == [[5,0],[3,4]];
    Here are the requirements:

    The return value should be a two dimensional array of positive integer pairs in any order.
    A parameter value that is not the sum of any two squares should simply return an empty array
    We will consider 5,0 and 0,5 to be equal pairs, disregarding the order. Do not list the same pair twice.
    The upper bound of the parameter value will be 2,147,483,647
*/

//My solution
    function allSquaredPairs(num) {
      let [result,seen] = [[],{}];

      const limit = Math.ceil(Math.sqrt(num))

      for(let i = 0; i <= limit; i++){

        let diff = Math.sqrt(num - (i*i));


        if(!seen[diff] && diff === Math.floor(diff)){

          seen[diff] = seen[i] = true;

          result.push([i,diff]);
        }
      }
      return result;
    }

//Solution(s) I like(links):
//1) Best(6) https://www.codewars.com/kata/reviews/52217066578afbcc260002d3/groups/5358771e7762b19c3200030c
    function allSquaredPairs(num) {
      var pairs = [];
      for (var i = 0; i <= Math.sqrt(num/2); i++) {
        var j = Math.sqrt(num-i*i);
        if (j % 1 == 0) {
          pairs.push([i, j]);
        }
      }
      return pairs;
    }
//2) Best(4) https://www.codewars.com/kata/reviews/52217066578afbcc260002d3/groups/53b9715c0008b417d400073d
    function allSquaredPairs(num) {
      var solutions = [], max = Math.sqrt(num / 2);
      for (var a = 0; a <= max ; a++) {
        var b = Math.sqrt(num - a*a);
        if (b == (b | 0)) solutions.push([a,b]);
      }
      return solutions;
    }
//3) Bext(2) https://www.codewars.com/kata/reviews/52217066578afbcc260002d3/groups/5aa4023c7348a3551e0046dc
    function allSquaredPairs(num) {
      const pairs = [],
            root = Math.sqrt(num/2)

      for (i = 0; i <= root; i++) {
        const factor = Math.sqrt(num - (i*i))

        if (Number.isInteger(factor)) {
          pairs.push([i, factor])
        }
      }
    return pairs
    }

//#endregion

//#region 5022 Fibonacci Generator
/* 5022 Fibonacci Generator (https://www.codewars.com/kata/fibonacci-generator/)
Description
    Create a function generator genfib() that returns a function fib() which always returns the next fibonacci number on each invocation (and returns 0 when being called the first time).

    Example:

      var fib = genfib();
      fib(); // -> returns 0
      fib(); // -> returns 1
      fib(); // -> returns 1
      fib(); // -> returns 2
*/

//My solution
    function genfib(){
      let arr = [0, 1];
      let idx = 0;
      return function fib(){
        if(idx == 0){
          idx++;
          return 0;
        } else if(idx == 1){
          idx++;
          return 1;
        } else if(idx > 1){
          arr[idx] = arr[idx - 1] + arr[idx - 2];
          idx++;
          return arr[arr.length - 1];
        }
      }
    }


//Solution(s) I like(links):
//1) Best(14) & Clever(13) https://www.codewars.com/kata/reviews/522498c9906b0cfcb40001ff/groups/5381f877bb819aec2c0008c5
    function genfib(){
      var a = 1, b = 0;
      return function fib(){
        var c = a + b;
        a = b;
        b = c;
        return a;
      }
    }
//2) Best(5) https://www.codewars.com/kata/reviews/522498c9906b0cfcb40001ff/groups/5a4a0b4ba7c21c655400003b
    function *fibonacci(current = 0, next = 1) {
      while (true) {
        yield current;
        [current, next] = [next, current + next];
      }
    }

    function genfib() {
      const sequence = fibonacci();

      return function fib() {
        return sequence.next().value;
      }
    }
//3) Best(2) https://www.codewars.com/kata/reviews/522498c9906b0cfcb40001ff/groups/5c2b33bf0bf7e2000193c491
    function genfib(){
      let a = 1, b = 0;
      return function fib(){
        [a,b] = [b, b+a]
        return a;
      }
    }
//4) Clever(5) https://www.codewars.com/kata/reviews/522498c9906b0cfcb40001ff/groups/525f09ad91e2b860d30012d5
    function genfib(){
      var fibs = [0,1];
      return function fib(){
        fibs.push(fibs[0]+fibs[1]);
        return fibs.shift();
      }
    }
//5) Clever(3) https://www.codewars.com/kata/reviews/522498c9906b0cfcb40001ff/groups/559a883b832cf4411d00004d
    function genfib(){
      var a = 1, b = 0;

      return function() {
        return a = [b, b = a + b][0];
      };
    }
//#endregion


//#region 5023 uniq -c (UNIX style)
/* 50223 uniq -c (UNIX style) (https://www.codewars.com/kata/52250aca906b0c28f80003a1)
Description:
  Implement the uniq_c() function which behaves like the 'uniq -c' command in UNIX. It takes as input an array and returns an array in which all duplicate elements following each other have been reduced to one instance together with the number of times a duplicate elements occurred in the original array.

  Example:

    var input = ['a','a','b','b','c','a','b','c'];
    uniq_c(input); // -> returns [['a',2],['b',2],['c',1],['a',1],['b',1],['c',1]]
*/

//My solution
    function uniq_c(a){
      let prev = '';
      let result = [];
      let current = [];
      for (let i = 0; i < a.length; i++){
        if (a[i] !== prev){
          result.push(current.slice());
          prev = a[i];
          current = [a[i], 1];
        }
        else {
          current[1] = current[1] + 1;
        }
      }
      result.push(current.slice());
      result.shift();
      return result;
    }


//Solution(s) I like(links):
//1) Best(3) & Clever(1) https://www.codewars.com/kata/reviews/52250aca906b0c28f80003a4/groups/54e3adbbebe1e597d8001160
    function uniq_c(a){
      return !a.length ? [] : a.reduce(function (acc, x) {
        var last = acc[acc.length - 1];
        if (last[0] == x) { last[1]++; } else { acc.push([x, 1]); }
        return acc;
      }, [[a[0], 0]]);
    }
//2) Best(2) https://www.codewars.com/kata/reviews/52250aca906b0c28f80003a4/groups/59c31c4c4b02b0385e0018b6
    const uniq_c = arr => {
      if (arr.length === 0) { return []; }

      let result = [];
      let value = arr[0];
      let count = 1;

      for (let i = 1; i < arr.length; ++i) {
        if (arr[i] !== value) {
          result.push([value, count]);
          value = arr[i];
          count = 0;
        }
        ++count;
      }

      result.push([value, count]);
      return result;
    };
//3) Best(2) https://www.codewars.com/kata/reviews/52250aca906b0c28f80003a4/groups/545a89da61aa4c50c0000c2e
    function uniq_c(a) {
      var out = [];
      a.forEach(function(v) {
        if(out[out.length - 1] && out[out.length - 1][0] == v) out[out.length - 1][1]++;
        else out.push([v, 1]);
      });
      return out;
    }
//4) Clever(7) https://www.codewars.com/kata/reviews/52250aca906b0c28f80003a4/groups/53f64775c0c45dd140011545
    function uniq_c(a,b){return b=[],a.join('').replace(/(\w)\1*/g,function(c){b.push([c[0],c.length]);}),b;}
//5) Clever(3) https://www.codewars.com/kata/reviews/52250aca906b0c28f80003a4/groups/561b4aed8568c29c6e000019
    function uniq_c(a){
      return a.length == 0? [] : a.join('').match(/(.)\1*/g).map( x => [x[0],x.length]);
    }
//6) Clever(3) https://www.codewars.com/kata/reviews/52250aca906b0c28f80003a4/groups/537e2b8c989c7021820006df
    function uniq_c(a){
      return a.reduce(function(a,b,ind,arr){
        if (a.length && a[a.length -1][0] == b) {
          a[a.length - 1][1]++;
        } else {
          a.push([b, 1]);
        }
        return a;
      }, []);
    }
//#endregion
