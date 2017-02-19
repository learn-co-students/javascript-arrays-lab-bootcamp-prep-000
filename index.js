const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = name => {
  kittens.push(name);
}

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
}

var appendKitten = name => {
  return [...kittens, name];
}

var prependKitten = name => {
  return [name, ...kittens];
}

var removeLastKitten = () => {
  return kittens.slice(0, kittens.length - 1);
}

var removeFirstKitten = () => {
  return kittens.slice(1);
}
