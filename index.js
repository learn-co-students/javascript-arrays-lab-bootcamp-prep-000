function destructivelyAppendKitten(name) {
    kittens.push(name)
    // not necessary? return kittens
}

function destructivelyPrependKitten(name) {
    kittens.unshift(name)
    // not necessary? return kittens
}

function destructivelyRemoveLastKitten() {
    kittens.pop()
    // not necessary? return kittens
}

function destructivelyRemoveFirstKitten() {
    kittens.shift()
    // not necessary? return kittens
}

function appendKitten(name) {
    // not necessary? var newKittens = [...kittens, name]
    return [...kittens, name]
}

function prependKitten(name) {
    // not necessary? var newKittens = [name, ...kittens]
    return [name, ...kittens]
}

function removeLastKitten() {
    // not necessary? var newKittens = kittens.slice(0, kittens.length - 1)
    return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
    // not necessary? var newKittens = kittens.slice(1)
    return kittens.slice(1)
}














/*const app = "I don't do much."

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
  var newArray = [...kittens, name];
  return newArray
}

function prependKitten(name) {
  var newArray = [name, ...kittens];
  return newArray
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray
}

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray
}
*/
