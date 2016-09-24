const app = "I don't do much."

function destructivelyAppendKitten(newKitten) {
  kittens.push(newKitten);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyPrependKitten(newKitten) {
  kittens.unshift(newKitten);
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(newKitten) {
  var newArray = [...kittens, newKitten]
  return newArray;
}

function prependKitten(newKitten) {
  var newArray = [newKitten, ...kittens]
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0,2)
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(-2)
  return newArray;
}
