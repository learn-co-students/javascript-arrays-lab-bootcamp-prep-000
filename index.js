var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
var newKittens = [...kittens, name];
  return newKittens
}
function prependKitten(name) {
var newKittens = [name,...kittens];
  return newKittens
}
function removeLastKitten(name) {
var n = kittens.length -1
return kittens.slice(0,n)
}
function removeFirstKitten(name) {
  kittens.slice(1)
  return kittens.slice(1)
}
