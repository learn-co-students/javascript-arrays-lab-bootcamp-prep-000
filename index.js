const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens = [name].concat(kittens)
  return kittens;
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}



function prependKitten(name) {
  var a = [name].concat(kittens);
  return a;
}



function appendKitten(name) {
  var k = kittens.slice();
  k.push(name)
  return k;
}
function removeLastKitten() {
  var a = kittens.slice();
  a.pop()
  return a;
}

function removeFirstKitten() {
  let a = kittens.slice();
  a.shift();
  return a;
}
