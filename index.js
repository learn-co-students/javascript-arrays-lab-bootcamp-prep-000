var kittens = [] //define your array here

// Add your functions and code here
kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var cats = [...kittens, name]
  return cats;
}

function prependKitten(name) {
  var cats = [name, ...kittens]
  return cats;
}

function removeLastKitten() {
 var kats = kittens.slice(0, kittens.length -1)
 return kats;
}

function removeFirstKitten() {
  var kats = kittens.slice(1,3)
  return kats;
}