const app = "I don't do much."

function destructivelyAppendKitten (element) {
  kittens.push(element);
}

function destructivelyPrependKitten (element) {
  kittens.unshift(element);
}

function destructivelyRemoveLastKitten (element) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten (element) {
  kittens.shift();
}

function appendKitten (element) {
  var array = kittens.slice(0);
  array.push(element);
  return array;
}

function prependKitten (element) {
  var array = kittens.slice(0);
  array.unshift(element);
  return array;
}

function removeLastKitten (element) {
  var array = kittens.slice(0);
  array.pop();
  return array;
}

function removeFirstKitten (element) {
  var array = kittens.slice(0);
  array.shift();
  return array;
}
