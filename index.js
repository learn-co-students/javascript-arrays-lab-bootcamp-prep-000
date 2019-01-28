var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

destructivelyAppendKitten('Ralph');

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

destructivelyRemoveLastKitten()


function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

destructivelyPrependKitten('Ralph');

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

destructivelyRemoveFirstKitten();

function appendKitten(name) {
  const kittens2 = [...kittens, name];
  return kittens2;
}

appendKitten('Broom');


function prependKitten(name) {
  const kittens2 = [name, ...kittens];
  return kittens2;
}

prependKitten('Broom');

function removeLastKitten() {
  const kittens2 = kittens.slice(0, kittens.length - 1);
  return kittens2;
}

removeLastKitten();


function removeFirstKitten() {
  const kittens2 = kittens.slice(1);
  return kittens2;
}

removeFirstKitten();