const app = "I don't do much."

// This is being set before we start...
// kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {

return kittens.push(name);

};

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
};

function destructivelyRemoveLastKitten() {
  return kittens.splice(-1, 1);
};

function destructivelyRemoveFirstKitten() {
  return kittens.splice(0, 1);
};

// now for the non-destructive versions

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
