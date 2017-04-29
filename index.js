const app = "I don't do much."
const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(x) {
  kittens.push(x);
  return kittens
}

function destructivelyPrependKitten(x) {
  kittens.unshift(x);
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(x) {
  const newKit = [...kittens, x];
  return newKit
}

function prependKitten(x) {
  const newKit = [x, ...kittens];
  return newKit
}

function removeLastKitten() {
  const newKit = kittens.slice(0,kittens.length-1);
  return newKit
}

function removeFirstKitten() {
  const newKit = kittens.slice(1)
  return newKit
}
