var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  var newKittens = kittens.unshift(name);
  return newKittens;
}
function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}
function destructivelyRemoveFirstKitten() {
  var newArr = kittens.shift();
  return newArr;
}
function appendKitten(name) {
  var moreKittens = [...kittens, name];
return moreKittens;
}
function prependKitten(name) {
  var moreKittens = [name, ...kittens];
return moreKittens;
}
function removeLastKitten() {
  var lessKittens = kittens.slice(0, kittens.length - 1);
  return lessKittens;
}
function removeFirstKitten() {
  var firstBorn = kittens.slice(1);
  return firstBorn;
}
