var kittens = [ "Milo", "Otis", "Garfield" ] //define your array here
// Add your functions and code here
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
  var moreKittens = [ "Broom" ];
  return kittens.concat(moreKittens);
}

function prependKitten(name) {
  var moreKittens = [ "Arnold" ]
  return moreKittens.concat(kittens);
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
