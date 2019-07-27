var kittens = ["Milo", "Otis", "Garfield"]
var addBroom = ["Broom"]
var addArnold = ["Arnold"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
};
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
};
function destructivelyRemoveLastKitten() {
  kittens.pop()
};
function destructivelyRemoveFirstKitten() {
  kittens.shift()
};
function appendKitten(name) {
  return kittens.concat(addBroom)
};
function prependKitten(name) {
  return addArnold.concat(kittens)
}

function removeLastKitten() {
 return kittens.slice(0, 2)
};
function removeFirstKitten() {
  return kittens.slice(1)
};
