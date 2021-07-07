//define your array here
var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here

//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){  
  
  kittens.push(name);
  
}

//prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name){  

  kittens.unshift(name);
  
}

//removes the last kitten from the kittens array
function destructivelyRemoveLastKitten(){  

  kittens.pop()

}

//removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten(){  

  kittens.shift()

}

//appends a kitten to the end of the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name){

  var moreKittens=[...kittens, name];
  return moreKittens;

}

//prepends a kitten to the beginning of the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){

  var otherKittens=[ name,...kittens];
  return otherKittens;

}

//removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(){

  return kittens.slice(0, kittens.length-1)

}

//removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten(){

  return kittens.slice(1)

}
