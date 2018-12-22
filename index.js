var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten() {
  kittens.push('Ralph');
}

function destructivelyPrependKitten () {
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(){
  var moreKittens = [...kittens, "Broom" ];
  return moreKittens;
}

function prependKitten(){
  var firstKitten = ["Arnold", ...kittens];
  return firstKitten;
}

function removeLastKitten() {
  var lastKitten = kittens.slice(0,2);
  return lastKitten;
}

function removeFirstKitten() {
  var firstKitten = kittens.slice(1);
  return firstKitten;
}