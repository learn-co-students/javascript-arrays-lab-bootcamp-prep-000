var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  return kittens.push(name);
  
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
 var newArray = kittens.slice(0, 2);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1, 3);
  return newArray;
}