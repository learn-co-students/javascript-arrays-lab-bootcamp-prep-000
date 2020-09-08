var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(element) {
  kittens.push(element);
  return kittens
}

function destructivelyPrependKitten(element) {
  kittens.unshift(element);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(element) {
  return kittens.concat(element);
}

function prependKitten(element) {
  element = [element];
  return element.concat(kittens);
}

function removeLastKitten() {
  var len = kittens.length;
  return kittens.slice(0,len-1);
}

function removeFirstKitten() {
  var len = kittens.length;
  return kittens.slice(1);
}