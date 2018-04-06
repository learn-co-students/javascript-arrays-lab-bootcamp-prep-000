const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  var name= "Ralph";
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  var name= "Bob";
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  var name= "Garlfield";
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten() {
  var name= "Milo";
  return kittens.shift(name);
}

function appendKitten(name) {
  var name= "Broom";
  var array= [...kittens, name]
  return array
}

function prependKitten(name) {
  var name= "Arnold";
  var array= [name, ...kittens]
  return array
}


function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}