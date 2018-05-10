const app = "I don't do much."
var kittens = [
  'Milo',
  'Otis',
  'Garfield'
  ];
  
  
function destructivelyAppendKitten(name) {
  var newKittens = kittens.push(name);
  return newKittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
}
function appendKitten(name) {
  
}

function appendKitten(name) {
 var otherKittens = [...kittens, name];
  return otherKittens;
}

function prependKitten(name) {
  var moreKittens = [name,...kittens];
  return moreKittens;
}

function removeLastKitten() {
  var soManyCats = kittens.slice(0, kittens.length-1);
  return soManyCats;
}

function removeFirstKitten() {
  var noMoreCats = kittens.slice(1);
  return noMoreCats;
}