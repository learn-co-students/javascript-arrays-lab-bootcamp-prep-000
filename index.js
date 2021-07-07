var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.splice(0,0,name);
}
function destructivelyRemoveLastKitten() {
  kittens.splice(2,1);
}
function destructivelyRemoveFirstKitten() {
  kittens.splice(0,1);
}
function appendKitten(name) {
  var test = kittens.concat(name);
  return test
}
function prependKitten(name) {
  var newKittens = [name,...kittens]
  return newKittens;
}
function removeLastKitten() {
  var test = kittens.slice(0,2);
  return test;
}
function removeFirstKitten() {
  var test = kittens.slice(1,3);
  return test;
}