var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}
function appendKitten(name){
  var myKittens = [name]
var allKittens = kittens.concat(myKittens);
return allKittens;
}
function prependKitten(name) {
  var myKittens = [name]
var allKittens = myKittens.concat(kittens);
return allKittens;
}
function removeLastKitten() {
  var myKittens = kittens.slice(kittens, kittens.length - 1);
  return myKittens;
}
function removeFirstKitten(){
  var myKittens = kittens.slice(1, kittens.length)
  return myKittens;
}