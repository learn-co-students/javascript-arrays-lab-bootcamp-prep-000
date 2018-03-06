const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(Buttons) {
  kittens.push(Buttons);
  return kittens
}

function destructivelyPrependKitten(Fluffy) {
  kittens.unshift(Fluffy)
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
}

function appendKitten(Scratches) {
  return [...kittens, Scratches];
}

function prependKitten(Meowington) {
  return [Meowington, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
