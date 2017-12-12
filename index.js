const app = "I don't do much."

function destructivelyAppendKitten(array){
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(array){
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten(array){
  kittens.pop("Garfield");
  return kittens
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift("Milo");
  return kittens
}

function appendKitten(array) {
  var kittens2 = [...kittens, "Broom"]
  return kittens2
}

function prependKitten(array) {
  var kittens2 = ["Arnold", ...kittens]
  return kittens2
}

function removeLastKitten(array) {
  var kittens2 = kittens.slice(0, kittens.length - 1);
  return kittens2
}

function removeFirstKitten(array) {
  var kittens2 = kittens.slice(1);
  return kittens2
}
