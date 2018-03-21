const app = "I don't do much.";

var kittens = ['Milo', 'Otis', 'Garfield'];

//1 
function destructivelyAppendKitten(name) {
  kittens.push(`${name}`);
  return kittens;
}

//2 
function destructivelyPrependKitten(name) {
  kittens.unshift(`${name}`);
  return kittens;
}

//3 
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

//4 
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

//5
function appendKitten(name) {
  var appendKitten = [...kittens, `${name}`];
  return appendKitten;
}

//6 
function prependKitten(name) {
  var prependKitten = [`${name}`, ...kittens];
  return prependKitten;
}

//7 
function removeLastKitten() {
  var removeLastKitten = kittens.slice(0, kittens.length - 1);
  return removeLastKitten;
}

//8 
function removeFirstKitten() {
  var removeFirstKitten = kittens.slice(1);
  return removeFirstKitten;
}
