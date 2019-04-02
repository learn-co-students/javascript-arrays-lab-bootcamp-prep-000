var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

var destructivelyAppendKitten = function(newCat) {
  kittens.push(newCat);
  return kittens;
}

var destructivelyPrependKitten = function(newCat) {
  kittens.unshift(newCat);
  return kittens
}

var destructivelyRemoveLastKitten = function() {
  kittens.pop();
  return kittens;
}

var destructivelyRemoveFirstKitten = function() {
  kittens.shift();
  return kittens;
}

var appendKitten = function(newCat) {
  let newKittens = [...kittens, newCat];
  return newKittens;
}

var prependKitten = function(newCat) {
  let newKittens = [newCat, ...kittens];
  return newKittens;
}

var removeLastKitten = function() {
  let newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}

var removeFirstKitten = function() {
  let newKittens = kittens.slice(1);
  return newKittens;
}
