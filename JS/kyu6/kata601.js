/*601 Multiples of 3 and 5 (https://www.codewars.com/kata/multiples-of-3-and-5/train/csharp)
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



/*602 Extract the IDs from the data set (https://www.codewars.com/kata/multiples-of-3-and-5/train/csharp)
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
