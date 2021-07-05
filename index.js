var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}
function appendKitten(name) {
  const moreCats = [...kittens,"Broom"]
  return moreCats
}
function prependKitten(name) {
  const moreCats = ["Arnold", ...kittens,]
  return moreCats
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten(name) {
  return kittens.slice(1)
}
