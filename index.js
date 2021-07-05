var kittens = [] //define your array here

// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  return kittens.concat([name]);
}
function prependKitten(name){
  return [name].concat(kittens);// [name] is the way to put the array in front //of the concat
}
function removeLastKitten(name){
  return kittens.slice(0,-1);
}
//use 0 to indicate the up until the last one, insted of just -1 which removes //only the last item
  // function removeLastKitten(name){
  //return kittens.slice(kittens.length-1);
  // wiil work on any length of array, and it will always to return the last //item
//}wiil work on any length of array, and it will always to return the last //item
function removeFirstKitten(){
  return kittens.slice(1);
}
// slice the item up intil 1 and return everything else in the array