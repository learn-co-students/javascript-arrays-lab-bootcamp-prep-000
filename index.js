const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
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
  var myArray = [...kittens, name];
  return myArray;
}

function prependKitten(name) {
  var myArray = [name, ...kittens];
  return myArray;
}

function removeLastKitten() {
  var myArray = [...kittens];
  myArray.pop();
  return myArray;
}

function removeFirstKitten() {
  var myArray = [...kittens];
  myArray.shift();
  return myArray;
}
