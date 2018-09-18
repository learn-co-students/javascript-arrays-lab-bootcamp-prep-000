var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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

function appendKitten(name) {
  const kittens2 = [...kittens, name];
  return kittens2;
}

function prependKitten(name) {
  const kittens2 = [name, ...kittens];
  return kittens2;
}


function removeLastKitten() {
  const kittens2 = kittens.slice(0, kittens.length - 1)
  return kittens2
}

function removeFirstKitten() {
  const kittens2 = kittens.slice(1);
  return kittens2;
}




