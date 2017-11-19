var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}
function appendKitten(name) {
 var kittensNew = [...kittens, name]
  return kittensNew
}
function prependKitten(name) {
  var kittensNew = [name, ...kittens]
  return kittensNew
}
function removeLastKitten() {
  var kittensNew = kittens.slice(0,kittens.length - 1)
  return kittensNew
}
function removeFirstKitten() {
  var kittensNew = kittens.slice(1)
  return kittensNew
}