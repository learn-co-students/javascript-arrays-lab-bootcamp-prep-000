const app = "I don't do much.";
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(el) {
  kittens.push(el);
  return kittens;
}

function destructivelyPrependKitten(el) {
  kittens.unshift(el);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten() {
    return kittens.slice(1);
}

function appendKitten(el) {
  return [...kittens, el];
}

function prependKitten(el) {
  return [el, ...kittens];
}
