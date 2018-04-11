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
