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
