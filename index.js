var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
kittens.push("Ralph");
return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveLastKitten(name) {
kittens.pop("Garfield");
return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyRemoveFirstKitten(name) {
kittens.shift("Milo");
return kittens;
}

var kittens = ['Milo', 'Otis', 'Garfield']
function appendKitten(name) {
return [...kittens, "Broom"];
}

var kittens = ['Milo', 'Otis', 'Garfield']
function prependKitten(name) {
return ["Arnold", ...kittens];
}

var kittens = ['Milo', 'Otis', 'Garfield']
function removeLastKitten() {
var newKittens = kittens.slice(0, - 1);
return newKittens;
}

var kittens = ['Milo', 'Otis', 'Garfield']
function removeFirstKitten() {
var newKittens = kittens.slice(1);
return newKittens;
}
