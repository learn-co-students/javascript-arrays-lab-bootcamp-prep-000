const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name){
  var arr = [...kittens, name];
  return arr;
}

function prependKitten(name){
  var arr = [name, ...kittens];
  return arr;
}

function removeLastKitten() {
  var arr = kittens.slice(0, kittens.length - 1);
  return arr;
}

function removeFirstKitten() {
  var arr = kittens.slice(1);
  return arr;
}
