var kittens = ["Milo", "Otis", "Garfield"]
var kitty = "Ralph"
var kit = "Snow"
function destructivelyAppendKitten(kitty) {
  return kittens.push(kitty);
}
function destructivelyPrependKitten(kitty) {
  return kittens.unshift(kitty);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
function appendKitten(kit) {
  return [...kittens, kit];
}
function prependKitten(kit) {
  return [kit, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0,2)
}
function removeFirstKitten() {
  return kittens.slice(1)
}
