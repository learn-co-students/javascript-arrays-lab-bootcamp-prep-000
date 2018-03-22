const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  let newArray = [...kittens]
  newArray.pop();
  return newArray;
}

function removeFirstKitten() {
  let newArray = [...kittens]
  return newArray.slice(1);
}