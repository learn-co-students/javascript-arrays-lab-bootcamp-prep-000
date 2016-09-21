const app = "I don't do much."

var destructivelyAppendKitten = function(name) {
  return kittens.push(name);
}

var destructivelyPrependKitten = function(name) {
  return kittens.unshift(name);
}

var destructivelyRemoveLastKitten = function(name){
  return kittens.pop(name);
}

var destructivelyRemoveFirstKitten = function(name) {
    return kittens.shift(name);
}

var appendKitten = function(name) {
  var newKitten = [...kittens,name];
  return newKitten
}

var prependKitten = function(name) {
  var newKitten = [name,...kittens];
  return newKitten
}

var removeLastKitten = function() {
  var newKitten = kittens.slice(0,kittens.length - 1);
  return newKitten
}

var removeFirstKitten = function() {
  var newKitten = kittens.slice(1);
  return newKitten
}
