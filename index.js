var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten () {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
  return kittens;
}

function appendKitten (name) {
  var newElement = [name];
  var newKittens = kittens.concat(newElement);
  return newKittens;
}

function prependKitten (name) {
  var newElement = [name];
  var newKittens = newElement.concat(kittens);
  return newKittens;
}

function removeLastKitten () {
  var newKittens = kittens.slice(0,-1);
  return newKittens;
}

function removeFirstKitten () {
  var newKittens = kittens.slice(1);
  return newKittens;
}