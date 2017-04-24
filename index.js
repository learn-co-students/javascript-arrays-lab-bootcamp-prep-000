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

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name) {
  var aKittenOnTheEnd = [...kittens, "Broom"];
  return aKittenOnTheEnd
}

function prependKitten(name) {
  var aKittenAtTheFront = ["Arnold", ...kittens];
  return aKittenAtTheFront
}

function removeLastKitten() {
  var lastKittenGone = kittens.slice(0, kittens.length-1);
return lastKittenGone
}

function removeFirstKitten() {
  var firstKittenGone = kittens.slice(1);
  return firstKittenGone
}
