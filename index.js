const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
function appendKitten(name) {
  var array = [...kittens, name];
  return array
}
function prependKitten(name) {
  var array = [name, ...kittens];
  return array
}
function removeLastKitten() {
  var array = [...kittens];
  function remove() {
    array.pop();
  }
  remove()
  return array
}
function removeFirstKitten() {
  var array = [...kittens]
  function remove() {
  array.shift()
  }
  remove()
  return array
}
