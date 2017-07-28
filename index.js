const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(name) {
  var array = []
  array = [...kittens, name]
  return array
}
function prependKitten(name){
  var array = [];
    return array = [name ,...kittens]
}
function removeLastKitten() {
  var array = [];
  array = kittens.slice(0, kittens.length -1)
  return array
}
function removeFirstKitten(){
  var array = [];
  array = kittens.slice(1)
  return array
}
