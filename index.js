const app = "I don't do much."
let kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(newKitten) {
  return kittens.push(newKitten);
}
function destructivelyPrependKitten(addKitten) {
  return kittens.unshift(addKitten);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(newKitten) {
  return [...kittens, newKitten];
}

function prependKitten(newKitten) {
  return [newKitten, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
