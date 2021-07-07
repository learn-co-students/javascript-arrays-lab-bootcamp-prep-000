var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {

  kittens.push(name);

}

function destructivelyPrependKitten(name) {

  kittens.unshift(name)

}

function destructivelyRemoveLastKitten() {
  kittens.pop();

}

function destructivelyRemoveFirstKitten() {
  kittens.shift();

}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {

  return [name, ...kittens]
}

function removeLastKitten() {

  const newKittens = [...kittens]
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten() {
  const newKittens = [...kittens];
  newKittens.shift();

  return newKittens;
}
