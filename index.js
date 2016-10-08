const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten);
}

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(kitten) {
  //var array = kittens.slice();
  //array.push(kitten)
  //return array;
  var array = [...kittens, kitten];
  return array;
}

function prependKitten(kitten) {
  var array = kittens.slice()
  array.unshift(kitten)
  return array;
}

function removeLastKitten(kitten) {
  var array = kittens.slice();
  array.pop(kitten);
  return array;
}

function removeFirstKitten(kitten) {
  var array = kittens.slice();
  array.shift(kitten);
  return array;
}
