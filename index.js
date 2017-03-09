const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(cat) {
  var catArr1 = kittens.push(cat);
  return catArr1;
}

function destructivelyPrependKitten(name) {
  var catArr2 = kittens.unshift(name);
  return catArr2;
}

function destructivelyRemoveLastKitten() {
  var catArr3 = kittens.pop();
  return catArr3;
}

function destructivelyRemoveFirstKitten() {
  var catArr4 = kittens.shift();
  return catArr4;
}

function appendKitten(name) {
  return [...kittens,name];
}

function prependKitten(name) {
  return [name,...kittens];
}

function removeLastKitten() {
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
