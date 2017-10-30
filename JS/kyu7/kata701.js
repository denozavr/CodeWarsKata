/*001 getNames() (https://www.codewars.com/kata/getnames/train/javascript)
Description: 
The following code is not giving the expected results. Can you figure out what the issue is?

The following is an example of data that would be passed in to the function.
*/
  var data = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
  ]
  getNames(data) // should return ['Joe', 'Bill', 'Kate']


//My solution
  //add return before item.name  
  function getNames(data){
    //return data.map(function(item){return item.name});
    return data.map( (item) => (item.name) );
  }
  
//Solution(s) I like(links):
//1) http://bit.ly/2zeN57D
  const getNames = arr => arr.map(i => i.name)  