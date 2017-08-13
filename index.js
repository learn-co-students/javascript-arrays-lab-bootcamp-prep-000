const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop("Garfield");
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift("Milo");
  return kittens
}
function appendKitten(name) {
  var appNewKittens = [...kittens, "Broom"];
  return appNewKittens
}
function prependKitten(name) {
  var preNewKittens = ["Arnold", ...kittens];
  return preNewKittens
}
function removeLastKitten(name) {
  var byeLastKitten = kittens.slice(0, kittens.length - 1);
  return byeLastKitten
}
function removeFirstKitten(name) {
  var byeFirstKitten = kittens.slice(1);
  return byeFirstKitten
}
