//Array destructivelyAppendKitten(name) appends a kitten to the end of
//the kittens array
var kittens = ["Milo", "Otis", "Garfield"]
//var kittens = new Array("Milo", "Otis", "Garfield");
//function destructivelyAppendKitten(name) {  
//  blah = name;
//  //name = ["Milo", "Otis"];//, "Garfield"];
  //Array.prototype.push.apply(name, "Ralph");
  //name.push("Ralph");
  //return name
function destructivelyAppendKitten() { 
  kittens.push("Ralph");
}


//Array destructivelyPrependKitten(name) prepends a kitten to the beginning
//of the kittens array
function destructivelyPrependKitten() {
  kittens.unshift("Bob");
}

//Array destructivelyRemoveLastKitten() removes the last kitten from the kittens
//array
function destructivelyRemoveLastKitten() {
  kittens.pop();
}

//Array destructivelyRemoveFirstKitten() removes the first kitten from the
//kittens array 
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

//Array appendKitten(name) appends (adds at the end) a kitten to the kittens array and returns 
//a new array, leaving the kittens array unchanged
function appendKitten() {
  var lastKitten = [...kittens, "Broom"]
  return lastKitten
}

//Array prependKitten(name) prepends (adds at the beginning) a kitten to the kittens array and returns
//a new array, leavinf the kittens array unchanged
function prependKitten() {
  var firstKitten = ["Arnold", ...kittens]
  return firstKitten
}

//Array removeLastKitten() removes the last kitten in the kittens array and returns 
//a new array, leaving the kittens array unchanged
function removeLastKitten() {
  var noLastKitten = kittens.slice(0, 2)
  return noLastKitten
}

//Array removeFirstKitten() removes the first kitten from the kittens array 
//and retrurns a new array, leaving the kittens array unchanged
function removeFirstKitten() {
  var noFirstKitten = kittens.slice(1)
  return noFirstKitten 
}