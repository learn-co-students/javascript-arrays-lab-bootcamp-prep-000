var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code hereasdg

var destructivelyAppendKitten = (name) => {
  return kittens.push(name);

}

var appendKitten = (name) => {
  return [...kittens, name];

}

var destructivelyPrependKitten = (name) => {
  return kittens.unshift(name);

}

var prependKitten = (name) => {
  return[name, ...kittens];

}

var destructivelyRemoveLastKitten = () => {
  return kittens.pop();

}

var removeLastKitten = () => {
  return kittens.slice(0, kittens.length - 1);

}

var destructivelyRemoveFirstKitten = () => {
  return kittens.shift();

}

var removeFirstKitten = () => {
  return kittens.slice(1);

}
