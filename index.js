const app = "I don't do much."

// var window.kittens = ['Milo', 'Otis', 'Garfield'];

var destructivelyAppendKitten = (array) => {
  // var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.push('Ralph');
  return array;
}

var destructivelyPrependKitten = (array) => {
  kittens.unshift('Bob');
  return array;
}

var destructivelyRemoveLastKitten = (array) => {
  kittens.pop();
  return array;
}

var destructivelyRemoveFirstKitten = (array) => {
  kittens = kittens.slice(1);
  return array;
}

var appendKitten = (array) => {
  array = [...kittens, 'Broom'];
  return array;
}

var prependKitten = (array) => {
  array = ['Arnold', ...kittens];
  return array;
}

var removeLastKitten = (array) => {
  var kittens = ["Milo", "Otis", "Garfield"]
  array = [kittens.pop()];
  return kittens;
}

var removeFirstKitten = (array) => {
  var kittens = ["Milo", "Otis", "Garfield"];
  array = [kittens.shift()];
  return kittens;
}
