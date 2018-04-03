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
