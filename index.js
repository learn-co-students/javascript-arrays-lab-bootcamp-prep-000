var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  var theseKittens = kittens;
  theseKittens.push(name);
  return theseKittens;
}

function destructivelyPrependKitten(name) {
  var theseKittens = kittens;
  theseKittens.unshift(name);
  return theseKittens;
}

function destructivelyRemoveLastKitten() {
  var theseKittens = kittens;
  theseKittens.pop();
  return theseKittens;
}

function destructivelyRemoveFirstKitten() {
  var theseKittens = kittens;
  theseKittens.shift();
  return theseKittens;
}

function appendKitten(name) {
  var theseKittens = kittens.concat(name);
  return theseKittens;
}

function prependKitten(name) {
  var theseKittens = [name].concat(kittens);
  return theseKittens;
}

function removeLastKitten() {
  var theseKittens = kittens.slice(0, kittens.length - 1);
  return theseKittens;
}

function removeFirstKitten() {
  var theseKittens = kittens.slice(1);
  return theseKittens;
}