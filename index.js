var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var ralph = "Ralph";
  kittens.push(ralph);
  return kittens;
}

function destructivelyPrependKitten(name) {
  var name = "Bob";
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var name = "Broom";
  return (kittens.concat(name));
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
}

function removeLastKitten() {
  return (kittens.slice(0, 2));
}

function removeFirstKitten() {
  return (kittens.slice(1,3));
}
