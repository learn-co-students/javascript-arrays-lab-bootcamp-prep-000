//const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  //var kittens = ["Milo", "Otis", "Garfield"];
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
  const kittensNew = [...kittens, name];
  return kittensNew;
}

function prependKitten(name) {
  const kittensNew = [name, ...kittens];
  return kittensNew;
}

function removeLastKitten() {
  const kittensNew = kittens.slice(0,kittens.length -1);
  return kittensNew;
}

function removeFirstKitten() {
  const kittensNew = kittens.slice(1);
  return kittensNew;
}
