var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name1) {
  kittens.push(name1)
}
kittens = ["Milo","Otis","Garfield"]
function destructivelyPrependKitten(name2) {
  kittens.unshift(name2)
}
kittens = ["Milo","Otis","Garfield"]
function destructivelyRemoveLastKitten(name3) {
  kittens.pop(name3)
}
kittens = ["Milo","Otis","Garfield"]
function destructivelyRemoveFirstKitten(name4) {
  kittens.shift(name4)
}
kittens = ["Milo","Otis","Garfield"]
function appendKitten(name5) {
  return [...kittens, name5]
}
kittens = ["Milo","Otis","Garfield"]
function prependKitten(name6) {
  return [name6, ...kittens]
}
kittens = ["Milo","Otis","Garfield"]
function removeLastKitten() {
  return kittens.slice(0,kittens.length-1)
}
kittens = ["Milo","Otis","Garfield"]
function removeFirstKitten() {
  return kittens.slice(1)
}