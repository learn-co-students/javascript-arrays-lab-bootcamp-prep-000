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
  var inputArray = [name];
  var newKittens = kittens.concat(inputArray);
  return newKittens;
}

function prependKitten(name) {
  var inputArray = [name];
  var newKittens = inputArray.concat(kittens);
  return newKittens; 
}

function removeLastKitten() {
  var arr = kittens;
  arr = arr.slice(0,arr.length-1);
  return arr;
}

function removeFirstKitten() {
  var arr = kittens;
  arr = arr.slice(1);
  return arr;
}
