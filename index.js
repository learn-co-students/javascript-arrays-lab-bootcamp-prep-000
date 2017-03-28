const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}

function appendKitten(name) {
  const newKittens = [...kittens, name]
  return newKittens;
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten(name) {
  const newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens;
}

function removeFirstKitten(name) {
  const newKittens = kittens.slice(1, kittens.length)
  return newKittens;
}
