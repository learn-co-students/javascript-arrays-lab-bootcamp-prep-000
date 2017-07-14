const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var newArr = [...kittens, name];
  return newArr;
}

function prependKitten(name) {
  var newArr = [name, ...kittens];
  return newArr;
}

function removeLastKitten() {
  var newArr = [...kittens];
  newArr.pop();
  return newArr;
}

function removeFirstKitten() {
  var newArr = [...kittens];
  newArr.shift();
  return newArr;
}
