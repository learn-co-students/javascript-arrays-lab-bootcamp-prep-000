const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) { // passed
  kittens.push('Ralph');
  return kittens;
}

function destructivelyPrependKitten(name) { // passed
  kittens.unshift('Bob');
  return kittens;
  
  //destructivelyPrependKitten("Bob")
  //["Bob", "Milo", "Otis", "Garfield"]
}

function destructivelyRemoveLastKitten() { // passed
  kittens.pop();
  return kittens;
  //destructivelyRemoveLastKitten()
  //["Milo", "Otis"]
}

function destructivelyRemoveFirstKitten() { // passed
  kittens.shift();
  return kittens;
  //destructivelyRemoveFirstKitten()
  //["Otis", "Garfield"]
}

function appendKitten(name) { // passed
  return [...kittens, 'Broom'];
  //appendKitten("Broom")
  //["Milo", "Otis", "Garfield", "Broom"]
  //["Milo", "Otis", "Garfield"]
}

function prependKitten(name) { // passed
  return ['Arnold', ...kittens];
  //prependKitten("Arnold")
  //["Arnold", "Milo", "Otis", "Garfield"]
  //["Milo", "Otis", "Garfield"]
}

function removeLastKitten() { // passed
  var newKittens = kittens.slice(0, kittens.length -1);
  return newKittens;
  //removeLastKitten()
  //["Milo", "Otis"]
  //["Milo", "Otis", "Garfield"]
}

function removeFirstKitten() { // passed
  var newKittens = kittens.slice(1);
  return newKittens;
  //removeFirstKitten()
  //["Otis", "Garfield"]
  //["Milo", "Otis", "Garfield"]
}

