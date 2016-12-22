const app = "I don't do much."

var kittens = [
  'Milo',
  'Otis',
  'Garfield'
];

function destructivelyAppendKitten (name) {
  kittens.push(name);

  return kittens;
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name);

  return kittens;
}

function destructivelyRemoveLastKitten () {
  kittens.pop();

  return kittens;
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();

  return kittens;
}

function appendKitten (name) {
  return [...kittens, name];
}

function prependKitten (name) {
  return [name, ...kittens];
}

function removeLastKitten () {
  var newKittens = [
    'Milo',
    'Otis',
    'Garfield'
  ];

  newKittens.pop();

  return newKittens;
}

function removeFirstKitten () {
  var newKittens = [
    'Milo',
    'Otis',
    'Garfield'
  ];

  newKittens.shift();

  return newKittens;
}
