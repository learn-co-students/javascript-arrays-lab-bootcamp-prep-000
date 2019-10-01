var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var foo = [...kittens];
  foo.push(name);
  return foo;
}

function prependKitten(name) {
  var foo = [...kittens];
  foo.unshift(name);
  return foo;
}

function removeLastKitten() {
  var foo = [...kittens];
  return foo.slice(0, foo.length - 1);
}

function removeFirstKitten() {
  var foo = [...kittens];
  return foo.slice(1);
}
