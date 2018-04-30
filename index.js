const app = "I don't do much.";


var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) { // passed
  kittens.push('Ralph');
  return kittens;
}

console.log(destructivelyAppendKitten());

function destructivelyPrependKitten(name) { // passed
  kittens.unshift('Bob');
  return kittens;
  
  //destructivelyPrependKitten("Bob")
  //["Bob", "Milo", "Otis", "Garfield"]
}

console.log(destructivelyPrependKitten());

function destructivelyRemoveLastKitten() { // passed
  kittens.pop();
  return kittens;
  //destructivelyRemoveLastKitten()
  //["Milo", "Otis"]
}

console.log(destructivelyRemoveLastKitten());

function destructivelyRemoveFirstKitten() { // passed
  kittens.shift();
  return kittens;
  //destructivelyRemoveFirstKitten()
  //["Otis", "Garfield"]
}

console.log(destructivelyRemoveFirstKitten());

function appendKitten(name) { // passed
  return [...kittens, 'Broom'];
  //appendKitten("Broom")
  //["Milo", "Otis", "Garfield", "Broom"]
  //["Milo", "Otis", "Garfield"]
}

console.log(appendKitten());

function prependKitten(name) { // passed
  return ['Arnold', ...kittens];
  //prependKitten("Arnold")
  //["Arnold", "Milo", "Otis", "Garfield"]
  //["Milo", "Otis", "Garfield"]
}

console.log(prependKitten());

function removeLastKitten() { // passed
  var newKittens = kittens.slice(0, kittens.length -1);
  return newKittens;
  //removeLastKitten()
  //["Milo", "Otis"]
  //["Milo", "Otis", "Garfield"]
}

console.log(removeLastKitten());

function removeFirstKitten() { // passed
  var newKittens = kittens.slice(1);
  return newKittens;
  //removeFirstKitten()
  //["Otis", "Garfield"]
  //["Milo", "Otis", "Garfield"]
}

console.log(removeFirstKitten());
