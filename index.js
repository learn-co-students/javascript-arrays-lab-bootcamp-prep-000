const app = "I don't do much."
function destructivelyAppendKitten(name) {
  //use push
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  //use unshift
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  //use pop
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  //use shift
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  //use [...kittens, name]
  var newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name) {
  //use [name, ...kittens]
  var newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten() {
  //use slice(0, kittens.length -1)
  var newArray = kittens.slice(0, kittens.length -1);
  return newArray;
}

function removeFirstKitten() {
  //use slice(1)
  var newArray = kittens.slice(1);
  return newArray;
}
