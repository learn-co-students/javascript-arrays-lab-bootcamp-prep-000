const app = "I don't do much."

//Test 2: Destructively Append Kitten to Kittens

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

destructivelyAppendKitten('Ralph');

//Test 3: Destructively Append Kitten to Kittens

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

destructivelyPrependKitten('Bob');

//Test 4: Destructively Remove Last Kitten from Kittens

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

destructivelyRemoveLastKitten();

//Test 5: Destructively Remove First Kitten from Kittens

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

destructivelyRemoveFirstKitten();

//Test 6: Append Kitten to New Array

function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

appendKitten('Broom');

//Test 7: Prepend Kitten to New Array

function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}

prependKitten('Arnold');

//Test 8: Remove Last Kitten in New Array

function removeLastKitten() {
  var newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
}

removeLastKitten();

//Test 9: Remove First Kitten in New Array

function removeFirstKitten() {
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}

removeFirstKitten();













