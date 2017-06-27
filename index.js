// const app = "I don't do much."

// const app = ["Milo", "Otis", "Garfield"]


// var Arrays = ["Milo", "Otis", "Garfield"]

var Arrays = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}

//
// destructivelyAppendKitten('Ralph')
//
//
// destructivelyAppendKitten('Ralph')

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var appendedKitten = [...kittens, name];
  return appendedKitten;
}

function prependKitten(name) {
  var prependedKitten = [name, ...kittens];
  return prependedKitten;
}

function removeLastKitten(name) {
  var removedLastKitten = Array.from(kittens)
  removedLastKitten.pop()
  // var removedLastKitten = kittens.pop();
  // removedLastKitten.pop();
  return removedLastKitten;
}

function removeFirstKitten(name) {
  var removedFirstKitten = kittens.slice(1);
  return removedFirstKitten;
}
