var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten);
 }

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(kitten) {
  let newKittens = kittens.concat(kitten);
  return newKittens
}

function prependKitten(kitten) {
  let newerKittens = [kitten].concat(kittens)
  return newerKittens
}

function removeLastKitten() {
  let lessKittens = kittens.slice(0, -1);
  return lessKittens;
}
function removeFirstKitten() {
  let less1Kitten = kittens.slice(1);
  return less1Kitten
}