const app = "I don't do much.";

function destructivelyAppendKitten(updateElement) {
  kittens.push(updateElement);
}

function destructivelyPrependKitten(updateElement) {
  kittens.unshift(updateElement);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(newName) {
  var newArray = kittens.slice();

  newArray.push(newName);
  return newArray;
}

function prependKitten(newName) {
  var newArray = kittens.slice();

  newArray.unshift(newName);
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice();

  newArray.pop();
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice();

  newArray.shift();
  return newArray;
}