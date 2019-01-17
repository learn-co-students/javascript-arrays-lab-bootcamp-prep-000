var kittens = ["Milo", "Otis", "Garfield"] // var kittensString = "foo"

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
kittens.unshift(name);
return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray;
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(name) {
  return kittens.slice(1);
}// Add your functions and code here
