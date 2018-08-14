function destructivelyAppendKitten (name) {
  kittens.splice(3,0,name)
}
function destructivelyPrependKitten(name) {
  kittens.splice(0,0,name)
}
function destructivelyRemoveLastKitten() {
   kittens.splice(2,1)
}
function destructivelyRemoveFirstKitten() {
   kittens.splice(0,1)
}
function appendKitten(name) {
  return kittens.concat(name)
}
function prependKitten(name) {
  return [name].concat(kittens)
}
function removeLastKitten() {
return kittens.slice(0,kittens.length -1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}