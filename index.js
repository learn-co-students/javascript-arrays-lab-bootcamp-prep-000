const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

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
  var newarr = [...kittens, name];
  return newarr;
}

function prependKitten(name) {
  var newarr = [name, ...kittens];
  return newarr;
}

function removeLastKitten() {
  var newarr = kittens.slice(0, kittens.length - 1);
  return newarr;
}

function removeFirstKitten() {
    var newarr = kittens.slice(1);
    return newarr;
}
