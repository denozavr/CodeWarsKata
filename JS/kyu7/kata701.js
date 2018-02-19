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
