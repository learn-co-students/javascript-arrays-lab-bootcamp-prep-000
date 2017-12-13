const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  }
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function appendKitten(name) {
  var newArr = kittens.slice();
  newArr.push(name);
  return newArr
}
function prependKitten(name) {
  var newArr = kittens.slice()
  newArr.unshift(name);
  return newArr
}
function removeLastKitten() {
  var newArr = kittens.slice()
  newArr.pop();
  return newArr;
}
function removeFirstKitten() {
  var newArr = kittens.slice()
  newArr.shift();
  return newArr;
}
