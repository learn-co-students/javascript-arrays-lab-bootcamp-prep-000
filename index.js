const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens;
}
function appendKitten(name) {
  var cat = kittens.slice()
  cat.push(name)
  return cat
}
function prependKitten(name) {
  var cat = kittens.slice()
  cat.unshift(name)
  return cat;
}
function removeLastKitten() {
  var cat = kittens.slice()
  cat.pop()
  return cat;
}
function removeFirstKitten() {
  var cat = kittens.slice()
  cat.shift()
  return cat;
}