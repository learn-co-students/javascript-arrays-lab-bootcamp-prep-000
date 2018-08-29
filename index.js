function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
}
function destructivelyAppendKitten() {
  kittens.push('Ralph')
}
function destructivelyPrependKitten() {
  kittens.unshift('Bob')
}
function destructivelyRemoveLastKitten() {
  kittens.pop('Garfield')
}
function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo')
}
function appendKitten(name) {
  return [...kittens, 'Broom']
}
function prependKitten(name) {
  return ['Arnold',...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, 2)
}
function removeFirstKitten() {
  return kittens.slice(-2)
}
