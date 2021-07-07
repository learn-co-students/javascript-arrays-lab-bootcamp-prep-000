var kittens = ["Milo", "Otis", "Garfield"] 

// Add your functions and code here


function destructivelyAppendKitten(name){
  kittens.push(name);
}


function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
 
 function destructivelyRemoveLastKitten(){
  kittens.pop();
  }

function destructivelyRemoveFirstKitten(){
   kittens.shift();
  }

  function appendKitten(name){
  var newArr = kittens.slice(0);
  newArr.push(name);
  return newArr;
  }

 function prependKitten(name){
    var newArr = kittens.slice(0);
    newArr.unshift(name);
    return newArr;
  }

function removeLastKitten(){
  var len = kittens.length - 1;
  var newArr = kittens.slice(0,len);
  return newArr;
  }

function removeFirstKitten(){
  var newArr = kittens.slice(1);
  return newArr;
    }