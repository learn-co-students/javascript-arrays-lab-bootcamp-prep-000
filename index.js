var kittens= [
  "Milo",
  "Otis",
  "Garfield",
]
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
  appendKitten=[...kittens, name];
  return appendKitten
}
function prependKitten(name) {
  prependKitten=[name,...kittens];
  return prependKitten
}
function removeLastKitten(){
  removeLastKitten=kittens.slice(0,kittens.length -1);
  return removeLastKitten
}
function removeFirstKitten(){
  removeFirstKitten=kittens.slice(1);
  return removeFirstKitten
}
