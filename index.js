const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var name1 = [...kittens, name]
  return name1
}

function prependKitten(name) {
  var name1 = [name, ...kittens]
  return name1
}

function removeLastKitten() {
  var kittensbad = kittens.slice(0, kittens.length - 1);
  return kittensbad
}

function removeFirstKitten() {
  var kitt = kittens.slice(1)
  return kitt
}
