const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift();
}

function appendKitten(name) {
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length -1); //nondestructive way to remove last element in an array
  //begin at index 0 of array.lenght and remove last
}

function removeFirstKitten(name) {
  return kittens.slice(1); //remove first element without changing actual array value.
  // var kittens = kittens.slice(1); //if wish to mutate changes.
}
