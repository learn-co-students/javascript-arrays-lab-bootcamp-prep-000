// Add your functions and code here

var kittens = [
  'Milo',
  'Otis',
  'Garfield',
  ]
  
function destructivelyAppendKitten(name) {
  var myKittens = kittens;
  myKittens.push(name);
  return myKittens;
}

function destructivelyPrependKitten(name) {
  var myKittens = kittens;
  myKittens.unshift(name);
  return myKittens;
}

function destructivelyRemoveLastKitten() {
  var myKittens = kittens;
  myKittens.pop();
  return myKittens;
}

function destructivelyRemoveFirstKitten() {
  var myKittens = kittens;
  myKittens.shift();
  return myKittens;
}

function appendKitten(name) {
  var myKittens = kittens;
  const moreKittens = [...myKittens, name];
  return moreKittens;
}

function prependKitten(name) {
  var myKittens = kittens;
  const moreKittens = [name, ...myKittens];
  return moreKittens;
}

function removeLastKitten() {
  var myKittens = kittens;
  const lessKittens = myKittens.slice(0, myKittens.length - 1);
  return lessKittens;
}

function removeFirstKitten() {
  var myKittens = kittens;
  const lessKittens = myKittens.slice(1);
  return lessKittens;
}