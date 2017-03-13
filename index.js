const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  //var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.push(name);
  return kittens;
}
kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyPrependKitten(name) {
  //var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.unshift(name);
  return kittens;
}
kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveLastKitten() {
  //var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.pop();
  return kittens;
}
kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyRemoveFirstKitten() {
  //var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.shift();
  return kittens;
}

kittens = ['Milo', 'Otis', 'Garfield'];
function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

kittens = ['Milo', 'Otis', 'Garfield'];
function prependKitten(name) {
  //  var kittens = ['Milo', 'Otis', 'Garfield'];
   var newKittens = [name, ...kittens];
   return newKittens;
 }
kittens = ['Milo', 'Otis', 'Garfield'];
function removeLastKitten() {
  //var kittens = ['Milo', 'Otis', 'Garfield'];
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
}
kittens = ['Milo', 'Otis', 'Garfield'];
function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}
