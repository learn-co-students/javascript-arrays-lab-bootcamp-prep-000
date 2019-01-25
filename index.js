var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push(name);
  }
  
  function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
  }
  
  function destructivelyRemoveLastKitten() {
    return kittens.pop();
  }
  
  function destructivelyRemoveFirstKitten() {
    return kittens.shift();
  }
  
  function appendKitten(name) {
  var arr = kittens.slice();
  arr.push(name);
  return arr;
  }
  
  function prependKitten(name) {
    var arr = kittens.slice();
    arr.unshift(name);
    return arr;
  }
  
  function removeLastKitten()  {
    var arr = kittens.slice();
    arr.pop();
    return arr;
    }
    
    function removeFirstKitten() {
      var arr = kittens.slice();
      arr.shift();
      return arr;
    }
  